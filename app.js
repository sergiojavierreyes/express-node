const express = require( 'express')
const app = express()

app.get('/', (request, response) => 
	response.status(418) 
	response.send('Hello World!!!!!!')
})

app.listen(2000, () => {
	console.log(' I am Listening 	')
})









