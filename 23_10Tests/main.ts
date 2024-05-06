let player: string = "Babar Azam";

console.log("Is player == 'Babar Azam'? I predict True.");
console.log(player === 'Babar Azam'); 

console.log("Is player == 'Virat Kohli'? I predict False.");
console.log(player === 'Virat Kohli'); 

console.log("Is player != 'Steve Smith'? I predict True.");
console.log(player !== 'Steve Smith'); 

console.log("Is player.length > 5? I predict True.");
console.log(player.length > 5); 

console.log("Is player.charAt(0) == 'B'? I predict True.");
console.log(player.charAt(0) === 'B');

console.log("Is player.includes('foo')? I predict False.");
console.log(player.includes('foo'));

console.log("Is player.startsWith('A')? I predict False.");
console.log(player.startsWith('A'));

console.log("Is player.endsWith('Bar')? I predict False.");
console.log(player.endsWith('Bar')); 

console.log("Is player.length < 3? I predict False.");
console.log(player.length < 3);

console.log("Is player.includes('zam')? I predict True.");
console.log(player.includes('zam'));
