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
        }      
            
        for (let i=0;i<this.length;i++){
            
        initialvalue=(acc(initialvalue,this[i],i,this))
     
        }
        //console.log(total)
        return initialvalue
        //+newval
        //oldVal = callback(oldVal, this[i], i, this);
        }
        console.log(arr.myreduce((acc,curr) => curr+=acc) );
        