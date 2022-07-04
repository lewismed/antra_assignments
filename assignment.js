function vowels(str){
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
console.log(vowels("igjgx qjhXJIOJHX IOHQH"))