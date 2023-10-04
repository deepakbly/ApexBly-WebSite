



            //new WOW().init();
			wow = new WOW(
					{
					boxClass:     'wow',      // default
					animateClass: 'animated', // default
					offset:       0,          // default
					mobile:       false,       // default
					live:         true        // default
					}
                )
			wow.init();
	   

		  var owl = $('.news-carasoul');
		  owl.owlCarousel({
			margin: 0,
			  nav: true,
			  dots: false,
			  loop: true,
			  autoplay: true,
			  autoplaySpeed: 1000,
			responsive: {
			  0: {
				items: 1
			  },
			  568: {
				items: 2
			  },
			  1000: {
				items: 2
			  }
			}
		  })



		  var owl = $('.test-slider');
		  owl.owlCarousel({
			margin: 0,
			  nav: true,
			  dots: false,
			  loop: true,
			  autoplay: true,
			  autoplaySpeed: 1000,
			responsive: {
			  0: {
				items: 1
			  },
			  768: {
				items: 2
			  },
			  1000: {
				items: 3
			  },
			  1200: {
				items: 4
			  }
			}
		  })



		  var owl = $('.p-logo-carasoul');
		  owl.owlCarousel({
			margin: 0,
			  nav: false,
			  dots: false,
			  loop: true,
			  autoplay: 500,
			  autoplaySpeed: 1000,
			  
			  
			    autoplay:true,
				autoplayTimeout:3000,
				autoplayHoverPause:true,
			  
			  
			responsive: {
			  0: {
				items: 2
			  },
			  568: {
				items: 3
			  },
			  768: {
				items: 5
			  },
			  1000: {
				items: 6
			  }
			}
		  })





	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('header').addClass("sticky");
			//$('.megamenu').removeClass('swipe');
//			$('.menu-toggle').removeClass('arrow-r');
//			$('.mobile-header').removeClass('tog');
		  }
		  else{
			$('header').removeClass("sticky");
		  }
	});




// on scroll menu hide


			var prevScrollpos = window.pageYOffset;
			window.onscroll = function() {
			var currentScrollPos = window.pageYOffset;
			  if (prevScrollpos > currentScrollPos) {
				document.getElementById("header").style.top = "0";
			  } else {
				document.getElementById("header").style.top = "-120px";
			  }
			  prevScrollpos = currentScrollPos;
			}








	$('.menu-toggle').click(function() {
		//$(this).toggleClass('arrow-r');
		//$('.mobile-header').toggleClass('tog');
		$('.megamenu').toggleClass('swipe');
		$( ".body-color-overlay" ).toggleClass('show');
		$('body').toggleClass('noscroll');
		$('.logo').toggleClass('hidden');
		$('header.sticky').toggleClass('h-st');
		
		$("body").bind("mousewheel", function() {
		   return false;
     	});
		
		//target the entire page, and listen for touch events
		$('html, body').on('touchstart touchmove', function(e){ 
			 //prevent native touch activity like scrolling
			 e.preventDefault(); 
		});
		
	});


		
		$(window).scroll(function(){
			if ($(window).scrollTop() >= 300) {
				$('.goto-top').show();
			}
			else {
				$('.goto-top').hide();
			}
		});

$('.goto-top').click(function(){
    $("html, body").animate({ scrollTop: '0' }, 600);
});
		


	$(window).scroll(function () {
		if ($(window).scrollTop() >= 300) {
			$('.footer-fixed-bar').slideDown(500);
		}
		else {
			$('.footer-fixed-bar').slideUp(500);
		}
	});








  $('#search-page, #search-page-mob').click(function() {
  	$( ".searchbar" ).addClass('show');
  	$( ".body-color-overlay" ).addClass('show');
  	$( "body" ).addClass('noscroll');
  	$( "header .col-md-3" ).addClass('hidden');
	  
	  $("body").bind("mousewheel", function() {
		 return false;
	  });
	  
	  //target the entire page, and listen for touch events
		$('html, body').on('touchstart touchmove', function(e){ 
			 //prevent native touch activity like scrolling
			 e.preventDefault(); 
		});
	  
  });

  $('.close-btn').click(function() {
  	$( ".searchbar" ).removeClass('show');
  	$( ".body-color-overlay" ).removeClass('show');
    $( "body" ).removeClass('noscroll');
	$( "header .col-md-3" ).removeClass('hidden');
	  
	  $("body").unbind("mousewheel");
  });




  $('.body-color-overlay').click(function() {
  	$( ".searchbar" ).removeClass('show');
	$('.megamenu').removeClass('swipe');
  	$( this ).removeClass('show');
    $( "body" ).removeClass('noscroll');
	$( "header .col-md-3" ).removeClass('hidden');
  	//$('.menu-toggle').removeClass('arrow-r');
  	$('.logo').removeClass('hidden');
  	//$('.mobile-header').removeClass('tog');
  	$('header.sticky').removeClass('h-st');
	  
	   $("body").unbind("mousewheel");
  });






