setTimeout('.wO textarea').val(emails[size]).click();
var image_url_before = $('.rapportive-profile-image img').attr('src');
setTimeout(function() {
  var image_url_after = $('.rapportive-profile-image img').attr('src');
  setTimeout(function() {
    if(image_url_before != image_url_after && image_url_after != undefined) {
      correct_emails.push(emails[size]);
    }
    setTimeout(function() {
      magic(size - 1);
    }, 100)
  }, 100)
}, 2000);