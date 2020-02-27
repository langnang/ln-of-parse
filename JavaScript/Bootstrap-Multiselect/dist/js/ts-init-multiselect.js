(function (root, factory) {
    // check to see if 'knockout' AMD module is specified if using requirejs
    if (typeof define === 'function' && define.amd &&
        typeof require === 'function' && typeof require.specified === 'function' && require.specified('knockout')) {

        // AMD. Register as an anonymous module.
        define(['jquery', 'knockout'], factory);
    } else {
        // Browser globals
        factory(root.jQuery, root.ko);
    }
})(this, function ($, ko) {

	function InitMultiselect(select, options){
		this.$select = $(select);
        this.options = this.mergeOptions($.extend({}, options, this.$select.data()));
	}

	InitMultiselect.prototype = {
		defaults:{

		},
		constructor:InitMultiselect
	}
	$.fn.initmultiselect = function(option, parameter, extraOptions){

	}
	$.fn.initmultiselect.Constructor = InitMultiselect;

})