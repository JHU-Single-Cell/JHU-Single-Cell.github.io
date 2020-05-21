// JavaScript Document

// Initialize InputMask
$(":input").inputmask();

var $form = $('form#engage-form'),
    $url = 'https://script.google.com/macros/s/AKfycbzV1f3DollZkQN-wunGs1Af7gYKXUHc2hb01kFMZRW8FERJZmo/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var obj = $form.serializeObject();

  $('form#engage-form input[type=checkbox]').each(function() { obj[this.name] = this.checked; });

  obj = $.param(obj);

  console.log(obj);
  var jqxhr = $.ajax({
    url: $url,
    method: "GET",
    dataType: "json",
    data: obj
  }).done(
    // do something
  );
})