// code your solution here
function superbowlWin(record){
    for (let items of record){
        if(items.result === "W"){
            return items.year;
        }
    }
}


let Item = record.find(superbowlWin);
   // if(record == "W"){
        //return record.year;
  //  } else{
       // return undefined;
   // }

   