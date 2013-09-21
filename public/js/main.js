$(function () {
  $('#resources').click(function() {
    $('#list-1').append('<li>Law Guides</li>');
  });
  
  $('li').on('click', function(e) {
    $(e.currentTarget).remove();
  });

  $('.datepicker').pickadate();


});