(function( $ ) {

var namespace = "data-ui",
	optionsNamespace = namespace+"-";

$( document ).ready(function() {
	$( "["+namespace+"]" ).each(function() {
		var attr, i, options = {};
		for ( i = 0; i < this.attributes.length; i++ ) {
			attr = this.attributes[i];
			if ( attr.name.indexOf( optionsNamespace ) === 0 && attr.name.length > optionsNamespace.length ) {
				options[ attr.name.substring( optionsNamespace.length ) ] = attr.value;
			}
		}

		var $this = $( this );
		$this[ $this.data("ui") ]( options );
	});
});

}( jQuery ) );
