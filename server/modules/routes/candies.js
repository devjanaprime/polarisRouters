// 1st Polaris Router 
// requires
const express = require( 'express' );
const router = express.Router();
// globals
let candies = [ { name:'skittles', flavors: [ 'strawberry', 'apple(green)', 'lemon', 'grape', 'orange' ] }]
// routes
router.get( '/', ( req, res )=>{
    console.log( '/candies GET route hit' )
    res.send( candies );
}) // end GET
router.post( '/', ( req, res )=>{
    console.log( 'POST:', req.body );
    res.send( 'meow' );
}) // end POST
// exports
module.exports = router;