function writeCards(names,giftType){
    var newArray=[]
     for(let i=0;i<names.length;i++){
     newArray.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`)
 
     }
 return newArray
 }

 function countDown(n){
    let i = n;
    while (i >= 0 ) {
        console.log(i);
        i= i - 1
    }
}