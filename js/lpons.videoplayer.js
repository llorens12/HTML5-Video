/**
 * Created by Lorenzo on 09/11/2015.
 */
(function($){
    if(!$.lpons){
        $.lpons = {};
    }
    $.lpons.videoplayer = function(el, getData, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        // Add a reverse reference to the DOM object
        base.$el.data("lpons.videoplayer", base);
        base.init = function(){
            base.getData = getData;
            base.options = $.extend({},$.lpons.videoplayer.defaultOptions, options);
            // Put your initialization code here
        };

        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        //
        // };

         base.render = function(){
            base.$el()
         };

        // Run initializer
        base.init();
    };

    $.lpons.videoplayer.defaultOptions = {
        option1: "defData"
    };

    $.fn.mycorp_myExample = function(getData, options){
        return this.each(function(){
            (new $.lpons.videoplayer(this, getData, options));
        });
    };

    // This function breaks the chain, but returns
    // the lpons.videoplayer if it has been attached to the object.
    $.fn.getmyCorp_myExample = function(){
        this.data("lpons.videoplayer");
    };

})(jQuery);