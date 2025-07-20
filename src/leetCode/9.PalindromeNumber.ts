function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    const arr = x.toString().split('');
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) return false;
    }
    return true;
}
