/*
Assignment name  : rotone
Expected files   : rotone.c
Allowed functions: write
--------------------------------------------------------------------------------

Write a program that takes a string and displays it, replacing each of its
letters by the next one in alphabetical order.

'z' becomes 'a' and 'Z' becomes 'A'. Case remains unaffected.

The output will be followed by a \n.

If the number of arguments is not 1, the program displays \n.

Example:

$>./rotone "abc"
bcd
$>./rotone "Les stagiaires du staff ne sentent pas toujours tres bon." | cat -e
Mft tubhjbjsft ev tubgg of tfoufou qbt upvkpvst usft cpo.$
$>./rotone "AkjhZ zLKIJz , 23y " | cat -e
BlkiA aMLJKa , 23z $
$>./rotone | cat -e
$
$>
$>./rotone "" | cat -e
$
$>
*/
if (process.argv.length != 3) {
    console.log("");
    process.exit(0);
}
var str = process.argv[2];
var i = 0;
var result = "";
while (i < str.length) {
    var c = str[i];
    if (c >= 'a' && c < 'z')
        result += String.fromCharCode(str.charCodeAt(i) + 1);
    else if (c >= 'A' && c < 'Z')
        result += String.fromCharCode(str.charCodeAt(i) + 1);
    else if (c === 'z' || c === 'Z')
        result += String.fromCharCode(str.charCodeAt(i) - 13);
    else
        result += str[i];
    i++;
}
console.log(result);
