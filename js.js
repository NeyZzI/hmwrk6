let c = +prompt('Enter number c : ');
let d = +prompt('Enter number d : ');
let count = 0;
console.log('Number c : ' + c);
console.log('Number d : ' + d);
for (let i = c; i <= d; i++) {
    if ( ((i3 % 10)  == 4)|| ((i3 % 10) == 9) ) {
        count++;
    }
}
console.log('Count : ' + count);