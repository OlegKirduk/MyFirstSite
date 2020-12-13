

/*тренируюсь*/
let message = "I love Nastya";

let Nastya = true;
let Oleg = true;
let Sasha = false;

if (Oleg && Nastya) {
    console.log(message);
} else if (Sasha && Nastya){
    console.log('Этого не может быть!!!')
} else {
    console.log('Вот это поворот!!!')
}

/*еще пример*/
let greeting = 'Hello';
let greetingEnd;

if (2>3) {
    greetingEnd = ", Oleg!";
} else {
    greetingEnd = ", Aleh!";
}

console.log(greeting + greetingEnd);

/*еще пример*/
let end = (4>3) ? ", Oleg!" : ", Aleh!";
console.log(greeting + end);

/*закрепляю*/
let name = "Roman";
console.log(name);
console.log(typeof name);

let age = 32;
console.log(age);
console.log(typeof age);

let freedom = true;
console.log(freedom);
console.log(typeof freedom);

let x = 5;
let y = 6;
let z = y - x;
console.log (z);

let a = 5;
let b = ++a;
console.log (a);
console.log (b);

let c = 3;
c += 5;
console.log (c);

let d = 6 > 5;
let f = 2 <= 2;
let g = f || d;
console.log (g);

let w = 1 != 1;
let q = 2 > 3;
let e = w && q;
console.log (e);

let namer = "Oleg";
let surname = "Baranovsky";
let fullname = namer + " " + surname;
console.log(fullname);

