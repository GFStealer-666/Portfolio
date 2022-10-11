window.onload = pageLoad;

function pageLoad(){
	closemt();
// 	var element_position = $('#skills').offset().top;
// 	var screen_height = $(window).height();
// 	var activation_offset = 0.5;
// 	var activation_point = element_position - (screen_height * activation_offset);
// 	var max_scroll_height = $('body').height() - screen_height - 5;

// 	$(window).on('scroll', function() {
//     var y_scroll_pos = window.pageYOffset;

//     var element_in_view = y_scroll_pos > activation_point;
// 	var stopTheloop = false;
//     if(element_in_view && stopTheloop == false) {
// 		stopTheloop = true;
//         feskillbar();
//     }
// });
}

function closemt(){
    closeButton = document.getElementById("mountain-btn");
	closeButton.onclick = function(){
		mountain = document.getElementById("fixed-mountain");
		mountain.style.position = "absolute";
		mountain.style.ZIndex = "-10"; 
		closeButton.style.display = "none";
	}
}

// function skillbar(){
	
// }
// function feskillbar(){

// 	var elem = document.getElementById("fe-skill-bar");
// 	var width = 0;
// 	var id = setInterval(frame, 30);
// 	function frame() {
// 	  if (width >= 30) {
// 		clearInterval(id);
// 	  } else {
// 		width++;
// 		elem.style.width = width + '%';
// 	  }
// 	}
// }