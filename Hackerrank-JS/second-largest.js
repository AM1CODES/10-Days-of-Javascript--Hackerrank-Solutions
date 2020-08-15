function getSecondLargest(nums) 
{
    let largest = Math.max(...nums);
    let filtered = [];
    let secondlargest;

    for(let i =0;i<nums.length;i++)
    {
        if(nums[i]!== largest)
        {
            filtered.push(nums[i]);
        }
    }

    return Math.max(...filtered);

}