// 整数の配列 nums が減らない順にソートされている場合、
// 各要素が一意に一度だけ現れるように、
// 重複をその場で取り除く。要素の相対順序は同じに保つ。
// そして nums に含まれる一意な要素の数を返す。

function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}
