/* An array is given with some repeatative integer numbers. Need to know the occurance of those numbers */


let arr = [12, 98, 78, 98, 76, 12, 78, 100, 98, 10]
let skip_arr = [];
let arr_size = arr.length;

for(let i=0;i<=arr_size-1;i++){
    let count = 0;
    if(!skip_arr.includes(arr[i])){
        for(j=0;j<=arr_size-1;j++){
            if(arr[i]==arr[j]){
                skip_arr.push(arr[i])
                count ++
            }
        }
        console.log(`${arr[i]} occurs ${count} times`)
    }
}