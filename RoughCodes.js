<script>
alert("I'm learning Javascript")
document.write(" Loading my knowledge !")
</script>

// Functions 
<script>
function hello(){
document.write(" <br> ")
document.write(" yes ")
}
hello()
</script>

<script>
function sum(){
var a=10
var b=20
var add = a + b
document.write(" <br> ")
document.write(add)
}
sum()
</script>

<script>
function sum(a , b){
var add = a + b
document.write(" <br> ")
document.write("The sum of two number is : " + add)
}
sum(10,27)
sum(38,27)
sum(145,27)
</script>

<script>
function sum(a , b){
var add = a + b
document.write(" <br> ")
document.write("The sum of two number is : " + add)
 return add
 }
 var result = sum(10,27)
 var result = sum(38,27)
 var result = sum(145,27)
</script>

<script>
function student(){
var first_name = "Chanki "
var last_name = "Mishra"
var roll_no = 23657
document.write("<br>My name is ",first_name," ",last_name," & roll_no :",roll_no)
}
student()
</script>

<script>
function student(college_name , college_code){
var scholarship = "50,000"
document.write("<br>",college_name ," ", college_code," " ,scholarship)
}
student("MIT",678)
student("SIT",798)
</script>

<script>
function student(college_name , college_code){
var scholarship = "50,000"
var details =  [college_name , college_code ,  scholarship]
document.write ( "<br>",details,"<br>")
 return details
 }
 var answer = student("IIT DELHI", 567)
 //var answer = student("IIT MUMBAI", 123)
 document.write(answer)
</script>

<script>
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
//document.write(mycar)
</script>

<script>
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"
</script>

<script>
// named
let Rectangle1= class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle1.name);
</script>

<script>
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    document.write(this.name);
  }

}
let user = new User("<br>John");
user.sayHi();
</script>

<script>
class User {

  constructor(name ,cls) {
    this.name = name;
    this.cls = cls;
  }

  sayHi() {
    document.write(this.name);
    document.write(this.cls)
  }

}
let user = new User("<br>John<br>");
//let user1 = new User (12);
user.sayHi();
//user1.sayHi();
</script>