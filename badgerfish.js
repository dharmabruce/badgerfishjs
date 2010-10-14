
(function () {
    
    function badgerFish (xml) {
        var obj = {}, $el = $(xml);
        
        if (($el[0].attributes || []).length === 0 &&
            $el.children().length === 0) {
            return $el.text();
        }
        
        $.each($el[0].attributes || [], function (i, value) {
            obj["@" + value.name] = $el.attr(value.name);
        });
        
        if ($el.children().length === 0) {
            obj["$"] = $el.text();
        }
        
        $el.children().each(function (i, element) {
            if (obj[element.tagName] === undefined) {
                obj[element.tagName] = badgerFish(element);
            } else if ($.isArray(obj[element.tagName])) {
                obj[element.tagName].push(badgerFish(element));
            } else {
                obj[element.tagName] = [obj[element.tagName]];
                obj[element.tagName].push(badgerFish(element));
            }
        });
        
        return obj;
    }
    
    window.badgerFish = badgerFish;
    
}());