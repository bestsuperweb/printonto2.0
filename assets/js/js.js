$( document ).ready(function() {

    new WOW().init();

	//LOADER/SPINNER
	$(window).bind("load", function() {

	    "use strict";
	    
	    $(".spn_hol").fadeOut(300);
	});

	$('#navbarSideButton').on('click', function(){
		$('#navbarSide').addClass('reveal');
		$('.overlay').show();
	});

	$('.overlay').on('click', function(){
	    $('#navbarSide').removeClass('reveal');
	    $('.overlay').hide();
	  });

	$('.side-link.top').on('click', function(){
	    $('#navbarSide').removeClass('reveal');
	    $('.overlay').hide();
	  });

	$('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });

	$('.flexslider1').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });

	$('.flexslider1 .flex-control-nav li').each(function(index, element){
		setTimeout( function(){
				    $(element).addClass('animated slideOutDown');
				  }, (100 * index));
	});

	$(window).scroll(function(){
	    var Top = $('#testimonial').offset().top - 600;
	    if($(this).scrollTop() >= Top){	        
			$('.flexslider1 .flex-control-nav li').each(function(index, element){
				setTimeout( function(){
						    $(element).removeClass('slideOutDown').addClass('animated bounceInUp');
						  }, (100 * index));
			});
	    }
	});
	$('.why-images img').hide();
	$('.why-images img').each(function(index, element){
		setTimeout( function(){
				    $(element).show().addClass('animated slideInUp');
				  }, (500 * index));
	});
    
    $('.flex-control-thumbs img').on('mouseenter', function(){
    	var index = $('.flex-control-thumbs img').index($(this));
    	var str = '';
    	switch(index){
    		case 0:
    			str = 'Canvas';
    			break;
    		case 1:
    			str = '&nbsp;Wood';
    			break;    			
    		case 2:
    			str = 'Metal';
    			break;
    		case 3:
	    		str = '&nbsp;Vynil';
	    		break;    			
    	}

    	$(this).parent().append('<span class="thumb-over">'+str+'</span>');
    });	
	
	$('.flex-control-thumbs img').on('mouseout', function(){
    	$('.flex-control-thumbs li span.thumb-over').remove();
    });	

	
});