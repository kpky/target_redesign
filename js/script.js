
$( function(){

    var $menu_button = $( ".shop_all_categories" ),
        $nav         = $( ".main_categories_list" ),
        $lev1_nav    = $( ".main_categories_list > li" ),
        $lev2_nav    = $( ".main_categories_list .hover" );

        $nav.hide();
        $lev2_nav.hide();

    $menu_button.on( "mouseenter", function( e ){
        $nav.show();
    } );

    $menu_button.on( "mouseleave", function( e ){
        $nav.hide();
    } );

    $lev1_nav.on( "mouseenter", function( e ){

        $( this ).addClass( "active" ).find( ".hover" ).show();
    } );

    $lev1_nav.on( "mouseleave", function( e ){

        $( this ).removeClass( "active" ).find( ".hover" ).hide();
    } );
} );