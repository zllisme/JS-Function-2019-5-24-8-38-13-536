function reverseString(message){
  // wirte your code here
  var result = "";
  for(let i = message.length-1; i >= 0; i--) {
  	result += message.charAt(i);
  }
  return result;
}
reverseString('hello'); // should return 'olleh'