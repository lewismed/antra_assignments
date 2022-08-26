Array.prototype.mymap=function(callback){
    let arr_new=[]// this will hold my new array 
    for (let i=0;i<=this.length;i++){
    
    arr_new.push(callback(i,this[i],this))
    }
    // my elemnet will i
    //my index will be this[i]
    console.log(arr_new)
    return arr_new
    }
    let arraat=[84,2,5]
    
    console.log(arraat.mymap((item) =>item/2))        
    
    
    
    let arr=[1,2,3,5,56]
    
    
    
    Array.prototype.myreduce=function(acc,initialvalue){
    
    
        
    
            if(initialvalue == undefined){
            initialvalue = this[0];
            for (let i=1;i<this.length;i++){
            
        initialvalue=(acc(initialvalue,this[i],i,this))
     console.log(initialvalue)
        }
        return initialvalue} else{     
            
        for (let i=0;i<this.length;i++){
            
        initialvalue=(acc(initialvalue,this[i],i,this))
     console.log(initialvalue)
        }
        return initialvalue
        }
        
        //console.log(total)
       // return initialvalue
        //+newval
        //oldVal = callback(oldVal, this[i], i, this);
        }
        console.log(arr.myreduce((acc,curr) => curr+=acc) );
        
        
        
    //for each it used for working with arrays because there will be times where you need to either loop or iterate through the arrays values in order to either output or manipukate them.
    
    //for each is a callback function that exexcutes a provided function once for each value in a array.in asscending index order.
    // how to write for each loop  array.foreach.(callbackfunction)
    //array.foreach.(callbackfunction,thisvalue)
    // the callback function can accept up to 3 differnet arguents.
    
    //(areguments in foreach are (callback( current element, index, array),this value)
    
    
    
    
    
    Array.prototype.myforeach=function(callback){
        let new_arr=[]
        for (let i=0;i<this.length;i++ ){
            
        new_arr.push(callback(this[i],i,this))    
        }
        
        return new_arr
    }
    
    console.log(arr.myforeach((acc)=>acc+7) )