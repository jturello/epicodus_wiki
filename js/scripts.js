$(document).ready(function() {
  /* function used by javascript-arithmetic.html */
  $("form#user-input").submit(function(){
    var operator = $("select#operator").val();
    var operand1 = parseInt($(input1).val());
    var operand2 = parseInt($(input2).val());

    alert(math_it_up(operand1, operand2, operator));
  });

  function math_it_up(opnd1, opnd2, optr){

    switch (optr) {
      // alert('inside switch');
      case "+" : return (opnd1 + opnd2); break;
      case "-" : return (opnd1 - opnd2); break;
      case "*" : return (opnd1 * opnd2); break;
      case "/" : return (opnd1 / opnd2); break;
      case "%" : return (opnd1 % opnd2); break;
    }
  };

  /* function used by looping.html */
  $("form#genre").submit(function get_radio_value(event) {
  for (var i=0; i < document.orderform.music.length; i++) {
     if (document.orderform.music[i].checked) {
        var rad_val = document.orderform.music[i].value;
        alert(rad_val);
        }
     }
     event.preventDefault();
  });
});
