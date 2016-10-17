//PIERWSZY SPISÓB

(function($){
    
    $.fn.getLongestElement = function() {
        var longestElement = null;
        this.each(function(i, e) {
            if (longestElement !== null) {
                if ($(e).text().length > $(longestElement).text().length) {
                    
                    longestElement = e;
                }                
            } else {
                longestElement = e;
            }
        });
        return $(longestElement);        
    };
    
}(jQuery));


//DRUGI SPOSÓB


(function($){
    
    $.fn.getLongestElement2 = function() {
        var longestElement = null;
        switch(this.length) {
            case 0:
                break;
            case 1:
                longestElement = this[0];
                break;
            default: 
                this.each(function(i,e) {
                    if ($(e).text().length > $(longestElement).text().length) {
                        longestElement =e;
                    }
                }); 
        }        
        return $(longestElement);        
    };
    
}(jQuery));

// TRZECI SPOSÓB

