const express = require( 'express' )


const app = express()


app.get( '/auth', ( req, res ) => {
	console.log( req.query )

	res.json( {
		token: '123'
	} )
	
})


app.listen( 3000, () => {
	console.log( 'server started' )
})