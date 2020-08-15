/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowels = ('aeiou'); //our vowels
    var cons = ''; //our consonants
    for(var i = 0;i< s.length; i++)
    {
        if(vowels.includes(s[i]))
        {
            console.log(s[i]);
        }
        else
        {
            cons = cons + s[i] + '\n';
        }
    }

    console.log(cons.trim());

    
}

