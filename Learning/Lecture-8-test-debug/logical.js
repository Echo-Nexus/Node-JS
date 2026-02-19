const logicalHandler = () => {
  console.log("server is running successfully.......");
const num = 5;
if(num > 10){
  console.log("Num is greater than 10");
} else {
  console.log("Num is less than 10");
}
}

exports.logicalHandler = logicalHandler;