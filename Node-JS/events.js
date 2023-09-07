const eventEmiter = require('events')

class myEmiter extends eventEmiter {}

const MyEmiter = new myEmiter()
MyEmiter.on('event', () => {
    console.log('client connected');
})
MyEmiter.emit('event')