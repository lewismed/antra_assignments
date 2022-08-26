//problem 1

function invoke(){
    let count=0
     function congrats(){
     count++
         if (count<5){
             console.log(count)
             console.log("Congrats you earn the chance")
    // }else{
     
 //console.log("sorry you missed the chance")
         
   //  }
         }else{
             
             console.log("sorry you missed the chance")
         }
     }
      return congrats
      }  
        //let count=0
        invoke()
        const howt=invoke() 
        howt()
        howt()
        howt()
        howt()
        howt()
        howt()











//problem 2

function longerthan(minimumlength){
    return function(longer){
       return longer.length>minimumlength 
    }  
}
let arr=["the weather","is", "extremly nice", "today "]
console.log(arr.filter(longerthan(7)))

