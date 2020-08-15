/*
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Buttons Grid</title>
        <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
    </head>
    <body>
        
        <script src="js/buttonsGrid.js" type="text/javascript"></script>
    </body>
</html>
*/
/*
<!-- Enter your CSS code here -->
.buttonContainer {
    width: 75%;
}
.buttonContainer > .button {
    width: 30%;
    height: 48px;
    font-size: 24px;
}
*/
//Enter your JavaScript code here
  /* Create the button container */
  var container = document.createElement('div');
  container.className = 'buttonContainer';
  container.id = 'btns';
  
  /* Create an array of references to the buttons */
  var buttons = [9];
  for (var i = 0; i < 9; i++) {
      buttons[i] = document.createElement('button');
      buttons[i].id = 'btn' + (i + 1);
      buttons[i].innerHTML = (i + 1);
      buttons[i].className = 'button';
      container.appendChild(buttons[i]);
  }
  document.body.appendChild(container);
  function getNextLabel(currentLabel) {
      /* The list of values to iterate circularly */
      var labels = [1, 4, 7, 8, 9, 6, 3, 2];
  
      /* Get the index of the button's next label in labels */
      var index = (labels.indexOf(+(currentLabel)) + 1) % labels.length;
  
      /* Return next label */
      return labels[index];
  }
  
  /* Update the label's innerHTML on click */
  function updateLabel() {
      for (var i = 0; i < 4; i++) {
          buttons[i].innerHTML = getNextLabel(buttons[i].innerHTML);
      }
      for (var i = 5; i < 9; i++) {
          buttons[i].innerHTML = getNextLabel(buttons[i].innerHTML);
      }
  }
  
  btn5.addEventListener("click", function() {
      /* Rotate button labels */
      updateLabel();
  });