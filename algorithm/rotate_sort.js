// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
//   (例如， 数组[0, 1, 2, 4, 5, 6, 7] 可能变为[4, 5, 6, 7, 0, 1, 2])。
// 搜索一个给定的目标值， 如果数组中存在这个目标值， 则返回它的索引， 否则返回 - 1。
// 你可以假设数组中不存在重复的元素。
// 你的算法时间复杂度必须是 O(log n) 级别。
// 示例 1:
//   输入: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// 输出: 4
// 示例 2:
//   输入: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
// 输出: -1

let search = function (nums, target) {
  let l = 0,
    r = nums.length - 1,
    index = 0;
  let i = 1;

  while (i ) {
    console.log("r:", l, r, index, i);
    index = Math.floor((l + r) / 2);
    console.log("index", index);
    if (nums[index] === target) {
      i = -1;
    } else if (l >= r){ 
      i = -1;
      index = -1;
    }
    if (nums[index] >= nums[l]) {
      if (
        nums[l] <= target && nums[index] >= target
      ) {
        r = index - 1;
        i++;
      } else {
        l = index + 1;
        i++;
      }

    } else {
      if (
        nums[index + 1] <= target && nums[r] >= target
      ) {
        l = index + 1;
        i++;
      } else {
        r = index - 1;
        i++;
      }
    }
  }
  return index;
}
// 
// let re = search([7, 8, 9, 10, 11, 12, 13, 14, 0, 1, 2, 4, 5, 6], 4);
let re = search([3, 4, 5, 6, 7, 8, 1, 2], 2);
console.log("re is :", re)
console.log("re is :", search([], 2))
console.log("re is :", search([7, 8, 9, 10, 11, 12, 13, 14, 0, 1, 2, 4, 5, 6], 4))

