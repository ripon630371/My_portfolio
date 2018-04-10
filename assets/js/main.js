$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();
    
   	// team owlcarousel..................................
    $('.owl-carousel-team').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:false,
            autoplay:true,
		    items:4,
		    margin:20,
            smartSpeed:1000,
            autoplayTimeout:2000,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:5
		        }
		    }
	});

	   	// testimonial owlcarousel...........................
    $('.owl-carousel-testimonial').owlCarousel({
		    loop:true,
            margin:10,
            nav:false,
            autoplay:true,
            items:1,
            autoplayTimeout:2000,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
		  
	});


    //magnificPopup js code.............................
     $('#youtube_pop').magnificPopup({
     	type:'iframe',iframe: {
			  patterns: {
			    youtube: {
			      index: 'youtube.com/', 
			      id: 'v=', 
					src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
			    }
			  },

	  	srcAction: 'iframe_src',
		}
    });


     $('.skillbar').skillBars({
  	// options here
  	
  	//counter_box  js code.............................
	});
     $('.counter_num').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 4000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	 });



    //mixitup section code......................
    var mixer = mixitup('.protfolio_content');

    //magnificPopup images
    $('.image-link').magnificPopup({type:'image'});

    //statue_bar coding............................
    $(window).scroll(function(){
    	var scroll_value = $(window).scrollTop();
    	$('.statue_bar').html(scroll_value);
    	if(scroll_value>220){
    		$('.navbar').addClass('navbar_fixed');
            $('.scroll_top_ber').fadeIn();  	
    	}else{
    		$('.navbar').removeClass('navbar_fixed');
            $('.scroll_top_ber').fadeOut(); 
    	}
    	
    	/*if(scroll_value>220){
    		$('.logo').addClass('hide_logo');	
    	}else{
    		$('.logo').removeClass('hide_logo');
    	}*/
    });

    //typewriter effect ...........................

   	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    // Add smooth scrolling to all links............................
    
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

}(jQuery));