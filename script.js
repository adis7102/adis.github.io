function takeHistory() {
   return document.getElementById("history-isi").innerText;
}
function printHistory(num) {
   document.getElementById("history-isi").innerText = num;
}
function takeOutput() {
   return document.getElementById("output-isi").innerText;
}
function printOutput(num) {
   if (num == "") {
      document.getElementById("output-isi").innerText = num;
   }
   else {
      document.getElementById("output-isi").innerText = getFormattedNumber(num);
   }
}
function getFormattedNumber(num) {
   if (num == "-") {
      return ""
   }
   var n = Number(num);
   var value = n.toLocaleString("en");
   return value;
}

function reverseNumberFormat(num) {
   var removedComa = ''
   for (i = 0; i < num.length; i++) {
      if (num[i] !== ',') {
         removedComa += num[i]
      }
   }
   return Number(removedComa);
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
   operator[i].addEventListener('click', function () {
      if (this.id == "clear") {
         printHistory("");
         printOutput("");
      }
      else if (this.id == "backspace") {
         var output = reverseNumberFormat(takeOutput()).toString();
         if (output) {//jika output punya value maka akan menjalankan dibawah ini
            output = output.substr(0, output.length - 1);
            printOutput(output);
         }
      }
      else {
         var output = takeOutput();
         var history = takeHistory();
         if (output == "" && history != "") {
            if (isNaN(history[history.length[-1]])) {
               history = history.substr(0, history.length - 1)
            }
         }
         if (output != "" || history != "") {
            output = output == "" ? output : reverseNumberFormat(output);
            history = history + output;
            if (this.id == "=") {
               var result = eval(history);
               printOutput(result);
               printHistory("");
            }
            else {
               history = history + this.id;
               printHistory(history);
               printOutput("");
            }
         }
      }
   });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
   number[i].addEventListener('click', function () {
      var output = reverseNumberFormat(takeOutput());
      if (output != NaN) {//jika output tidak sama dengan NaN
         output = output + this.id;
         printOutput(output);
      }

   })
}