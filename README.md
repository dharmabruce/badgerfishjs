BadgerFish JS
=============

BadgerFish JS is a javascript function that uses jQuery to transform XML into a JavaScript object using the [BadgerFish](http://ajaxian.com/archives/badgerfish-translating-xml-to-json) convention.

Usage:

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
            <title>BadgerFish JS Example</title>
            <script src="jquery.js"></script>
            <script src="badgerfish.js"></script>
            <script>
            
                var xml = "<foo name='Statler'><bar>Waldorf</bar><waka>Fozzie</waka><waka>Bear</waka></foo>";
                var obj = badgerFish(xml);
                obj.foo["@name"] === "Statler"; // true
                obj.foo.bar === "Waldorf"; // true
                $.isArray(obj.foo.waka); // true
                obj.foo.waka[0] === "Fozzie"; // true
    
            </script>
        </head>
        <body>
        </body>
    </html>