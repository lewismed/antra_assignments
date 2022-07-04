/*function vowels(str){
    let vowel_list="aeiouAEIOU";
    let count=0;
    
    for (let i=0; i>str.length;i++){
        if (vowel_list.indexOf(str[i]) !== -1)  
        {
            count+=1;
        }
    }
    
    return count;
     
    
} 
console.log(vowels("igjgx qjhXJIOJHX IOHQH"))*/
//console.log("Hello from JavaScript");
//problem 1
/*function reverse_num(num){
    var split_num=num.split("")
    var reverse_numm=split_num.reverse()
    var join_num=reverse_numm.join("")
    return join_num
}
console.log(reverse_num("6756"))
*/


// problem 2

/*
function palindrome(word){
    var split_word=word.split("")
    
    var reverse_word=split_word.reverse();
    var join_word=reverse_word.join("");
    
    if (word==join_word){
        console.log("it is a a palindrome")
    }
    else{
        console.log("its not a palindrome")
    }
}

console.log(palindrome("eee"));
*/
//problem 3
function all_comb(str){
    //let combinations=[];
   // for (let i = 0;i < str.length;i++){
       // for (let j= i+1;j<str.length+1;j++){
           //combinations.push(str.slice(i,j))
            
    let combinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));

            
           
        }
    }
    return(combinations)
}

console.log(all_comb("dog"))


//problem 4
//.sort will sort things alphabetically 
function alpha(str){
   var split_str=str.split("");
   var sort_str=split_str.sort();
   var join_str=sort_str.join("");

   return join_str
   
}

console.log(alpha("adghb"))





//problem 5

function upper(str){
    var upper_split=str.split(" ");
    //split the given string into an array of strings
    //when ever a blank space is encountered
    for (let i =0; i<upper_split.length;i++){
        upper_split[i]=upper_split[i].charAt(0).toUpperCase()+upper_split[i].slice(1);
    }//loop through each element of the array and captilize the first letter
    let str2=upper_split.join(" ")// join all the elemnts of the array back into a string
    // using the blank space as a seperator
    return str2
}
    
    // var first =upper.charAt(1)
   // var upper_first=upper_split.charAt(0);
   // return upper_first;
//
console.log(upper("I like you dont give a fuck bout your boyfriend"));

// problem 6
function longest(str){
    var long_split=str.split(" ");
    var long=0
    var word=null;
    for ( let i =0; i<long_split.length;i++){
        if (long < long_split[i].length ){
            long=long_split[i].length
            word=long_split[i]
            
        }
    }
    return word
    
}

console.log(longest( "I love my dog but he crazy asf"));




//Write a JavaScript function that accepts a string as a parameter and counts the number of
//vowels within the string
//problem 7
function vowels(str){
    let vowel_list="aeiouAEIOU";
    let count=0;
    
    for (let i=0; i<str.length;i++){
        if (vowel_list.indexOf(str[i]) !== -1)  
        {
            count+=1;
        }
    }
    
    return count;
     
    
} 
console.log(vowels("igjgx qjhXJIOJHX IOHQH"))



//Write a JavaScript function that accepts a number as a parameter and check the number is
//prime or not.
/*function prime(num){
  if (num<=1)return false
  
  var isprime= num!=1;
    
    if (num%2==0 && num>2)return false
    const square=Math.floor.sqrt(num)
    for (let i=2; i<square+1;i++){
        if (num % i==0){
            
        
        isprime=false;
        break;
    }
    }
return prime
*/      
//console.log(prime())
/*
function isPrime(num) {
  var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
        if(num % i== 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
console.log(isPrime(7))
*/
//problem 8
function ifprime(n){
    if ( n<2){
        return `${n} is not prime`
    }
    for (let i=2; i<n;i++){
        if ( n%i==0){
            return '${n} is not a prime number'
        }
    }
    return `${n} is a prime number`
}
console.log(ifprime(17))
//|| vowel_split[i]== e|| vowel_split[i]== i||vowel_split[i]== o|| vowel_split[i]== u


//problem 9
//Write a JavaScript function which accepts an argument and returns the type
function argument(arg){
   return typeof arg
     



}
console.log(argument("buhb"))

//problem 10
//Write a JavaScript function which returns the n rows by n columns identity matrix.

