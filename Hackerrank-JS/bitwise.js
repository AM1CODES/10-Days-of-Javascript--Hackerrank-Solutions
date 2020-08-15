function getMaxLessThanK(n,k)
{
    let max = 0;
    for (var i =1;i<n;i++)
    {
        for(var j =i+1;j<=n;j++)
        {
            var res = i&j;

            if(res<k && max< res)
            {
                max = res;
            }
        }
    }
    return max;
}