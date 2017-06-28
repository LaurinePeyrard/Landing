
function expand() {
    $('#logo').addClass('expanded');

	setTimeout(function(){
		$('#page1').addClass('hidden');
	}, 500);

	setTimeout(function(){
		
		$('#page2').removeClass('hidden');
		$('#page2').addClass('top');
	}, 1000);
}

