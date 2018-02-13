		
		var cineplex_home='http://www.cineplexbd.com/';
		var bypass_url='https://cors-anywhere.herokuapp.com/';
		$(document).ready(function(){
			$.ajax({
				url: bypass_url+cineplex_home,
				complete: function(data){
					$('#emptydata1').html(data.responseText);
					$('link[rel=stylesheet][href~="http://www.cineplexbd.com/common/css/common.min.css"]').remove();
					$('#showtime').html($('#emptydata1').find('#sectionA'));
					//$('#sectionA').find('a').removeAttr('href');
					$('#sectionA').find('a[class="btn btn-primary btn-xs"]').css("display", "none");
					$('.carousel-control').css({
						"position":"absolute",
						"top":"0",
						"bottom":"0",
						"left":"0",
						"width":"15%",
						"font-size":"20px",
						"color":"#fff",
						"text-align":"center",
						"text-shadow":"0 1px 2px rgba(0,0,0,.6)",
						"opacity":".5"
					});
					$('.carousel-control').css({
						"background":"#2d6892",
						"background-image":"none",
						"background-repeat":"repeat",
						"border":"0",
						"border-radius":"2px",
						"display":"inline-block",
						"font-size":"34px",
						"font-weight": "200",
						"line-height":"15px",
						"opacity":".3",
						"padding":"4px 20px 0 20px",
						"position":"relative",
						"height":"30px",
						"width":"15px",
						"margin-top":"100px"
					});
					$('.carousel-control.left').css("background-image", "none");
					$('.carousel-control.right').css("background-image", "none");
					$('.carousel-control:focus','.carousel-control:hover').css({
						"color":"#fff",
						"text-decoration":"none",
						"outline":"0",
						"opacity":".9"
					});
					$('.carousel-control.right').css({
						"right":"0",
						"left":"auto",
						"background-image":"-webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%)",
						"background-image": "-o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%)",
						"background-image": "-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)))",
						"background-image": "linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%)",
						"background-repeat": "repeat-x"
					});
					$('.caption').find('a').removeAttr('href');
					$('.thumbnail').find('a').removeAttr('href');
					}
			});
			
			
		});
		var showtime_url="http://www.cineplexbd.com/cineplexbd/showtime";
		$.ajax({
				url: bypass_url+showtime_url,
				complete: function(data){
					console.log(data);
					$('#emptydata2').html(data.responseText);
					$('link[rel=stylesheet][href~="http://www.cineplexbd.com/common/css/common.min.css"]').remove();
					$('#schedule').html($('#emptydata2').find('.row'));
					$('.content1').css("display","none");
					$('ul[class="list-unstyled link-list"]').css("display","none");
					$('.col-sm-6').css("display","none");
					$('.md-margin-bottom-40').css("display","none");
					
					$('.block_title').css("display","none");
					$('.col-md-6').css("display","none");
					$('span[class="buy-ticket-tx"]').css("display","none");
					$('.node').css("display","none");
					$('.pull-right').css("display","none");
					$('#starvip').css("backgroundColor", "#55C8FF");
					$('#starpremium').css("backgroundColor", "#5BDF83");
					$('#ohalls').css("backgroundColor", "#FFD564");
					$('a[class="text-info"]').removeAttr("href");
					$('.time-select').css("margin-top", "8px");
					$('.time-select .time-select__group').css({
						"background-color":"#f5f5f5",
						"margin-bottom": "2px",
						"overflow":"hidden",
						"position":"relative"
					});
					$('.time-select .time-select__group_next').css({
						"background-color":"#dbeaf9",
						"margin-bottom": "2px",
						"overflow":"hidden",
						"position":"relative"
					});
					$('.time-select .time-select__group:before').css({
						"background-color":"#fff",
						"content": "",
						"height":"25px",
						"left":"31%",
						"position":"absolute",
						"top":"0",
						"width":"2px"
					});
					$('.time-select .time-select__group:after').css({
						"background-color":"#fff",
						"bottom":"0",
						"content":"",
						"height": "25px",
						"left":"31%",
						"position":"absolute",
						"width":"2px"
					});
					$('.time-select .group--first:before').css("display","none");

					$('.time-select .group--last:after').css("display","none");
					$('btn-xs').css({
						"padding":"1px 5px",
						"font-size": "12px",
						"line-height":"1.5",
						"border-radius": "3px"
					});
					$('btn-general').css({
						"background-image": "linear-gradient(to bottom,#ffd564 0,#ffd564 100%)",
						"background-repeat":"repeat-x",
						"border-color":"#ffd564"
					});


					}
			});
			
			
		