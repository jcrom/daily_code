// 给定一个字符串， 请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
//   输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，
// 所以其长度为 3。
// 示例 2:
//   输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，
// 所以其长度为 1。
// 示例 3:
//   输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，
// 所以其长度为 3。
// 请注意， 你的答案必须是 子串 的长度， "pwke"
// 是一个子序列， 不是子串。

var lengthOfLongestSubstring = function (s) {
  let oldStr = [],
    nowStr = [],
    tmpI = 0;
  for (let i = 0; i < s.length; i++) {
    tmpI = nowStr.indexOf(s[i]);
    if (tmpI < 0) {
      nowStr.push(s[i]);
    } else {
      // console.log("old, now:", oldStr, nowStr)
      if (oldStr.length < nowStr.length) {
        oldStr = nowStr.concat([]);
      }
      nowStr = nowStr.slice(tmpI+1);
      nowStr.push(s[i]);
    }
  }
  console.log("nowStr:", oldStr.join(), nowStr.join())
  return oldStr.length < nowStr.length ? nowStr.length : oldStr.length;
};


// let re = lengthOfLongestSubstring("abcabcbb");

console.log("re1:", lengthOfLongestSubstring("abcabcbb"))
console.log("re1:", lengthOfLongestSubstring("bbbbb"))
console.log("re2:", lengthOfLongestSubstring("aab"))
console.log("re3:", lengthOfLongestSubstring("pwwkew"))