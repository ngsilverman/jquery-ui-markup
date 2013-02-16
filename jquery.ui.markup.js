(function( $ ) {

var namespace = "data-ui",
	optionsNamespace = namespace+"-";

function attrToOption( attr ) {
	attr = attr.substring( optionsNamespace.length ).toLowerCase();
	return attr.replace( /-.?/g, function( string ) {
		return string.charAt( 1 ).toUpperCase();
	});
}

$( document ).ready(function() {
	$( "["+namespace+"]" ).each(function() {
		var attr, i, options = {}, $this;

		for ( i = 0; i < this.attributes.length; i++ ) {
			attr = this.attributes[i];
			if ( attr.name.indexOf( optionsNamespace ) === 0 && attr.name.length > optionsNamespace.length ) {
				options[ attrToOption( attr.name ) ] = attr.value;
			}
		}

		$this = $( this );
		$this[ $this.data("ui") ]( options );
	});
});

}( jQuery ) );
