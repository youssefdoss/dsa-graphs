"use strict";

const sortSortedLinkedList = require("./sortSortedLinkedLists.js")
const { LinkedList, Node } = require("./linkedList.js")

describe("sortSortedLinkedList", function () {
    it("works for two empty lists", function () {
        const listA = new LinkedList();
        const listB = new LinkedList();

        const newList = sortSortedLinkedList(listA, listB);

        expect(newList.length).toEqual(0);
        expect(newList.head).toEqual(null);
        expect(newList.tail).toEqual(null);
    });

    it("works for two offset lists", function () {
        const listA = new LinkedList([1, 3, 5]);
        const listB = new LinkedList([2, 4, 6]);

        const newList = sortSortedLinkedList(listA, listB);

        expect(newList.length).toEqual(6);
        expect(newList.head.val).toEqual(1);
        expect(newList.tail.val).toEqual(6);
        expect(newList.head.next.val).toEqual(2);
        expect(newList.head.next.next.val).toEqual(3);
        expect(newList.head.next.next.next.val).toEqual(4);
        expect(newList.head.next.next.next.next.val).toEqual(5);
        expect(newList.head.next.next.next.next.next.val).toEqual(6);
        expect(newList.head.next.next.next.next.next.next).toEqual(null);
    });

    it("works for lists with overlapping values", function () {
        const listA = new LinkedList([1, 3, 5]);
        const listB = new LinkedList([2, 3, 4]);

        const newList = sortSortedLinkedList(listA, listB);

        expect(newList.length).toEqual(6);
        expect(newList.head.val).toEqual(1);
        expect(newList.tail.val).toEqual(5);
        expect(newList.head.next.val).toEqual(2);
        expect(newList.head.next.next.val).toEqual(3);
        expect(newList.head.next.next.next.val).toEqual(3);
        expect(newList.head.next.next.next.next.val).toEqual(4);
        expect(newList.head.next.next.next.next.next.val).toEqual(5);
        expect(newList.head.next.next.next.next.next.next).toEqual(null);
    });

    it("works for non-overlapping lists", function () {
        const listA = new LinkedList([1, 2, 3]);
        const listB = new LinkedList([4, 5, 6]);

        const newList = sortSortedLinkedList(listA, listB);

        expect(newList.length).toEqual(6);
        expect(newList.head.val).toEqual(1);
        expect(newList.tail.val).toEqual(6);
        expect(newList.head.next.val).toEqual(2);
        expect(newList.head.next.next.val).toEqual(3);
        expect(newList.head.next.next.next.val).toEqual(4);
        expect(newList.head.next.next.next.next.val).toEqual(5);
        expect(newList.head.next.next.next.next.next.val).toEqual(6);
        expect(newList.head.next.next.next.next.next.next).toEqual(null);
    });

    it("works for mismatch list", function () {
        const listA = new LinkedList([1, 3, 5]);
        const listB = new LinkedList([2]);

        const newList = sortSortedLinkedList(listA, listB);

        expect(newList.length).toEqual(4);
        expect(newList.head.val).toEqual(1);
        expect(newList.tail.val).toEqual(5);
        expect(newList.head.next.val).toEqual(2);
        expect(newList.head.next.next.val).toEqual(3);
        expect(newList.head.next.next.next.val).toEqual(5);
        expect(newList.head.next.next.next.next).toEqual(null);
    });
});