function identity_matrix(n){
    var i;
    var j;
    for (i=0; i<n;i++){
        for (j=0;j<n;j++){
            if (i===j){
                console.log('1');
            }
            else{
                console.log('0');
            }
            console.log('------------');
        }
    }
}

//problem 11
console.log(identity_matrix(4));

let dog=[3,1,2,6,5,4]
function array(arr){
   let arr_sort= arr.sort()
   var n =arr.length
   let low= arr_sort[1]
   let high=arr_sort[n-2];
   
   //return low, high;
   return high
}
console.log(array([101,140,100,120,115]));


function perfect_num(num){
    //if (num<0){
     //   return "this number is not perfct"
 //   }
    //num
    var temp=0
    
// where starting the for loop off at 1 becasue perfect number must be positive and cant be 0.
    for (let i=1;i<=num/2;i++){
        if (num%i ==0){
            temp+=i;
            
        }
        if (temp == num && temp !==0){
            console.log("its a perfect number")
            
        }
        else{
            console.log("its not a perect number")
        }
    }
}
console.log(perfect_num(6))

//problem 12
function factors(fac){
    let fac_temp=[]
    
    // we will use 1 becasue we are assuming factors cannot be 0.
    //i will be less than
    //also integrs must be postive so we can start at 1 to
    for (let i=1;i<fac+1;i++){
        if( fac % i==0 )
        fac_temp.push(i)//. push inserts them into the array with a coma inbetwwen and seperated. while . += just inserts them into the array as string all right next to eachother with no seperating them.
    }
    return fac_temp
    
}
console.log(factors(10))

//problem 13
function all_coins(amt,coins){
    if (amt===0){
        return [];
    }
    else{
        
    if (amt>=coins[0]){//if the amount is greater than the coin in the first postion the remainder isthe amt minus the cooin in the first psotion.
        let remainder= (amt-coins[0])
        return [coins[0]].concat(all_coins(remainder,coins))    
        }
        else{
            coins.shift();
            return all_coins(amt,coins)
        }
    }
    
}
console.log(all_coins(6,[25,10,5,1]))
    // where going to start at 1 because there is no coin that reoresnts 0
// ask about even though its solved.  dont understand how these if and else staments are acting almost as loop going through until theamount is 0.
//problem 15
function bn(b,n){
    var ans=1;
    for (let i=1;i<=n;i++){// im lost on where i is even applied in this problem other than the for loop.
        ans=b*ans;
        
    }
    return ans
}
console.log(bn(2,3))

function exp(b,n)
{
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
}
console.log(exp(2, 3));

//problem 16
//user provides unique characters
function unique(str){
    let str1=str
    let uni=""
    for ( let i=0 ;i<str.length;i++){
        if (uni.indexOf(str.charAt(i))==-1){
            uni += str[i];
        }
    }
    return uni;
    
}
console.log(unique("thequickbrownfoxjumpsoverthelazydog"));


function Char_Counts(str1) {
var uchars = {};
str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
return uchars;
}

function character_count(str){
    var diff_chars={}
    for (let i=0;i<str.length;i++){
        
    }
    
}

const Char_Countss = ([...str]) =>
  str.reduce((acc, cur) => {
    if (cur === " ") return acc;

    acc[cur] ? ++acc[cur] : (acc[cur] = 1);
    return acc;
  }, {});
  console.log(Char_Counts("I love my wife","I love you to"))
  
  
 //Write a function for searching JavaScript arrays with a binary search. 
function binary(arr){
    
}



//problem 18

//problem 18
const  new_binary = (val,arr)=>{
    let lower=0
    let upper=arr.length-1
    while (lower<=upper){
        const middle= lower+ Math.floor((upper-lower)/2)
        if (val==arr[middle]){
            return middle;
        }
        if (val < arr[middle]){
            upper=middle-1;
        }else{
            lower=middle+1
        } 
            
        }
        return -1;
    }
   const values=[0,1,2,3,4,5,6,7,8,9,10] 
    console.log (new_binary(6,values))



/*function array_binarySearch(arr, elem) {

    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === elem) return mid;
        else if (arr[mid] < elem) start = mid + 1;
        else end = mid - 1;
    }

    return "Element not found";
}

var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(array_binarySearch(myArray, 6));

*/

//problem 19

function large_array(arr,num){
    let start= num 
    let end=arr.length-1
    let array=[]
    let count;
    
    for (let i= num; i<=arr;i++){
        if (arr[i]<=num){
            count= array.push(i)
        }
    }
    return array
}
var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(large_array(myArray,5))


