// (() => {
//     console.log('Hello');
//     setTimeout(() => {
//         console.log('AAAA');
//     }, 2000);
// })();
const res = ((type: string) => {
    if (type === 'a') {
        return 'A';
    } else {
        return 'B';
    }
})('A');
console.log(res);
