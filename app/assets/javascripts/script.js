$(document).ready(function(){
$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15 // Creates a dropdown of 15 years to control year
});
});


$(document).ready(function() {
  $('select').material_select();
});

$(document).ready(function(){
  $(".advancedOptions").hide();
  $("#moreOptions").click(function(){
      $(".advancedOptions").toggle();
  });
});

$('.carousel').carousel({
    padding: 200    
});
autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

$(document).ready(function(){
  $('.slider').slider();
});
