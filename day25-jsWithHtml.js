// string operation
var data = "hey everyone Hope ur fine"
console.log("data: ",data)

console.log("lower case:",data.toLowerCase())

console.log("upper case:",data.toUpperCase())

//slice
console.log("slice:",data.slice(2,6));//(index,index-1) && index always starts from 0

// length
console.log("length",data.length);

//replace
updatedData = data.replace("hey","hi")
console.log("replace:",updatedData);
console.log("originalData:",data);

//includes
console.log("includes:",data.includes("you1"));
//string->int
var var1 =  "2345";
console.log(var1)
console.log(parseInt(var1));

var  varInvalidNum="2345jhgj"
console.log(parseInt(varInvalidNum));


//int->string
var var2 = 7896
console.log(var2)
console.log(var2.toString());
console.log(var2.toLocaleString());

//split operator 
var demo = "good morning to all";
console.log(demo.split(""));

//obejcts
var obj1 = {
    name: "deepak",
    age: 21
};

//console.log(obj1 . age);
console.log(Object.keys(obj1));
//console.log(object.values(obj1))
console.log(obj1)
 // update the obj1
obj1.name = "dk";
obj1.age =  23;
console.log(obj1);

//array (map, find, filter, reduse)
//promise
//async & await
//Try & catch
// obj with multiple concepts
//function (normal/named fnuc, anonymous func, arrow func)
//classes 
