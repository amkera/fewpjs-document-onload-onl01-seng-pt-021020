document.addEventListener( "DOMContentLoaded", function () {
  updateDOM()
} );

//when the DOM has loaded, execute the function called updateDOM

function updateDOM() {
  let text = document.getElementById( "text" )
  text.innerHTML = "This is really cool!";
}

//get the id element called text, and replace its HTML