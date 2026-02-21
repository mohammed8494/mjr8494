const myEvent = require('events');

const cEvent = new myEvent(); // creating an object of EventEmitter class by help of which we can emit events and handle the events

cEvent.on('sayMyName', (name) => {
    console.log(`Your name is ${name}`);
});

cEvent.on('sayMyName', (_,age) => {
    console.log(`Your age is ${age}`);
});

cEvent.on('sayMyName', () => {
    console.log('Your name is Ankit');
});

cEvent.emit('sayMyName','mohammed',42);