$('ul[class*="step-one-menu"] li').click(function(){
	$('ul[class*="step-one-menu"] li').removeClass('active');
	if($(this).attr('class').indexOf('active')>-1)
		{
			$(this).removeClass('active');
		}
	else{
			$(this).addClass('active');
		}
	//$('ul[class*="step-one-menu"] li').removeClass('active');
	
	//alert($('.step-one-menu > li').length);
	var _index=$(this).index();
	_index=_index*20;
	
	//alert($(this).scrollTop());
	$(".megamenu").animate({ scrollTop: _index.toString() }, 600);
});






$( document ).ready(function() {
		$(function() {  
		  $('.animate-btn')
			.on('mouseenter', function(e) {
					var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
					$(this).find('.effect-btn').css({top:relY, left:relX})
			})
			.on('mouseout', function(e) {
					var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('.effect-btn').css({top:relY, left:relX})
			});
		  $('[href=#]').click(function(){return false});
		});
	});


/**/







// for page loader
$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1000);

});




//typewriter js



function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function typeWrite(span){
  $('#'+span).addClass('cursor')
  var text = $('#'+span).text();
  var randInt = 0
  for (var i = 0; i < text.length; i++) {
    randInt += parseInt(randomIntFromInterval(40,100));
    var typing = setTimeout(function(y){
      $('#'+span).append(text.charAt(y));
    },randInt, i);
  };
  setTimeout(function(){
    $('#'+span).removeClass('cursor');
  },randInt+2500);
}

$(document).ready(function(){
  typeWrite('test');
});

$(document).ready(function(){
  typeWrite('test2');
});



//


$(document).ready(function() {

  $('#testimonial-all').click(function() {
  	$( ".testimonial-element" ).addClass('open');
  	$( "body" ).addClass('noscroll');
  });
	
  $('.thumb-testi-all').click(function() {
  	$( ".testimonial-element" ).addClass('open');
  	$( "body" ).addClass('noscroll');
  });	
	
  $('.testi-heading ul li a').click(function() {
  	$( ".testimonial-element" ).addClass('open');
  	$( "body" ).addClass('noscroll');
  }); 
	
  $('.closebtn').click(function() {
  	$( ".testimonial-element" ).removeClass('open');
  	$( "body" ).removeClass('noscroll');
  });
});





$(document).ready(function() {

  $(".noti-icon button").click(function() {
  	$( ".notifi-listing" ).toggleClass('close-swipe');
  }); 
	
});






	 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");


