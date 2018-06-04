            $(function(){
              SyntaxHighlighter.all();
            });
            $(window).load(function(){
              $('.flexslider').flexslider({
                animation: "fade",
				//slideshowSpeed: 999999,
                easing : "swing",
				smoothHeight : "true",
                start: function(slider){
                  $('body').removeClass('loading');
                }
              });
            });