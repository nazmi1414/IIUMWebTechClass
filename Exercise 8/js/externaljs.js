$(document).ready(function(){
  $('#more-input-button').on('click',function(){
    $('#name-inputs').append("<input type ='text'>");
    $('#name-inputs input:last-child').focus();
  });

  function validateinputs(){
    $('#name-inputs > input').each(function(){
      if ($(this).val()=== "") {
        $(this).removeClass().addClass('alert');
      }
        else {
        $(this).removeClass().addClass('ok');
      }
    });
  }

  $('#name-inputs').delegate('input[type="type"]', 'keyup blur', function(){
    validateinputs();
  });

  $('#submit-button').on('click',function(){
    validateinputs();
    $("input").prop("readonly",true);
  });
});