// video section script
"use strict";
    document.addEventListener('DOMContentLoaded', function() {
        // Activate only if not already activated
        if (window.hideYTActivated) return;
        // Activate on all players
        let onYouTubeIframeAPIReadyCallbacks = [];
        for (let playerWrap of document.querySelectorAll("#hytPlayerWrap")) {
            let playerFrame = playerWrap.querySelector("iframe");
            
            let tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            let firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
            let onPlayerStateChange = function(event) {
                if (event.data == YT.PlayerState.ENDED) {
                    playerWrap.classList.add("ended");
                } else if (event.data == YT.PlayerState.PAUSED) {
                    playerWrap.classList.add("paused");
                } else if (event.data == YT.PlayerState.PLAYING) {
                    playerWrap.classList.remove("ended");
                    playerWrap.classList.remove("paused");
                }
            };
            
            let player;
            onYouTubeIframeAPIReadyCallbacks.push(function() {
                player = new YT.Player(playerFrame, {
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });
            });
          
            playerWrap.addEventListener("click", function() {
                let playerState = player.getPlayerState();
                if (playerState == YT.PlayerState.ENDED) {
                    player.seekTo(0);
                } else if (playerState == YT.PlayerState.PAUSED) {
                    player.playVideo();
                }
            });
        }
		
		// New Video Code
		for (let playerWrap of document.querySelectorAll("#hytPlayerWrapvideo")) {
            let playerFrame = playerWrap.querySelector("iframe");
            
            let tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            let firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
            let onPlayerStateChange = function(event) {
                if (event.data == YT.PlayerState.ENDED) {
                    playerWrap.classList.add("ended");
                } else if (event.data == YT.PlayerState.PAUSED) {
                    playerWrap.classList.add("paused");
                } else if (event.data == YT.PlayerState.PLAYING) {
                    playerWrap.classList.remove("ended");
                    playerWrap.classList.remove("paused");
                }
            };
            
            let player;
            onYouTubeIframeAPIReadyCallbacks.push(function() {
                player = new YT.Player(playerFrame, {
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });
            });
          
            playerWrap.addEventListener("click", function() {
                let playerState = player.getPlayerState();
                if (playerState == YT.PlayerState.ENDED) {
                    player.seekTo(0);
                } else if (playerState == YT.PlayerState.PAUSED) {
                    player.playVideo();
                }
            });
        }
		// End New Video Code
		
		window.onYouTubeIframeAPIReady = function() {
            for (let callback of onYouTubeIframeAPIReadyCallbacks) {
                callback();
            }
        };
        
        window.hideYTActivated = true;
    });
  function play() {
	  $('.play_button').hide();
	  $('#div_first_element').css('background','none');
	  $('#div_first_element').css('position','absolute');
	  $('#div_first_element').css('z-index','1');
	  $('head').append('<style>.inner-page-banner:before{background: transparent;}</style>'); 
      $('.banner_background').css('position','relative');
	  $('.inner-banner-overlay').css('background','none');
	  $('.banner-inner-content').css('padding','0px');
	 var IsMobile='0';
     if(/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
                IsMobile = '1'
	 }
	  if(IsMobile=="1")
		  {
			  $(window).scrollTop(0);
			  try	{	
			  $('.banner-btns').find("li:nth-child(3)").hide();
			  $('.banner-btns').find("li:nth-child(4)").hide();
			  } catch(e)
				  {}
			  $('.banner-btns').find('a').css('height','30px');
			  $('.banner-btns').find('a').css('line-height','30px');
			  $('.banner-btns').find('a').css('font-size','10px');
			  $('#div_first_element').css('z-index','unset');
			  var width=$(window).width();
			  if(width>=320 && width<=350)
				  {
					  $('.banner-inner-content').css('padding-top','10px');
					  $('.pagination-page').css('padding-top','60px');
				  }
			  else if(width>=480 && width<=580)
				  {
					  $('.banner-inner-content').css('padding-top','60px');
					  $('.pagination-page').css('padding-top','54px');
				  }
			  $('#videobg').append('<link rel="stylesheet" href="../assets/css/video-responsive.css">');
			}
	  
	        else {
			$('#div_first_element').append('<link rel="stylesheet" href="../assets/css/desk-video-responsive.css">'); 
			  }
	   $('#div_first_element').css('top',(IsMobile=='1'?'130px':''));
	  
	  //var video_src=$('#hytPlayerWrap').find('iframe').attr('src');
     //  $('#hytPlayerWrap').find('iframe').attr('src',video_src.substring(0,video_src.length-1)+'1');
	  
  var x = document.getElementById("videobg");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// end video section script



// accordion video section script
$('.i-accordion').on('show.bs.collapse', function(n){
  $(n.target).siblings('.panel-heading').find('.panel-title-head i').toggleClass('fa-chevron-down fa-chevron-up');
});
$('.i-accordion').on('hide.bs.collapse', function(n){
  $(n.target).siblings('.panel-heading').find('.panel-title-head i').toggleClass('fa-chevron-up fa-chevron-down');
});

/* P */
$('.accordion-1a').on('show.bs.collapse', function(n){
  $(n.target).siblings('.panel-heading').find('.panel-title-head i').toggleClass('fa-minus fa-plus');
});
$('.accordion-1a').on('hide.bs.collapse', function(n){
  $(n.target).siblings('.panel-heading').find('.panel-title-head i').toggleClass('fa-plus fa-minus');
});






$('body').delay(100).animate({'opacity':'1'},1200);

    



