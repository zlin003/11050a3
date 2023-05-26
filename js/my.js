window.onload = function() {
  // Get the button
  let mybutton = document.getElementById("back-to-top-btn");

  // No need to check for scroll position, always display the button
  mybutton.style.display = "block";

  // When the user clicks on the button, scroll to the top of the document
  mybutton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
