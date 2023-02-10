"use strict";

const { LinkedList } = require("./linkedList.js");

function sortSortedLinkedList(listA, listB) {
    // compare listA.head to listB.head
    // add which ever one is lower to new list
    // do this while both lists have nodes in them
    // once one runs out, add remaining nodes in other to new list
    const sortedList = new LinkedList();

    while (listA.length && listB.length) {
        if (listA.head.val < listB.head.val) {
            sortedList.push(listA.shift());
        } else if (listA.head.val >= listB.head.val) {
            sortedList.push(listB.shift());
        }
    }

    debugger;

    if (listA.length) {
        sortedList.tail.next = listA.head;
        sortedList.tail = listA.tail;
        sortedList.length += listA.length;
    }

    if (listB.length) {
        sortedList.tail.next = listB.head;
        sortedList.tail = listB.tail;
        sortedList.length += listB.length;
    }

    debugger;
    return sortedList;
}


module.exports = sortSortedLinkedList;