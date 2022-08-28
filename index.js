import { Router } from 'itty-router'
const { processTextMessage } = require('./usecase');

const router = Router()

router.get("/", () => {
  return new Response("Hello!")
})

router.post("/webhook", async request => {

    let body = await request.json();
    
    let message = body.message;
 	  let sender = body.sender;
   	await processTextMessage(sender, message);
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
