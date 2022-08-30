import { Router } from 'itty-router'
const { processTextMessage } = require('./usecase');

const router = Router()

router.get("/", () => {
  return new Response("Hello!")
})

router.post("/webhook", async request => {

	if(request.method != 'POST'){
		return new Response("Method Not Allowed", {
			status: 405
		  })
	}
    //let body = await request.json();
    let body = await request.formData();

	const {
		message,
		from,
	} = Object.fromEntries(body)

    console.log(`new sms from : ${from} wiht message : ${message}`);
    
   	await processTextMessage(from, message);
    var result = {'done': true};
    let returnData = JSON.stringify(result, null, 2);
    return new Response(returnData, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  })
  

router.all("*", () => new Response("404, not found!", { status: 404 }))

addEventListener('fetch', (e) => {
    e.respondWith(router.handle(e.request))
})
