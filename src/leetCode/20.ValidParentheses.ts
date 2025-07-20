function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false;
    const arr = s.split('');
    const open = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
            open.push(arr[i]);
        } else if (
            (arr[i] === ')' && open[open.length - 1] === '(') ||
            (arr[i] === ']' && open[open.length - 1] === '[') ||
            (arr[i] === '}' && open[open.length - 1] === '{')
        ) {
            open.pop();
        } else {
            return false;
        }
    }
    return open.length === 0;
}
