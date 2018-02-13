function searchname(){
			var mn=document.getElementById('moviename').value;
			
			var google_url="https://www.google.com/search?q="+mn;
			var bypass_url='https://cors-anywhere.herokuapp.com/';
			$(document).ready(function(){
				$.ajax({
				url: bypass_url+google_url,
				complete: function(data){
					

					$('#fulldata').html(data.responseText);
					$('#googledata').html($('#fulldata').find('#rhs_block'));
					
					

					}
			});
			
			
		});
		}