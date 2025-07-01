const returnPromise = () => {
    return new Promise<string>((resolve, reject) => {
        if (Math.random() >= 0.5) {
            resolve('完了');
        }
        reject('失敗');
    });
};

const promiseMain = async () => {
    try {
        const data = await returnPromise();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
promiseMain();
