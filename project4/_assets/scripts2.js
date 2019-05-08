$(document).ready(function(){

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



$("#button").click(function() {
  $('.transform').toggleClass('transform-active');
});




$('form').on('submit', function (event) {
  event.preventDefault();
  var fullName = $('#full-name').val();
  $('#input-value').text(fullName);

  if (fullName.length === 0) {
      alert("fill out your name!");
  }

  var city = $('select').val();
  $('#select-value').text(city);

  if (city.length === 0) {
      alert("Select a location!");
  }

});


});
