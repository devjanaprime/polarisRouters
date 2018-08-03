$( document ).ready( readyNow );

function readyNow(){
    console.log( 'JQ' );

} // readyNow

function addCandy(){
    $.ajax({
        method: 'POST',
        url: '/candies',
        data: { test: 'test'}
    }).then( function( response ){
        console.log( 'back from POST with:', response );
    }).catch( function( err ){
        alert( 'problem' )
    }) // end ajax
} // end addCandy

function getCandies(){
    // ajax GET call to /candies
    $.ajax({
        method: 'GET',
        url: '/candies'
    }).then( function( response ){
        console.log( 'back from GET with:', response )
    }).catch( function( err ){
        alert( 'no worky' );
    }) //end ajax
} // end getCandies

getCandies();