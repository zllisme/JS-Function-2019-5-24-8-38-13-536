function alphabetSort(message){
  // wirte your code here
  var messageArr = message.split("").sort();
  return messageArr.join("");
}
alphabetSort('hello'); // should return 'ehllo'
