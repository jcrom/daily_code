// 给定一个整数数组 nums 和一个目标值 target， 请你在该数组中找出和为目标值的那 两个 整数， 并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。 但是， 数组中同一个元素不能使用两遍。
// 示例:
//   给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回[0, 1]

// 暴力解法， 便利查找， 复杂度O(n2)
var twoSum = function (nums, target) {
  for (let l = 0; l < nums.length - 1; l++) {
    for (let r = i + 1; r < nums.length; r++) {
      if ((nums[l] + nums[r]) === target) {
        return [l, r];
      }
    }
  }
  return [];
};

// console.log("result is :", twoSum([2, 7, 11, 15], 9))
// console.log("result is :", twoSum([3, 2, 4], 6))


// hashmap 查找，空间换时间， O(n)
// 时间复杂度： O(n) O(n)，
// 我们把包含有 nn 个元素的列表遍历两次。 由于哈希表将查找时间缩短到 O(1) O(1)， 所以时间复杂度为 O(n) O(n)。

// 空间复杂度： O(n) O(n)，
// 所需的额外空间取决于哈希表中存储的元素数量， 该表中存储了 nn 个元素。


var twoSumHash2 = function (nums, target) {

  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let reVal = target - nums[i];
    let reIndex = hashMap.get(reVal);
    console.log("i:", i, target, reVal, reIndex)
    if (reIndex && reIndex != i) {
      return [i, reIndex]
    }
  }
};

// console.log("result is :", twoSumHash2([2, 7, 11, 15], 9))
// console.log("result is :", twoSumHash2([1, 3, 4, 2],6))

// 进一步优化
var twoSum = function (nums, target) {
  let hashMap = new Map(),
    reVal = 0,
    reIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    reVal = target - nums[i];
    reIndex = hashMap.get(reVal);
    if (reIndex !== undefined && reIndex != i) {
      return [i, reIndex]
    }
    hashMap.set(nums[i], i);
  }
};
// console.log("result is :", twoSumHash([1, 3, 4, 2], 6))
console.log("result is :", twoSumHash([2, 7, 11, 15], 9))
// console.log("result is :", twoSumHash([3, 3],6))