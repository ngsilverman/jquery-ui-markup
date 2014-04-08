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
		var i, name, options = {}, value,
			$this = $( this ),
			ui = $this.data("ui");

		for ( i = 0; i < this.attributes.length; i++ ) {
			name = this.attributes[i].name;
			value = this.attributes[i].value;

			if ( name.indexOf( optionsNamespace ) === 0 && name.length > optionsNamespace.length ) {
				if ( /(true|false)/i.test( value ) ) {
					value = value.toLowerCase() === "true";
				} else if ( !isNaN( value ) ) {
					value = +value;	
				} else if ( value.charAt(0) === "{" ) {
					value = eval("("+value+")");
				}

				options[ attrToOption( name ) ] = value;
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
