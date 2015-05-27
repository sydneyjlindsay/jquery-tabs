$(document).on('ready', function(e) {
	
	//Code that runs when teh page loads
	var $targetSection = $(window.location.hash); //what section to show when page loads -- show the one based on the hash
	if(!$targetSection.length) { //unless there is no element that matches the hash, 
		$targetSection = $('main section').eq(0); //then set target section equal to the first section that there is
	}
	$targetSection.show(); //finally show whatever that target section is

	$('nav a[href="#'+$targetSection.attr('id')+'"]').addClass('active');
	//nav a[href=#blue] string concatenation inside query call 
	//find all the anchor tags inside the nav element, but they need to have an href value of blue 
	//using the href prevents you from having to put lots and lots of different ids on different things
	//select something by using an attribute using square brackets, and then putting the name of the attribute


	//Code that runs when I click on a nav link
	$('nav').on('click', function(e) {

		var $target = $(e.target); //target is a property of the event object
		var targetName = $target.attr('href');
		$('main section').hide();
		$(targetName).show();

		$('nav a').removeClass('active'); //jquery will ignore if this class doesn't exist 
		$target.addClass('active');
	});
});