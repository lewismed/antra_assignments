console.log("Hello from JavaScript");


//1. Write a JavaScript function that reverse a number. 

function reverse(str){
    let str_split=str.split("")
    console.log(str_split)
    let str_reverse=str_split.reverse()
    console.log(str_reverse)
    let str_join=str_reverse.join("")
    return str_join
}
console.log(reverse("dog"))



//2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
//madam or nurses run.



function palindrome(str){
    let str_new=str.split("")
    let str_reverse=str_new.reverse()
    let str_join=str_reverse.join("")
    
    if (str === str_join){
        return true
    }
    else{
    return false
    }
}
console.log(palindrome("obo"))


//3. Write a JavaScript function that generates all combinations of a string. 
//Example string: 'dog' 
//Expected Output: d, do, dog, o, og, g



function all_combs(str){
    let arr=[]
    let char=""
    for (let i =0; i<str.length;i++){
        
    }
    
}

function alaphabet(str){
    let new_str=str.split("").sort().join("")
    
    
 return new_str   
    
}
console.log(alaphabet("effjowjefjwojf"))


function cap(str){
    let str_split=str.split(" ")
    let new_array=[]
    
    for (let i=0;i<str_split.length;i++){// this will loop through all the indexes in the array
       
       new_array.push(str_split[i].charAt(0).toUpperCase()+str_split[i].slice(1)) 
        
    }
    
    return new_array.join(" ")
}
console.log(cap("i love you dont give a "))// make sure to always specifiy the index.


//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function longest(str){
    let str_split=str.split(" ")//this will give an array 
    let count =0
    let arr_long=""
    //  var array1 = str.match(/\w[a-z]{0,}/gi);
  //var result = array1[0];
    
    for (let i=0;i<str_split.length;i++){
       if (str_split[i].length>count){
           count=str_split[i].length
           arr_long=str_split[i]
           
           
       }
        
        
        
    }
    return arr_long
    
}
console.log(longest("This is the long word in hereee"))// this actually wokred and I did iy by myself.

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowel_count(str){
    let vowels="aeiouAEiou"
    let count=0
    
    for (let i=0;i<str.length;i++){
        
        if( vowels.indexOf(str[i])!=-1){
            count++
        }
        
    }
    return count
    
}

console.log(vowel_count("we are counting vowels"))// this reall yworked to.



//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.


function prime(num){

//let new_arr=[]

//for (let i=0;i<num;i++){
    // this will go through all the numbers until it reaches 1 number less than the number given
    //new_arr.push(i)// when i do this without the length I dont need the name infornt of the index.
    
  // console.log(num[i]) 
    if (num===1){
        return false
    }
    else if (num===2){
        return true
    }else{
        for (let i=2;i<num;i++){
            
            if (num%i===0){
                return false
            }else{
                return true
            }
           
        }
        
    }
    
    
    
}// his keeps things simple
    
 

console.log(prime(37))



//Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively

//Write a JavaScript function which says whether a number is perfect.
function seconds(arr){
   let arr_num=arr.sort()
   let new_arr=[]
    let result=[]
    
    for (let i=0;i<arr_num.length;i++){
        
       if (new_arr.indexOf(arr_num[i])===-1){
           new_arr.push(arr_num[i])
       }
    }
        result.push(new_arr[1],new_arr[new_arr.length-2]);
        console.log(new_arr)
        
        
    
  return result.join(",");
    
    
}
console.log(seconds([1,3,4,2,3,4,5]));// wow this worked to


function perfect_number(num){

let factors=[]    
 let numfac=0   
    
    for ( let i=0;i<num;i++){
        
      if(num%i===0){//basically saying there is no remainder
       
       factors.push(i)   
        numfac+=i  
      }  
        
        
    }
    console.log(factors)
   if (num===numfac){
       console.log(numfac)
   return    console.log("this is a perfect number")
   } 
   else{
       console.log("this num is not perfect")
   }
    

    
    
}
console.log(perfect_number(7))



