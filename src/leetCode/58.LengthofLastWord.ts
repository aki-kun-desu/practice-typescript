function lengthOfLastWord(s: string): number {
    const result = s.replace(/\s+/g, ' ').split(' ');
    for (let i = result.length - 1; i < result.length; i--) {
        if (result[i] !== '') {
            return result[i].length;
        }
    }
    return 0;
    // よりシンプルな回答
    // let m = s.split(' ').filter((x) => x !== '');
    // return m[m.length - 1].length;
}
const s = '   fly me   to   the moon  ';
const ans = lengthOfLastWord(s);
console.log(ans);
