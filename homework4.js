//Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height. 
//So if we call your function with triangleStars(4), we should see:



 *******
  *****
   ***
    *


const computeStr = function (char, count) {
  let str = "";
  while (count > 0) {
    str = str + char;
    count = count - 1;
  }
  return str;
}


const computeRow = function (spaceCount, StarCount) {
  console.log(computeStr(" ", spaceCount) + computeStr("*", StarCount));
}

const printTriangle = function (h) {
  let starcount = (2 * h) - 1;
  let spaceCount = 0;
  while (h > 0) {
    h = h - 1
    computeRow(spaceCount, starcount)
    starcount = starcount - 2;
    spaceCount = spaceCount + 1
  }
}
printTriangle(4)




//3. Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.

//Example:  multiToSingle([[1, 2, 3], [4, 5, 6]]);  // will return [1, 2, 3, 4, 5, 6]

const multiToSingle = function(arr){
let index = 0;
let array = [];
while(index < arr.length){
  let n = 0;
  while(n < arr[index].length){
    array[array.length] = arr[index][n];
    n = n + 1;
}
index = index + 1;
}
return array;
};

console.log(multiToSingle([[1, 2, 3], [4, 5, 6]]));



4. Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.  
It returns the smallest number in the given array if the second argument is false.

Example: findMinMax([4, 2, 66, -44, 8], true); // should return 66
Example: findMinMax([4, 2, 66, -44, 8], false); // should return -44


 const findMinMax = function(array, trf) {
    let MinMax = array[0];
    let index = 1;
     if(trf){
       
       while(index < array.length){
         if(MinMax < array[index]){ 
           MinMax = array[index];
         }
          index = index + 1;
       }
      return MinMax;  
     }
     else{
       while(index < array.length){
         if(MinMax > array[index]){
           MinMax = array[index];
         }
         index = index + 1;
         
       }
       return MinMax;
     }
   }
   
   console.log(findMinMax([4, 2, 66, -44, 8], true));
   console.log(findMinMax([4, 2, 66, -44, 8], false));






//5. Create a function 'forEach' that takes an array and a function 
//and then calls the given function once with each value in the given array.



//Example: forEach([4, 3, 2], function(val) {

  //console.log(val);

//}); // doing this should result in this in the console:

4
3
2

const forEach = function(arr, func){
    let i = 0;
      
      while(i < arr.length ){
        let b = func(arr[i]);
        i = i + 1;
      }
      
    }
    
     forEach([4, 3, 2], function(val) {
    
    console.log(val);
    
    });







//6. Create a function 'sum' that takes an array of numbers and returns their sum.

Example: sum([4, 3, 2]); // should return 9

const sum = function(num) {
let n = 0;
let index = num.length - 1;  
while(index >= 0){
  n = n + num[index];
  num[index] = num[index-1];
  index = index-1;
}
return n;
};
console.log(sum([5, 7, 10, 14]));



//7. Write a function 'reverse' that reverses the given string.  

 //Example:  reverse('abcd') should return 'dcba'.  

 //Some things to know about strings:  

  //.length will give you the length of the string.  Example: 'abc'.length returns 3

  //You can access any character of a string using brackets: 'abcde'[2] returns 'c'.

 //Note that indexes begin with 0.  So 'abcde'[0] will return 'a'

//Hint:

  //const str = 'abcd';

  //reverse(str) is the same thing as:

  //str[3] + str[2] + str[1] + str[0];  // which will result in 'dcba'

    
const reverse = function(str){
let sum = '';
let long = str.length - 1 
while(long >= 0){
sum =sum + str[long];
long = long - 1;
}
return sum
};

console.log(reverse('qarasun'));


//8. Create a function called checkerboard using While loop 
//which, given a size argument, will draw an n by n checkerboard on the screen.  Example: checkerboard(5)

* * * * *
 * * * * *
* * * * *
 * * * * *
* * * * *
