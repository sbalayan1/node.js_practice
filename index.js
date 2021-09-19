//  'require' is the traditional way to import modules into node
// const myModule = require('./my-module')
// console.log(myModule)

// const express = require('express')


//  const { EventEmitter } = require('events')
//  const eventEmitter = new EventEmitter() 

//  eventEmitter.on('lunch', () => {
//      console.log('yum')
//  })

//  eventEmitter.emit('lunch');


// sync === blocking. -> basically it will need to finish all of its work before any other code can run. The below is blocking 

// const { readFile, readFileSync} = require('fs')
//  const txt = readFileSync('./hello.txt', 'utf8')

//  console.log(txt)
//  console.log('do this Asap')
//  note that the second console log does not run until the first the txt is read. 

//  example of nonblocking code. this is done by refactoring the above code to a callback.  
// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// })

// note the above operation accesses an error object if the operation failss and the text from the file if it succeeds. In this case node registers the callback, executes the rest of the script, and runs the callback when the file has been read


// Promised based solutions -> note that promises are asynchronous and non blocking
// const { readFile } = require('fs').promises;

// // returns a promise!!!
// async function hello() {
//     const file = await readFile('./hello.text', 'utf8');
// }

const { readFile } = require('fs').promises
const express = require('express')
// an express app allows us to create dif urls and endpoints that a user can navigate to in the browser. We define code for the server to handle those requests
const app = express()

// typical get request that requests data from the server 
// (request, response) is a callback function. every get request is an event that is handled by the callback function
// the below is a way for us to send html from the server to the client
app.get('/', async (request, response) => {
    response.send( await readFile('./home.html', 'utf8') )
})

// tells the express app to start listening for any incoming requests. This is done by defining a PORT which usually comes from a node environment variable

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))


