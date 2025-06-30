import { throwPromise, throwSomething } from './src/throw-promise';

const main = () => {
    try {
        throwPromise();
    } catch (promise) {
        if (promise instanceof Promise) {
            (promise as Promise<string>).then((val) => {
                console.log('2.解決');
                console.log(`3.${val}`);
            });
        }
        console.log('1.最初はこっち');
    }
};
main();
