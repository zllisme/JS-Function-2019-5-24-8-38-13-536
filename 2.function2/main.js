function palindrome(message){
  // wirte your code here
  var reverseArr = message.split("").reverse();
  var revMessage = reverseArr.join("");
  if(revMessage == message) {
  	return true;
  }else return false;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true