function factors(num){
 let factors=[]   
 
 
 for (let i=0;i<=num;i++){
     //w eput equal to because the numebr itself is a factor of itself 
     
     if ( num%i===0){
         factors.push(i)
     }
         
         
 }
    
   return factors 
    
    
}


console.log(factors(10))



function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];// empty array
   } 
 else
   {
     if (amount >= coins[0]) // if the amount is gretaer than the coins at the first position
       {
       let left = (amount - coins[0]);//then we will subtract the coin in first postion form the amount.this is assuming we go left to righ with highest and lowest.
        return [coins[0]].concat( amountTocoins(left, coins) );// now we will take the coin in the first postion and add it on to 
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));



/*
function amount_coins(num,coins){
    
  //  if (num===0){
    //    return []
    //}
    //else{
        if (num>=coins[0]){
            //if amounts bigger than the first coin
        let left=(num-coins[0])
        
        return [coins[0]].concat(amount_coins(left,coins));
    
        
        
        }
        else{
            
            coins.shift
            return amount_coins(num,coins)
            
            
        }
    }
//}
console.log(amount_coins(46, [25, 10, 5, 2,1]));
    
  */
  
 //Write a JavaScript function to extract unique characters from a string. 
  
  function exponet(b,number) {
    let ans=1
    
    
    for (let i=0;i<number;i++){
       ans=b*ans 
        
        
    }  
      
   return ans   
      
  }
    console.log(exponet(2,3))
    
  function extract(str){
      
   let new_str=""
   
   for (let i =0;i<str.length;i++){
       
         
        if (new_str.indexOf(str.charAt([i]))===-1){
            new_str+=str[i]
        }
         
          
       
       
   }
    return new_str  
      
      
  }  
 console.log(extract("thisudyqwgudgWEGDOilgh"))   
    
    
    /*function char_counter(str){
    let objChar={}// this is my empty object to hold the character and how many times they are counted.    
        
        
        
        
    }
    */
    
    
    function Char_Counts(str1) {
var uchars = {};
str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});//the begging part is the regular expersision for spaces and im telling it to replace all of them
return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));
    
   
 //problem 17   
let letterOccurrence = (string) =>
{
let container = {};// this is my empty object

for ( let character of string )// we get every different charater in this string as we loop through
{
container[character] ? container[character] += 1 : container[character] = 1 ;
};// now we are adding the charater to the object container as a key and ternery statement to put the character in the object if its first time bing in the ibject or add 1 on to it. 

return container;

};

console.log(letterOccurrence('The quick brown fox jumps over the lazy dog'));



function biggernum(val){
   return function (value,index,array){//most the time we jsut care about value though
   return value>=val
    
   }   
}
var result = [11, 45, 4, 31, 64, 10]. filter(biggernum(15));



console.log(result);

function numbigger(value){
    return function(new_value,index,array){
        
        return new_value>=value// Im telling the function to give to return only the values larger than the value inside the inner function.
        
    }
    
    
}
let arr=[11,45,55,65,85,10,9].filter(numbigger(10))// even though we call the outfuntioon it access the callback function 
console.log(arr)


function make_random(id_length){
let text=""    
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//let char=char_list.length
//console.log(char)
for (let i=0;i<id_length;i++){
  text+=char_list.charAt(Math.floor(Math.random()*char_list.length))  
     // we are first ACESSING the list of all the charaters 
  //THEN we use charAt which will give  a specific character 
  //math.floor rounds whatever number we put in.
  //math.random will just give us a random number
  //then we multiply this by the length of all the characters in the list. 
    
}
    
 return text   

}
console.log(make_random(8))

function subsets(len,arr){
    
let subset_array=[]    
 
 
 for ( let i=0;i<math.pow(2,arr.length);i++){
     
     
 }
   
    
    
    
}


//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function num_occurences(str,letter){
   let count=0
    
   for (let i=0;i<str.length;i++ ){
   
   if (letter==str[i]){
       count++
   }
   
    
    
}
return count
}

