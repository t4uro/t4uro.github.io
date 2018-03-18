
$('.overlay').on('mouseenter', function() {
	// $(this).append('<div class="overlay-text1"><a id="text">Do košíku</a></div>');
	// $(this).append('<div class="overlay-text2"><a id="text">Detail</a></div>');
	$(this).append('<button class="btn btn-primary">Do košíku</button>');
	$(this).append('<button class="btn btn-info">Detail</button>');
});


$('.overlay').on('mouseleave', function() {
	// $('.overlay-text1').remove();
	// $('.overlay-text2').remove();
	$('.btn-primary').remove();
	$('.btn-info').remove();
});