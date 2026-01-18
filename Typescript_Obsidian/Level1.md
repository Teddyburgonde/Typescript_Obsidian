9/12
first_world ✅
fizz_buzz ✅
ft_putstr ✅
ft_strcpy ✅ 
ft_strlen ✅
ft_swap ✅
repeat_alpha ❌
rev_print ✅
rot_13 ✅
rotone ✅
search_and_replace ❌
ulstr ❌




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

```ts
// fizzbuzz
let nb: number = 1;
let end = 100;

while (nb <= end)
{
	if (nb % 3 === 0 && nb % 5 === 0)
		console.log("fizzbuzz");
	else if (nb % 3 === 0)
		console.log("fizz");
	else if (nb % 5 === 0)
		console.log("buzz");
	else
		console.log(nb);
	nb++;
}
```

```ts
// ft_putstr
function ft_putstr(str: string): void {

	let i: number = 0;
	let result: string = ""
	while (i < str.length)
	{
		result += str[i];
		i++;
	}
	console.log(result);
}
ft_putstr("salut les amis");
```

```ts
function ft_strcpy(src: string, dest: string): string {

	dest = src;
	return dest;
}

let src: string = "salut les amis";
let dest: string = "";

console.log(ft_strcpy(src, dest));
```

```ts
// ft_swap
function ft_swap(nb1: number, nb2: number): [number, number] {
	return [nb2, nb1]
}
```


```ts
// rev_print

if (process.argv.length != 3)
{
	console.log("");
	process.exit(0);
}

let str: string = process.argv[2];
let result: string = "";

let i:number = 0;

while (i < str.length - 1)
	i++;

while (i >= 0)
{
	result += str[i];
	i--;
}
console.log(result);
```

```ts
// rot_13
if (process.argv.length != 3)
{
	console.log("");
	process.exit(0);
}


let str: string = process.argv[2];
let i: number = 0;

let result:string = "";

while (i < str.length) 
{
	const c = str[i];
	if (c >= 'a' && c <= 'm')
		result += String.fromCharCode(str.charCodeAt(i) + 13);
	else if (c >= 'A' && c <= 'M')
		result += String.fromCharCode(str.charCodeAt(i) + 13);
	else if (c > 'm' && c <= 'z')
		result += String.fromCharCode(str.charCodeAt(i) - 13);
	else if (c > 'M' && c <= 'Z')
		result += String.fromCharCode(str.charCodeAt(i) - 13);
	else
		result += str[i];
	i++;
}
console.log(result);
```


```ts
// rotone
if (process.argv.length != 3)
{
	console.log("");
	process.exit(0);
}

let str:string = process.argv[2];
let i: number = 0;
let result: string = "";

while (i < str.length)
{
	const c = str[i];
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
```
