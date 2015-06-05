src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"

(function() {
  var body = $('body');
  $('.menu-toggle').bind('click', function() {
                         body.toggleClass('menu-open');
                         return false;
                         });
  })();
