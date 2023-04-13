$(document).ready(function () {
    $('#menu').multilevelpushmenu({
        containersToPush: [$('#pushobj')],
        menuWidth: '300px',
        menuHeight: '100%',
        collapsed: true
    });
    $('#menu').multilevelpushmenu('option', 'menuHeight', $(document).height());
    $('#menu').multilevelpushmenu('redraw');
});

$(window).resize(function () {
    $('#menu').multilevelpushmenu('option', 'menuHeight', $(document).height());
    $('#menu').multilevelpushmenu('redraw');
});

$( '#fullcollapse' ).click(function(){
		$( '#menu' ).multilevelpushmenu( 'collapse' );
	});

//$(document).on('click','.multilevelpushmenu',function(e) {
//    if( $(e.target).is('a:not(".menu")') ) {
  //      $(this).collapse('hide');
//    }
//});

//var specifiedElement = document.getElementById('menu');
 //   document.addEventListener('click', function(event) {
//        var isClickInside = specifiedElement.contains(event.target);
//        if (isClickInside) {
//          console.log('You clicked inside')
 //       }
 //       else {
//          $( '#menu' ).multilevelpushmenu( 'collapse' );
//        }
 //   });

var specifiedElement = document.getElementById('menu');
   document.addEventListener('click', function(event) {
      var isClickInside = specifiedElement.contains(event.target);
        if (isClickInside) {
          
        }
      else {
          $( '#menu' ).multilevelpushmenu( 'collapse' );
       }
    });