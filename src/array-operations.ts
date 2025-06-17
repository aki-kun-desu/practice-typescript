import { users } from './consts/user-data';

// 配列操作
// filterメソッドは、引数で渡された関数でフィルタし、trueになる値の配列を返す
const filtered = users.filter((user) => user.age > 30);
console.log('filtered', filtered);

// findメソッドは、条件に当てはまる最初の要素を返す
// 該当なしの場合はundefined
const startsWithQ = users.find((user) => user.name.startsWith('Q'));
console.log('startsWithQ', startsWithQ);

// findメソッドは、条件に当てはまる最初の要素を返す
const startsWithXIndex = users.findIndex((user) => user.name.startsWith('X'));
console.log('startsWithXIndex', startsWithXIndex); // 23
console.log('startsWithXIndex User', users[startsWithXIndex]); // { id: 24, name: 'Xavier', age: 29 }
console.log(
    'findIndex not found',
    users.findIndex((user) => user.name.startsWith('あ')),
); // -1

// someメソッドは、1件でも条件に当てはまればtrue
const hasTeenager = users.some((user) => user.age < 20);
if (hasTeenager) console.log('10代が存在する');

// everyメソッドは、全件条件に一致すればtrue
const allTeenager = users.every((user) => user.age < 20);
if (allTeenager) console.log('全員が10代');
