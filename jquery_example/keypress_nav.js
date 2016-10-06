$(document).ready(function()
{
	// hides all DIVs with the CLASS container
	// and displays the one with the ID 'home' only
	$(".container").css("display","none");
	$("#home").css("display","block");
	
	// makes the navigation work after all containers have bee hidden 
	showViaLink($("ul#navigation li a"));
	
	// listens for any navigation keypress activity
	$(document).keypress(function(e)
	{
		switch(e.which)
		{
			// user presses the "a"
			case 97:	showViaKeypress("#home");
						break;	
						
			// user presses the "s" key
			case 115:	showViaKeypress("#biscuits");
						break;
						
			// user presses the "d" key
			case 100:	showViaKeypress("#sausage");
						break;
						
			// user presses the "f" key
			case 102:	showViaKeypress("#cakes");
						break;
						
			// user presses the "g" key 
			case 103:	showViaKeypress("#pastries");
		}
	});
});

// shows a given element and hides all others
function showViaKeypress(element_id)
{
	$(".container").css("display","none");
	$(element_id).slideDown("slow");
}

// shows proper DIV depending on link 'href'
function showViaLink(array)
{
	array.each(function(i)
	{	
		$(this).click(function()
		{
			var target = $(this).attr("href");
			$(".container").css("display","none");
			$(target).slideDown("slow");
		});
	});
}