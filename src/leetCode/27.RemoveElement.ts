function removeElement(nums: number[], val: number): number {
    let ans = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            ans--;
            i--;
        }
    }
    return ans;
}
const a = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log(a);
