/* Insert a number inside of an array at any poistion. */


let arr = [1,2,3,4];
let inserting_position = 2;
let number_to_insert =50;
let inserting_position_index = inserting_position - 1;
let arr_size = arr.length
if(inserting_position<=arr_size){
    for(let i=arr.length-1;i>=inserting_position_index;i--){
        arr[i+1] = arr[i];
    }
   arr[inserting_position_index] = number_to_insert
   console.log(arr);
}else{
    console.log("Please check the array position")
}