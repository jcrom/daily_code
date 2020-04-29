// 给出两个 非空 的链表用来表示两个非负的整数。 其中， 它们各自的位数是按照 逆序 的方式存储的， 并且它们的每个节点只能存储 一位 数字。

// 如果， 我们将这两个数相加起来， 则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外， 这两个数都不会以 0 开头。

// 示例：

// 输入：(2 - > 4 - > 3) + (5 - > 6 - > 4)
// 输出： 7 - > 0 - > 8
// 原因： 342 + 465 = 807
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;

}

function setVal(l, val) {
  if (!l) {
    return new ListNode(val)
  } else {

  }

}

var addTwoNumbers = function (l1, l2) {

  let flag = 1;
  let tL1 = l1,
    tL2 = l2;
  let reL = new ListNode(0);
  let parL = reL;
  let tenVal = 0;
  let v1 = 0,
    v2 = 0;
  while (flag) {

    v1 = tL1 && tL1.val || 0;
    v2 = tL2 && tL2.val || 0;


    let val = v1 + v2 + tenVal;
    tenVal = 0;
    if (val >= 10) {
      tenVal = 1;
      val = val - 10;
    }
    parL.next = new ListNode(val);
    parL = parL.next;

    tL1 = tL1 && tL1.next || null;
    tL2 = tL2 && tL2.next || null;

    if (!tL1 && !tL2) {
      if (tenVal) {
        parL.next = new ListNode(1);
      }
      flag = -1;
    }
    flag++;
  }
  return reL.next;
};



function ListNode(val) {
  this.val = val;
  this.next = null;

}

[9]
[1, 9, 9, 9, 9, 9, 9, 9, 9, 9]

let newA = function (params) {
  let reL = new ListNode(0);
  let parL = reL;
  for (let i = 0; i < params.length; i++) {
    parL.next = new ListNode(params[i]);
    parL = parL.next;
  }
  return reL.next;
}
// let a = new ListNode(0);
// let b = new ListNode(2);
// let c = new ListNode(3);
// // b.next = c;
// // a.next = b;
// // console.log(a);

// let e = new ListNode(7);
// let f = new ListNode(3);
// let g = new ListNode(9);
// // f.next = g;
// e.next = f;

let a = newA([9]);
let e = newA([1, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
console.log("+++++++++++", a, e)


let cOut = function (params) {
  let tmpP = params;
  let flag = true;
  let re = "";
  while (flag) {
    if (tmpP) {
      re += tmpP.val;
      tmpP = tmpP.next;
    } else {
      flag = false;
    }
  }
  console.log("re is :", re)
}
cOut(addTwoNumbers(a, e))