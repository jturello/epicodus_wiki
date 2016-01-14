$(document).ready(function() {
  $("form#user-input").submit(function(event){
    var operator = $("select#operator").val();
    var operand1 = parseInt($(input1).val());
    var operand2 = parseInt($(input2).val());

    alert(math_it_up(operand1, operand2, operator));
  });

function math_it_up(opnd1, opnd2, optr){

  if (optr = '+'){
    return opnd1 + opnd2;
  }
};
});
