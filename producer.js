
var q = 'tasks';

var open = require('amqplib').connect('amqp://localhost');

// Publisher
open.then(function(conn) {
  return conn.createChannel();
}).then(function(ch) {
  return ch.assertQueue(q).then(function(ok) {
    setInterval(()=>{ ch.sendToQueue(q, Buffer.from('something to do'))},2000)
    return ch.sendToQueue(q, Buffer.from('something to do'));
  });
}).catch(console.warn);