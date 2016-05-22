/**
 * @license
 * jquery.easy-percentage 0.0.1 
 * author: https://github.com/jmlavoier
 */

 ;(function () {
 	var that = this;

 	normalize.each((colorIndex, el) => {
		var higherHeight = 0;
		var countNormalizeParent = $(el).parents(".normalize").length;
	    var panelsFiltered = $(el).find(".normalize-item").filter((_,el) => {
	        return $(el).parents('.normalize').length == countNormalizeParent + 1;
	    });
	    
	    panelsFiltered.css("height", "auto");
	    
	    panelsFiltered.each((i, el) => {
	        $(el).css({
	            "border": "4px solid",
	            "border-color": colors[colorIndex]
	        });
	        higherHeight = higherHeight < $(el).height() ? $(el).height() : higherHeight;
	    });
	    panelsFiltered.css("height", higherHeight);
	});
 }.call(this));

 function easyPercentage() {
 	
 }

 $.fn.easyPercentage = easyPercentage;