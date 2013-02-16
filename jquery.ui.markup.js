(function( $ ) {

var namespace = "data-ui",
	optionsNamespace = namespace+"-";

function attrToOption( attr ) {
	attr = attr.substring( optionsNamespace.length ).toLowerCase();
	return attr.replace( /-.?/g, function( string ) {
		return string.charAt( 1 ).toUpperCase();
	});
}

function callUI( element, ui, options ) {
	element[ ui ]( options );
}

$( document ).ready(function() {
	$( "["+namespace+"]" ).each(function() {
		var attr, i, options = {},
			$this = $( this ),
			ui = $this.data("ui");

		for ( i = 0; i < this.attributes.length; i++ ) {
			attr = this.attributes[i];
			if ( attr.name.indexOf( optionsNamespace ) === 0 && attr.name.length > optionsNamespace.length ) {
				options[ attrToOption( attr.name ) ] = attr.value;
			}
		}

		if ( /(addClass|effect|hide|show|toggle)/i.test( ui ) && options.delay ) {
			window.setTimeout(function() { callUI( $this, ui, options ); }, options.delay );
		} else {
			callUI( $this, ui, options );
		}
	});
});

}( jQuery ) );
