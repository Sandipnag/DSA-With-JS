/* An array is given with some repeatative integer numbers. Need to know the occurance of those numbers */


let arr = [12, 98, 78, 98, 76, 12, 78, 100, 98, 10];

let arr_size = arr.length;

for(let i=0;i<arr_size-1;i++){
    let count = 0;
    for(j=0;j<arr_size-1;j++){
        if(arr[i]==arr[j]){
            count ++
        }
    }
    console.log(`${arr[i]} occurs ${count} times`)
}