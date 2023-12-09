/* Delete a number inside of an array from a particular poistion. 
We can do this in javascript with the help of splice method. 
But we need the logic with out using slice method or any kind of in build javascript methods.  
*/


let arr = [19,59,98,49];
let deleting_position = 4;
let deleting_position_index = deleting_position - 1;
let arr_size = arr.length;

if(deleting_position<=arr_size){
    for(let i=deleting_position_index;i<=arr_size-1;i++){
        arr[i] = arr[i+1]
    }
    console.log(arr);
}else{
    console.log("Please check the array position")
}