2/12
ft_strlen ✅
first_world ✅
fizz_buzz ❌





```ts
// ft_strlen
function ft_strlen(str: string): number {
	return str.length;
}

let str = "salut";
console.log(ft_strlen(str));

```


```ts
// firstWorld 
const str = process.argv[2];
if (process.argv.length !== 3)
{
	console.log("");
	process.exit(0);
}

let result = "";
let save = 0;

while (str[save] === ' ' || str[save] === '\t')
	save++;
for (let i = save; i < str.length; ++i){

	if (str[i] === ' ' || str[i] === '\t')
		break;
	result += str[i];
}
console.log(result);
```