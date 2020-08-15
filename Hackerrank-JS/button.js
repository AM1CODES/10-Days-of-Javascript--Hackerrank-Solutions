/*
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/button.css" type="text/css">
        <meta charset="utf-8">
        <title>Button</title>
    </head>
    <body>
        <button id="btn" onclick = "button()">0</button>
        <script src="js/button.js" type="text/javascript"></script>
    </body>
</html>
*/
/*
<!-- Enter your CSS code here -->
#btn{
    width : 96px;
    height : 48px;
    font-size : 24px;
}
*/
//Enter your JavaScript code here
function button()
{
    document.getElementById("btn").innerHTML++; //this will increment the inner content  of the button i.e the numberby  1
    
}