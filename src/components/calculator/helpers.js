export const romanToInt = str1 => {
  if (str1 == null) return -1;
  let num = charToInt(str1.charAt(0));
  let pre, curr;

  for (let i = 1; i < str1.length; i++) {
    curr = charToInt(str1.charAt(i));
    pre = charToInt(str1.charAt(i - 1));

    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }
  return num;
};

export const validateInput = input => {
  const reg = RegExp(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);
  return reg.test(input);
}

export const charToInt = char => {
  switch (char) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
};

export const intToRoman = num => {
  if (typeof num !== "number") return false;

  let digits = String(+num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX"
    ],
    romanNumber = "",
    i = 3;
  while (i--) romanNumber = (key[+digits.pop() + i * 10] || "") + romanNumber;
  return Array(+digits.join("") + 1).join("M") + romanNumber;
};

export const calculateTotal = operator => (operand1 = 0, operand2 = 0) => {
  switch (operator) {
    case "+":
      return Number(operand1) + Number(operand2);
    case "-":
      return Number(operand1) - Number(operand2);
    case "*":
      return Number(operand1) * Number(operand2);

    default:
      return;
  }
};
