$(document).ready(function() {


	$('.rope').click(function(){
		$('.leftcurtain').animate({"left": "-1200px"}, 2000);
		$('.rightcurtain').animate({"right": "-1200px"}, 2000);
		$(this).animate({"top": "2px"}, 500);
		$(this).animate({"top": "-380px"}, 300);
		$('.nav').removeClass("hidden");
		$('.nav').addClass("showin");
		$('.rock').animate({"bottom": "-20px"}, 2000);
		$('.panda').addClass("slideUp");
		$('.tigeress').removeClass("hidden");
		$('.tigeress').addClass("tiger-show");
		$('.crane').removeClass("hidden");
		$('.crane').addClass("crane-show");
		$('.monkey').removeClass("hidden");
		$('.monkey').addClass("monkey-show");
		$('.vaper').removeClass("hidden");
		$('.vaper').addClass("vaper-show");
		$('.mantis').removeClass("hidden");
		$('.mantis').addClass("mantis-show");
	});

});

$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
				menu: '#menu',
				scrollingSpeed: 1000
			});

});

