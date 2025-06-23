import { user, UserDetail } from './consts/user-detail';

// keysメソッドはオブジェクトのキーを配列で取得するメソッド
const keys = Object.keys(user);
console.log('Object.keys()', keys);
const newUser = {
    newId: 10,
    user: user,
};
console.log(newUser);
// オブジェクトの中にオブジェクトがある場合でも同じ
console.log(Object.keys(newUser)); // [ 'newId', 'user' ]

// valuesメソッドはオブジェクトの値を配列で取得するメソッド
const vals = Object.values(user);
console.log('Object.values()', vals);

// entriesメソッドはオブジェクトのキー：値をタプル型の配列で返す
const entries = Object.entries(user);
console.log('Object.entries()', entries);
entries.forEach(([key, value]) => {
    console.log(`key: ${key}, value: ${value}`);
});
