// declaration

let min,max,
    itr=0,
    cntr=0,
    array=[];
min=prompt("Enter The Min_number");
max=prompt("Enter The Max_number");

// the function performed recursively & return the result

let pro1=(x)=>{
    if(x==1){
        cntr++;
        return 1;
    }else{
        if(x%2===0){
            x=x/2;
            //console.log(x);
            cntr++;
            pro1(x);
        }else{
            x=(x*3)+1;
           // console.log(x);
            cntr++;
            pro1(x);
        }
    }
return cntr;
}
for (let i=min;i<=max;i++){
    array.push(pro1(i));
    itr++;
    cntr=0;
}
// sort the given array assending order
for (let j=0;j<itr;j++){
    for(let k=j+1;k<itr;k++){
        if(array[j]>array[k]){
            let temp=array[j];
            array[j]=array[k];
            array[k]=temp;
        }
    }  

}
// display into the console
let len=array.length;
  console.log("-----:Sample OutPut:-----")
   console.log(`${min} ${max}  ${array[len-1]}`);

