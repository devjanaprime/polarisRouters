// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

//uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// globals
const port = 5000;
let candies = [ { name:'skittles', flavors: [ 'strawberry', 'apple(green)', 'lemon', 'grape', 'orange' ] }]

// server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end server up

app.get( '/candies', ( req, res )=>{
    console.log( '/candies GET route hit' )
    res.send( candies );
})