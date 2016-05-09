// JavaScript Document
$( document ).ready(function($){
$( ".answer2" ).hover(function(){
    $(this).css("cursor", "pointer");
    }, function(){
    $(this).css("cursor", "auto");
});
$( ".answer2" ).click(function() {
  if ($(this).siblings('.clicked').length) {
	  $(this).siblings('.clicked').removeClass('clicked');
	  $(this).addClass('clicked');
	  }
   else {
	   $(this).addClass('clicked');
	   }
});

$( "#results" ).click(function() {
  var quests = 0;
  var corQuests = 0;
  var numbClicked = 0;
  $( ".question" ).each(function() {
    quests++;
  });
  $( ".correct.clicked" ).each(function() {
    corQuests++;
  });
  $( ".clicked" ).each(function() {
    numbClicked++;
  });
  if ( numbClicked === quests ) {
	 $( ".question" ).each(function() {
	$(this).children('.clicked').css("color", "red");
	$(this).children('.correct').css("color", "green");
	$(this).children('.correct').css("font-weight", "bold");
  });
  $( ".correct.clicked" ).each(function() {
	$(this).css("color","green");
	$(this).removeClass('false');
  });
  $('#yougot').html ("You Scored: "+corQuests+" out of "+quests+"");
  $('#yougot').show(); 
  }
  else {
	  var moreTOgo = quests-numbClicked;
	  $('#yougot').html("<p>Please answer all questions first! There are still "+moreTOgo+" questions unanswered!");
  
  $('#yougot').show(); 
  }
});

});