//
//

//const arr1=arr.map((item))

/*
let possibleCombinations = (str) =>{
    let combinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
   return combinations;
}
console.log(possibleCombinations('Dog'));
*/
//Problem 19
//Write a JavaScript function that returns array elements larger than a number.
function large_array(arr,num){
    var maxes= []
    let number=num
       let end=arr.length-1
       let count;
       
       for (let i= 0; i<=arr.length;i++){
           if (arr[i]>num)
          // if (arr[i]<=num){
               count= maxes.push(arr[i])
           }
   return maxes
   }
   var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
   console.log(large_array(myArray,6))
   
   
   //problem 20 
   //Write a JavaScript function that generates a string id (specified length) of random characters
   function string_id(str_len){
       let random_string="";
       let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
       for (let i=0; i<str_len;i++){
           random_string+=char.charAt(Math.floor(Math.random()*char.length))
           
       }
       return random_string
   }
   console.log(string_id(8))
   
   //problem 21
   function arr_comb(arr,n){
       let arrays=[]
       
       for (let i=0;i<arr.length;i++){
          let arraytwo=[arr[i]];
        
           for (let j= 0;j<arr.length;j++){
               if (i>=j) continue;
               arraytwo.push(arr[j]);
               if (n==arraytwo.length){
                   arrays.push(arraytwo);
                   arraytwo=[arr[i]]
               }         
           }
       }
       return arrays;
   }
   console.log(arr_comb([1,2,3],2))
   
   
   //problem 22
   //Write a JavaScript function that accepts two arguments, a string and a letter and the function
   //will count the number of occurrences of the specified letter within the string.
   function letter_occurences(str,letter){
   let count=0
   
     for (let i=0; i<str.length;i++){
         console.log(str[i])
         if (str[i]==letter){
             count+=1
         }
     }  
     return count
   } 
   console.log(letter_occurences("microsoft.com ","o"))
   
   
   //Write a JavaScript function to find the first not repeated character. 
   function not_repeated(str){
       let repeated_split=str.split("")//puts chararyter in an array
       let result='';
       let repeat_num=0
       
       for (let i=0;i<repeated_split.length;i++){// anytime you loop through an array you are almost always going to use .length
           repeat_num=0
           for (let j=0;j<repeated_split.length;j++){
               
           if ( repeated_split[i]==repeated_split[j]){
               repeat_num+=1
           }
           
           }
           if (repeat_num<2){
               result=repeated_split[i]
               break;
           }
           }
           return result
           
       }
       
   
   console.log(not_repeated("iilove"))
   
   
   function bubble_sort(arr){
       let bubble_array=arr
       let end =arr.length-1
       let swapped;
       do{
        swapped=false
       for (let i=0;i<end;i++){
           if (arr[i]<arr[i+1]){
               swapped=true;
               let temp=arr[i];
               arr[i]=arr[i+1]
               arr[i+1]=temp
           }
          
       }
      end--;}
      while(swapped);
      return bubble_array;
   }
   
   
   
   console.log(bubble_sort( [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))
   
   
   
   
   function Longest_Country_Name(arr_country){
        return arr_country.reduce(function(lname, country) 
     {
       return lname.length > country.length ? lname : country;
     }, 
   "");
   }
       
     //  return arr_country.reduce(funtion(lname,country)
   
      // {return lname.length>coutry.length?lname:country},"");}
       
   console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
   
   //problem 26
   
   const isUnique=(arr)=>{
       const set= new set()
       for (let j=i;j<str.length;i++){
           if (set.has(arr[i])){
               return false
           }
           set.add(arr[i])
   }
   return true
   }
   
   function longest(str){
       
       let max=0
       
       for (let i=0;i<str.length;i++){
           for (let j=i;j<str.length;i++){
               const long=str.substring(i,j+1);
               if (isunique(substring)){
                   max=Math.max(max,substring.length)
                   }
               }
               
           }
           
       }
       return long
   }
   console.log(longest("abcabgfyfyguygyugygtf"))
      
   
       
       
       
     /*  
       let longest=""
       for (let i=0;i<arr.length;i++){
           if (arr[i]<arr[i+1])
           
           console.log(arr[1]);
           console.log(arr[1].length);
           
       }
       
       
   }
   console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]))
   */