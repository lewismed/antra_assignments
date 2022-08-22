console.log("Hello from JavaScript");

//question 1 mymap
Array.prototype.myMap = function(callback){// call back function
    const resultArr = [];// empty array to hold the reurned value
    for(let i = 0 ; i < this.length; i++){// makes surre we go through everything in the object array
        resultArr.push(callback(this[i]), i , this);// add to the empty array each iteration of the gieven obejct array after oing through the callback and 
        //value-this[i]
        //index-i
        //array-this
    }
    
    return resultArr;
}
//question2 myreduce

Array.prototype.myreduce=function(cb){
    let sum=0;
    for (let i=0;i<this.length;i++){
        sum+=this[i]
    }
    return sum
}


let arraa = [1,2,3,4,5];

console.log(arraa.myreduce(n => n * 3));
console.log(arraa.myMap(n =>n*2))