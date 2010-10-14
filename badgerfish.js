/*global window $ DOMParser ActiveXObject*/

"use strict";
(function () {
    
    function createXmlDoc(text) {
        var parser, xmlDoc;
        if (window.DOMParser) {
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "text/xml");
        } else {
            // Internet Explorer
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = "false";
            xmlDoc.loadXML(text);
        }
        return xmlDoc;
    }
    
    function badgerFish(xml) {
        var obj = {}, $el = $(xml);
        
        if (typeof(xml) === "string") {
            $el = $(createXmlDoc(xml));
        }
        
        // handle the simple case where an element
        // has no attributes nor subelements
        if (($el[0].attributes || []).length === 0 &&
            $el.children().length === 0) {
            return $el.text();
        }
        
        // handle attributes
        $.each($el[0].attributes || [], function (i, value) {
            obj["@" + value.name] = $el.attr(value.name);
        });
        
        // handle text if there are no subelements
        if ($el.children().length === 0) {
            obj.$ = $el.text();
        }
        
        // handle subelements
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