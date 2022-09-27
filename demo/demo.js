var string_demo="Nguyen Dang Tuong Vi";
console.log(string_demo.indexOf("n"));
console.log(string_demo.lastIndexOf("n"));
console.log(string_demo.search("aa"));
console.log(string_demo.slice(7, 11));//>=7,<11
console.log(string_demo.slice(-7,11));
var start=string_demo.indexOf("T");
var end=string_demo.lastIndexOf("g");
console.log(string_demo.slice(start,end+1));
// string.substring(start, end);
console.log(string_demo.substr(7, 4));
// string.replace(find, replace)
console.log(string_demo.replace("Dang", "Vi"));
// string.toUpperCase()
console.log(string_demo.toUpperCase());
// string.toLowerCase()
console.log(string_demo.toLowerCase());
console.log(string_demo.concat("Vi"));
//string.charAt(number) //in chữ bằng vị trí, string.charCodeAt(number) //in mã bằng vị trí
let test = "Nguyen Dang Tuong Vi";
for (var index = 0; index < test.length; index++){
    console.log(test[index]);
}
console.log(string_demo.split(""));
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);
console.log(array3);
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var result = words.filter(function(word) {
  return word.length > 15;
});
console.log(result);
//1 số thỏa mãn đk ban đầu
var array = [5, 12, 8, 130, 44];
var found = array.find(function(item) {
  return item > 10;
});
console.log(found);
//trả về T & F
var array = [1, 2, 3];
console.log(array.includes(22));
//tìm ra vị trí của ptu caafan tìm
var beasts = ['khang', 'kha', 'vi', 'ly', 'khang'];
console.log(beasts.indexOf('khang'));  
console.log(beasts.indexOf('khang', 2));
//lặp
var array = [1, 4, 9, 16];
var map = array.map(function(item) {
  return item * item;
});
console.log(map);
//lấy ptu ra và xóa nó khỏi mảng
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());//ptu cuối cùng
console.log(plants.shift());//ptu đầu tiên
console.log(plants);
/*var d=string_demo.search("D");
var g=string_demo.search("g");
console.log(g);
var dang=string_demo.slice(d,g+1);    
var v=string_demo.search("V");
var i=string_demo.search("i");
var vi=string_demo.slice(v,i+1);    
var dang_upper=(dang.toUpperCase());
var vi_lower=(vi.toLowerCase());
console.log(string_demo.replace("Dang",dang_upper));
console.log(string_demo.replace("Vi",vi_lower));
*/
/*  for (var i = 1; i <= 10; i++) {
            if (i == 5) {
                continue;
            }
            console.log(i + " - ");
        }
      for (i = 0; i < 5; i++)
            if (i == 2) continue
        console.log(i);
         setTimeout(function () {
           console.log("Hello Tuong Vi");
       }, 3000);
       console.log(3);
        var check_number = (a) => {
           // code
           if (a % 2 == 0) { return "chan"; }
           return "le";
       };
       console.log(check_number(10));
      function check_number(a) {
             if (a%2==0) {return "chan";}
             return "le";
         }
 
        alert( check_number(10));
       // alert("hello, nice to meet you");
       // var test = prompt("Nhập tên của bạn", '');
       // alert(test);
       var a = 51, b = "51";
   //    alert(a===b);
       // if ((a>10) || (b>10)) alert ("a true");
       // alert(a>=b);
       // var c = a % b;
       // var num = 1;
       // alert(++num);
       // var c = 12;
       // alert(c++); // kết quả là 13
       // alert(c);*/
