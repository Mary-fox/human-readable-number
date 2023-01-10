module.exports = function toReadable (number) {
let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten',"eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
let decimal = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let hundreds = ['','one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
// функция для проверки цифр от 1 до 99
function writeNumberToUp99(number) {
  if (number < 20) {
    return units[number];
  } else if (number % 10 === 0) {
    return decimal[number/10];
  } else  return decimal[Math.floor(number / 10)] + ' ' + units[number % 10]
}
// функция для проверки цифр от 100
function writeNumberFrom100(number) {
  if (number % 100 === 0) {
    return hundreds[number/100];
  }else {
    return hundreds[Math.floor(number / 100)] +  ' ' + writeNumberToUp99(number % 100)
}
}

if (number >=0 && number <= 99) {
   return writeNumberToUp99(number);
} else if (number >= 100) {
   return writeNumberFrom100(number);
}

}

