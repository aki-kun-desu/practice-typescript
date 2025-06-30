export const throwSomething = () => {
    throw 'Throw!!';
};

export const throwPromise = () => {
    throw new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('OK!');
        }, 2000);
    });
};
