/*
 without '=>' function - 
 function modifyArray(nums) {
    var res = function(n){
        if(n%2==0)
            return n*2;
        else
            return n*3;
    }
    var newArray = nums.map(res);
    return newArray;
 */
function modifyArray(nums) 
{
    var res = n => n = (n%2==0) ? n*2:n*3;
    var newarray = nums.map(res);
    return newarray;

}