$(document).ready(function() {
	// Everything that cannot be done with CSS, must be done with JavaScript...
	// Unfortunately, jQuery does not officially support PrinceXML so there is 
	// a small hack in its sources to make it work (the problem: Prince does not have
	// JSON.Parse )
	
	// Copy link destinations to footnotes to make them visible 
	// but not part of the text.
	$('a[href]').each(function() { var text = $(this).attr('href'); 
		$(this).after('<span class="fn">' + text + '</span>')})
});