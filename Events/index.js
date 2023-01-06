const http = require('http');
const events = require('events');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world\n');
})

// initilizing event emitter obj
const Emitter = new events.EventEmitter();

// subscribing for ping event
Emitter.on("ping", data => console.log("First event triggered: ",data))

// triggering ping event
Emitter.emit("ping", "Pong...")

// subscribing event that triggers once...
let triggerCount = 0;
Emitter.once("once", () => console.log(`Once event called!\n${++triggerCount}`))

Emitter.emit("once")
Emitter.emit("once")
// triggering twice but it is accepting firstone


//inspite of having try..catch node provides error handling events
Emitter.on("error", console.error)

Emitter.emit("error", new Error("Oops... error!"))

server.listen(8080, () => console.log('Running on 8080'));