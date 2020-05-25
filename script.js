var number = prompt("Please type in a number:")
var number2 = prompt("Please type in a second number:");

  number = parseInt(number);
  if (number>0)
    document.write(number+ " is a positive number.");
  if (number<0)
    document.write(number+ " is a negative number.");
  if (number == 0)
    document.write(number+ " is zero.");

  number=parseInt(number2);
  if (number % 2 ==0)
      document.write(number2+" is an even number");
  else
    document.write(number2+" is an odd number");