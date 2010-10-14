BadgerFish JS
=============

BadgerFish JS is a javascript function that uses jQuery to transform XML into a javascript object using the [BadgerFish](http://ajaxian.com/archives/badgerfish-translating-xml-to-json) convention.

Usage:

    <html>
        <head>
            <title>BadgerFish JS Example</title>
            <script src="jquery.js"></script>
            <script src="badgerfish.js"></script>
            <script>
            
    var xml = "<foo name='squidward'><blah>bikini bottom</blah><bar>gary</bar><bar>Crabs</bar></foo>";
    var obj = badgerFish(xml);
    obj.foo["@name"] === "squidward"; // true
    obj.foo.blah === "bikini bottom"; // true
    $.isArray(obj.foo.bar); // true
    obj.foo.bar[0] === "gary"; // true
    
            </script>
        </head>
        <body>
        </body>
    </html>