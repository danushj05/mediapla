// import json-server liberary in index.js

 const jsonServer =require ('json-server')

 // create server using json-server liberary
 const mediaplayerserver = jsonServer.create()

 // create a path to db.json
 const router = jsonServer.router('db.json')

 //middleware to convert  js to json
 const middleware = jsonServer.defaults()

 //connect
 mediaplayerserver.use(middleware)
 mediaplayerserver.use(router)


 // setup port for server
 const port = 5000 || process.env.port

 // monitor 5000
 mediaplayerserver.listen(port,()=>{
    console.log(`mediaplayer server is listening on ${port} and waiting for the request`)
 })
