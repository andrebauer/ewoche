//  $('#toc').appendTo('#toc-left');

$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
  if ($(".toc").css("float") == "none" ){
    $('#toc').appendTo('#toc-left');
    $('#sidebar-left').toggle(true);
  } else {
    $('#toc').prependTo('.post-content');
    $('#sidebar-left').toggle(false);
  /*  $('#navbar-top-na */
  }
}