console.log(num_occurences("thisz is the string for number of letter ","t"))// this actually worked also


function non_repeated(str){
 let result=""
 let arr=str.split("")
 let count=0
 for (let i=0; i<arr.length;i++){
     count=0
     
     for (let j=0;j<arr.length;j++){
         if (arr[j]===arr[i]){//since we are iterating every letter everytime we get the same letter in the array we add 1. if it doesnt reopeat it hsould only add one 1 time.
             count+=1
         }
         
     }
     if (count<2){
         result=arr[i]
        break; 
     }
     
     
 }   
    
 return result   
    
    
}
console.log(non_repeated("efuihfr5juyeufhuihfuihfz"))

//#24
function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//25



function Longest_Country_Name(arr){
    
    return arr.reduce(function(previousCountry, Currentcountry){
        return (previousCountry.length>Currentcountry.length)?previousCountry:Currentcountry
        
        
        
    },"");}
    
    console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
    
 //26
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //27
 
 function is_Palindrome(str1) {
var rev = str1.split("").reverse().join("");
return str1 == rev;
}

function longest_palindrome(str1){//we have another function

var max_length = 0,// max length begins at 0
maxp = '';// the max palindrrome is empty to begin

for(var i=0; i < str1.length; i++) // this lets us go through everything inside the string 
{
var subs = str1.substr(i, str1.length);// this allows us to take a substring of whatever is at the index of i and the length of the string. Basically this will keep getting shorter as we loop through cause i changes until we gone through the entire string.

for(var j=subs.length; j>=0; j--) // this will loop through the changing substring. but will actaully get rid of a indexes until we reach 0. meaning it gets smaller its itereation.
{
var sub_subs_str = subs.substr(0, j);// now we are taking the substing of the earlier subtring. this will continue to get wmaller as the sting iterates also.
if (sub_subs_str.length <= 1)// if the substring of the substring length is less than or equal to 1 continue. Because we use continue in this if statement we are bascially saying if the substring is 1 or 0 indexes we might as well terminate or get rid of the information because its not relevnt. This is due to the fact that palindromes need to include more than one index.
continue;//The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
  
  
  

if (is_Palindrome(sub_subs_str))//now we call on the funtion we made earlier basically saying if the subsusbtring we have indexes are the same backwards and forward even if there revsered we continue.// this really just test to make sure its a palindrome
{
if (sub_subs_str.length > max_length) //if the sub string of the substring is beigger than the max length which starts at 0 we continue also.
{
max_length = sub_subs_str.length;// the max length will now take on the length of the substring inside of the substring. 
maxp = sub_subs_str;// also the substring of the substring will take the place of the palindroem and give us the lonegst one.
}
}
}
}// clsoing everything

return maxp;// now we have the maximum palindrome which is what we will return.
}
console.log(longest_palindrome("abracadabra"));

console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 


//Write a JavaScript program to pass a 'JavaScript function' as parameter.


//28
function funas_param(callback){
   return callback()
}


function newcallback(){
    console.log("hello")
}


console.log(funas_param(newcallback))//we literally just place the callback function inside the other funstion. But does this make it asycnrhous.

//I dont undertstand why I have undefined popping up.
    
    
  //29  
    
    function getname(){
     console.log( arguments.callee.name );
}
getname()   
        
    

/*
function random_char(str){
    
    let text=""
    Write a JavaScript function that generates a string id (specified length) of random characters.
Sample   character   list:
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    
    for (let i=0;i<str;i++){
        text+=char_list
        
    }
}


console.log(random_char(str))











function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
    
   
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];// result is still empty
    i = arra.length - 1; // arr
     do
      {
      if( (x & (1 << i)) !== 0)// this loop will run at least one time.
          {
             result.push(arra[i]);// where adding the i to the result array.
           }
        }  while(i--);// where subtracting 1 from length everytime until there the length of the array is 0

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set; 
}

console.log(subset([1, 2, 3], 2));
*/


     