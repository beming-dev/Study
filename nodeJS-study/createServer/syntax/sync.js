let fs = require("fs");

console.log("A");
fs.readFile("syntax/sample.txt", "utf8", (err, result) => {
  console.log(result);
});
console.log("C");

// readFile : 비동기, 인자에 콜백함수 필요
// readFileSync : 동기, 값 반환
