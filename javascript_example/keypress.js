	$(document).keypress(function(e)
	{
		switch(e.which)
		{
			// user presses the "a"
			case 97:	goToAddress("http://www.adobe.com");
						break;	
						
			// user presses the "s" key
			case 115:	goToAddress("http://www.sqa.org.uk");
						break;
						

		}
	});


function goToAddress(myurl){
    
    window.location.replace(myurl);
    
}