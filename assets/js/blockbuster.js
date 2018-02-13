		var blockbuster_ns='http://www.blockbusterbd.com/now_showing.php';
		var bypass_url='https://cors-anywhere.herokuapp.com/';
		$(document).ready(function(){
			$.ajax({
				url: bypass_url+blockbuster_ns,
				complete: function(data){
					$('#here').html(data.responseText);
					$('#gg').html($('#here').find('#all'));
					$('h3').css("display","none");
					$('p').css("height", "55px");
					$('h5').css("font-size", "15px");

					}
			});
			
			
		});

		var showtime_url='http://www.blockbusterbd.com/schedule.php';
		$(document).ready(function(){
			$.ajax({
				url: bypass_url+showtime_url,
				complete: function(data){
					$('#blankdata').html(data.responseText);
					$('#st').html($('#blankdata').find('.strip_all_rooms_list'));
					$('h3').css("font-size","15px");
					$('a').removeAttr("style");
					$('.border_style_for_image').find('a').removeAttr('href');
					$('a[class="tooltip-1 btn_1"]').css("display","none");
					$('.table-striped thead th').filter(':nth-child('+3+')').remove();
					}
					
			});
			
			
		});