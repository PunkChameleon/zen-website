
		jQuery(function(){
			jQuery('#products').slides({
				preload: true,
				preloadImage: 'assets/images/loading.gif',
				effect: 'slide, fade',
				crossfade: true,
				slideSpeed: 350,
				fadeSpeed: 500,
		
				generateNextPrev: true,
				generatePagination: false
			});
		});
		
		
		$(document).ready(function($) {
		$('.tab_title a').addClass('collapsed');
		$('.fc a').removeClass('collapsed');
		$('.tab_ul li:first-child').addClass('active');
		//$('body').addClass('bg-cover');
		$('#menu').slicknav();
		// Style Selector	
		$('#style-selector').animate({
			left: '-213px'
		});

		$('#style-selector a.close').click(function(e){
			e.preventDefault();
			var div = $('#style-selector');
			if (div.css('left') === '-213px') {
				$('#style-selector').animate({
					left: '0'
				});
				$(this).removeClass('icon-angle-left');
				$(this).addClass('icon-angle-right');
			} else {
				$('#style-selector').animate({
					left: '-213px'
				});
				$(this).removeClass('icon-angle-right');
				$(this).addClass('icon-angle-left');
			}
		})
		})
		
		
		
		
  