function romanToInt(s: string): number {
    const romanNum: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const arr = s.split('');
    let ans = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (
            (i !== arr.length && arr[i] === 'I' && (arr[i + 1] === 'V' || arr[i + 1] === 'X')) ||
            (arr[i] === 'X' && (arr[i + 1] === 'L' || arr[i + 1] === 'C')) ||
            (arr[i] === 'C' && (arr[i + 1] === 'D' || arr[i + 1] === 'M'))
        ) {
            ans += romanNum[arr[i + 1]] - romanNum[arr[i]];
            ++i;
        } else {
            ans += romanNum[arr[i]];
        }
    }
    return ans;
}
