// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const candies = require( './modules/routes/candies' );
//uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/candies', candies );
// globals
const port = 5000;
// server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end server up
