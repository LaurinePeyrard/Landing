
function expand() {
    $('#logo').addClass('expanded');

	setTimeout(function(){
		$('#page1').addClass('hidden');
	}, 500);

	setTimeout(function(){
		$('#page2').removeClass('hidden');
		$('#page2').addClass('top');
		$('#page2').css({"min-height": "100%", "height" : "auto"});
	}, 500);
}

/*
var Spectra = {
  instaToken: '5769565501.4269015.e63dbf10bf074a3b8913851e54bdb924',
  instaID: ' 4269015b902046fd8ce73e7ce2271ef2',

  init: function () {
    $.fn.spectragram.accessData = {
      accessToken: this.instaToken,
      clientID: this.instaID
    };

    $('.feed').spectragram('getUserFeed',{
      max: 12,
      wrapEachWith: '<div class="photo">'
    });
  }
}

Spectra.init();
*/


