import {compose, pipe} from "lodash/fp";
import { Map } from 'immutable';
import { produce } from 'immer';
import axios from 'axios';
import fetch from "node-fetch";

console.log("Start of the program...");
//   1. ***********************************Function as first class citizens functions *************************************
//   store them in variables
//   pass them as arguments
//   return them from other functions 

//   storing as variable
  function welcome(){
      console.log("Hello World")
  }
  let fn = welcome;
  fn();
  
//   passing function as an argument
  function helloWorld(func){
      console.log(func());
  }
 
  helloWorld(fn);
  
//   returning as function value
  function passMsg (){
      return function(){
          return "returning as a function value";
      }
  }
  let fnNew = passMsg();
  let message = fnNew();
  console.log(message);
//   ***************************************************************
  
//   ARROW FUNCTIONS
  
//   2. ***********************************High Order functions *************************************
  let number = [1,2,3];
  number.map(num => console.log(num * 2));
  setTimeout(() => console.log("Setimeout..."), 5000);
//   ***************************************************************
  
  //3. ***********************************functional Composition****************************************
  // trim
  // WrapInDiv
  let input = "  InsideDiv  ";
  let output = "<div>" + input.trim() + "</div>";
  console.log(output);
  const trim = str => str.trim();
  const wrapInDiv = str => `<div>${str}</div>`;
  const toLowerCase = str => str.toLowerCase();
  const resultOne = wrapInDiv(trim(toLowerCase(input))); // this is called functional composition, in functional programming.
  console.log(resultOne);
  //******************************************************************
  
  
  //4. ***********************************Composing and Piping****************************************
  // const transformOne = compose(wrapInDiv, toLowerCase, trim);
  // const transformTwo = pipe(trim, toLowerCase, wrapInDiv);
  // console.log(transformOne(input));
  // console.log(transformTwo(input));
  // const resultTwo = wrapInDiv(toLowerCase(trim(input)));
  // console.log(resultTwo);
  //******************************************************************
  
  
  //5. ***********************************Currying****************************************
                  /// ********* ERROR ***********
  // let input = "  InsideDiv  ";
  // const trim = str => str.trim();
  // const toLowerCase = str => str.toLowerCase();
  // const wrap = (type,str) => `<${type}>${str}</${type}>`;
  // const transform = pipe(trim, toLowerCase, wrap("div"));
  // console.log(transform(input));
                    /// ********* ERROR ***********
  
  // const wrap = type => str => `<${type}>${str}</${type}>`; // This is called currying function.
  // const transform = pipe(trim, toLowerCase, wrap("div"));
  // console.log(transform(input));
  
  // Example:
  // function add(a){
  //     return function(b){
  //         return a + b;
  //     };
  // }
  // const addOne = add(1);
  // addOne(5);
  // OR
  //  console.log(add(5)(5));
  // OR
  // const addTwo = a => b => a + b;   // instead of (a,b) => a + b; 
  // //******************************************************************
  
  
  
  
  //6. ***********************************Pure Function********************
  // function t(n,t){
  //     return n + math.random()
  // }
  // function t(n){
  //         return n + 2
  //     }
  
  // which Is a pure function or not ?
  
  // no random value
  // no curent date and time
  // no global state change (DOM, database etc.)
  //******************************************************************
  
  
  //7. ***********************************Immutability********************
  
  
                                  /****************************/
  // Objects 
  // const person = {
  //     name:"Ali",
  //     address:{
  //         country: "Pakistan",
  //         city: "Lahore"
  //     }
  // };
  
  
  //***************************************************
  // Objects: spread operator
  //Case 1:
  // const person = {name:"Saif"}
  // const updated = Object.assign({},person,{name:"Ali", id:"5"});
  // console.log(updated);
  // console.log(person);
  
  // Case 2 (spread operator): 
  // const person = {name:"Saif"}
  // const updated = {...person, name:"Ali"}
  // console.log(updated);
  // console.log(person);
  
  //Case 3 (Shallow Copy):
  // const person = {
  //     name:"Ali",
  //     address:{
  //         country: "Pakistan",
  //         city: "Lahore"
  //     }
  // };
  // const updated = {...person, name:"Saif"}
  // updated.address.city = "karachi"
  // updated.address.city = "Islamabad"
  // console.log(updated);
  // console.log(person);
  
  
  //Case 4 (Deep copy):
  // const person = {
  //     name:"Ali",
  //     address:{
  //         country: "Pakistan",
  //         city: "Lahore"
  //     }
  // };
  // const updated = {
  //     ...person,
  //     name:"Saif",
  //     address:{           
  //         ...person.address,
  //         city:"Islamabad"
  //     }, 
  //   };
  //     console.log(updated);
  //     console.log(person);
  
  //****************************************************
  // Updating an array
  // const numbers = [1,2,3];
  // const index = numbers.indexOf(2);
  // const added = [
  //     ...numbers.slice(0, index),
  //     4,
  //     ...numbers.slice(index)
  // ];
  // console.log(added);
  //*************************************************
  // Arrays: Removing
  // const removed = numbers.filter(n => n !== 2);
  // console.log(removed);
  // // Arrays: Updating
  // const updatedArray = numbers.map(n => n === 2 ? 5 : n);
  // console.log(updatedArray);
  //*************************************************
  
  // ***********************************Immutable.js*********************************
  // let book = Map({title: "Harry Potter"});  // data structure by immutable.js
  
  // function publish(book){
  //    return book.set("isPublished" , true);   // Getter and Setter technique
  // }
  // let booktwo = publish(book);
  // console.log(booktwo); // for plain JavaScript Object.
  // console.log(book.toJS());
  // book.isPublished = "TRUE"
  // console.log(book.toJS());
  // console.log(booktwo.toJS());
  //*************************************************
  
  // // ***********************************immer******************************************
  // let book = {title: "The Lord of Rings"};
  
  // function publish(book){
  //    return produce(book, draftBook => {
  //     draftBook.isPublished = true;
  //    });
  // }
  // let immerUpdatedBook = publish(book);
  // console.log(immerUpdatedBook);
  // console.log(book);
  //*************************************************
  
  
  // 8. ***********************************promise***********************************
  
  // Example 1:
  // var data = new Promise(function(res,rej){
  //     setTimeout(function(){
  //         res("data");
  //     },2000)
  // })
  // console.log(data);
  // data.then(function(val){
  //     console.log("Val:" + val);
  // })
  
  // Example 2:
  // let promise = new Promise(function(resolve, reject) {
  //     setTimeout(() => resolve("done!"), 1000);
  //   });
    
  //   // resolve runs the first function in .then
  //   promise.then(
  //     result => console.log("Hello" + result), // shows "done!" after 1 second
  //     error => console.log(error) // doesn't run
  //   );
  //*************************************************
  
  
  // 9. ***********************************async/await and fetch***********************************
  // async function functionName(){
  //     console.log("INSIDE...");
  //     const response = await fetch('https://fakestoreapi.com/products/');
  //     console.log("Before Response...");
  //     const data = await response.json();
  //     console.log("Data Resolved...");
  //     return data;
  // }
  // console.log("Before Calling the Function");
  // let a = functionName();
  // console.log("After Calling the Function");
  // console.log(a);
  // a.then(data => console.log(data));
  // console.log("End of the Program!!!");
  //*************************************************
  
  
  
  // 10. ***********************************axios***********************************
  // axios.get('https://fakestoreapi.com/products/').then(res=>{
  //     console.log(res)
  // })
  
  // async function doPostRequest() {
  //     let payload = { name: 'John Doe', occupation: 'gardener' };
  //     let res = await axios.post('http://httpbin.org/post', payload);
  //     let data = res.data;
  //     console.log(data);
  // }
  // doPostRequest();