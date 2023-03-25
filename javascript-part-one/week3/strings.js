let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

function removeCommas(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ",") {
      result += " ";
    } else {
      result += str[i];
    }
  }
  return result;
}

let resultTwo = myString.replaceAll(",", " ");

console.log(resultTwo);

removeCommas(myString);
