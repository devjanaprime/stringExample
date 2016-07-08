// string array exercise
// by @devjana
// last edited 7/8/2016


var checkForSpaces = function(){
  // get user input
  var stringIn = document.getElementById('stringIn').value;
  var outputText = stringIn;
  var foundSpaces = false;
  // check stringIn for ''
  for( i=0; i<stringIn.length; i++ ){
    if( stringIn[i] == ' ' ){
      foundSpaces = true;
    } // end found space
  } // end for
  if( foundSpaces ){
    outputText += " does contain spaces";
  }
  else{
    outputText += " does not contain spaces";
  }
  showText( outputText );
} // end function

var removeCharacter = function(){
  // get user input
  var stringIn = document.getElementById('stringIn').value;
  var toBeRemoved = document.getElementById('toBeRemovedIn').value;
  var outputText = "Removing " + toBeRemoved + " from " + stringIn + ": ";
  stringIn = stringIn.replace( toBeRemoved, '' );
  outputText += stringIn;
  showText( outputText );
} // end function

var showText = function( textToShow ){
  var newParagraph = document.createElement( 'p' );
  newParagraph.textContent = textToShow;
  document.getElementById( 'outputDiv' ).appendChild( newParagraph );
} // end function
