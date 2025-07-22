function strStr(haystack: string, needle: string): number {
    let ans = -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.startsWith(needle, i)) {
            return i;
        }
    }
    return ans;
    // indexOfの方がシンプルだった
    // return haystack.indexOf(needle);
}
