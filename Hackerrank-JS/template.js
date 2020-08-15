function sides(literals, ...expressions)
{
    var area = expressions[0];
    var perimeter = expressions[1];

    var res = Math.sqrt(perimeter*perimeter - 16*area);

    var s1 = (perimeter+res)/4;
    var s2 = area/s1;

    return [s1,s2].sort();
}