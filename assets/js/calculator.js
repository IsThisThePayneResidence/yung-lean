function evaluateExpression() {
	var expression = document.getElementById("expression").value
  if (/^[-+()*\/0-9\s]+$/.test(expression)) {
      try {
        document.getElementById("expression").value = eval(expression);
      }
      catch (e) {
        alert("Invalid : " + e.message);
      };
  }
  else {
    alert('Only numbers and «+», «-», «*», «/», «(» and «)» are alloweds.');
  };
};


function addCharacter(character) {
  document.getElementById("expression").value += character;
};
