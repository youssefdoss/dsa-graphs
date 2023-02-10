"use strict";

/** Node: node for a singly linked list. */
class Node {
    val = null;
    next = null;

    constructor(val) {
        this.val = val;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    head = null;
    tail = null;
    length = 0;

    constructor(vals = []) {
        for (let val of vals) this.push(val);
    }

    /** _get(idx): retrieve node at idx. */

    _get(idx) {
        let cur = this.head;
        let count = 0;

        while (cur !== null && count !== idx) {
            count += 1;
            cur = cur.next;
        }

        return cur;
    }

    /** push(val): add new value to end of list. */

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        if (this.length === 0) this.tail = this.head;

        this.length += 1;
    }

    /** pop(): return & remove last item. */

    pop() {
        return this.removeAt(this.length - 1);
    }

    /** shift(): return & remove first item. */

    shift() {
        return this.removeAt(0);
    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        if (idx >= this.length || idx < 0) {
            throw new Error("Invalid index.");
        }

        return this._get(idx).val;
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        if (idx >= this.length || idx < 0) {
            throw new Error("Invalid index.");
        }

        let cur = this._get(idx);
        cur.val = val;
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        if (idx > this.length || idx < 0) {
            throw new Error("Invalid index.");
        }

        if (idx === 0) return this.unshift(val);
        if (idx === this.length) return this.push(val);

        // get the one before it
        let prev = this._get(idx - 1);

        let newNode = new Node(val);
        newNode.next = prev.next;
        prev.next = newNode;

        this.length += 1;
    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {
        if (idx >= this.length || idx < 0) {
            throw new Error("Invalid index.");
        }

        // special case: remove first item

        if (idx === 0) {
            let val = this.head.val;
            this.head = this.head.next;
            this.length -= 1;
            if (this.length < 2) this.tail = this.head;
            return val;
        }

        let prev = this._get(idx - 1);

        // special case: remove tail

        if (idx === this.length - 1) {
            let val = prev.next.val;
            prev.next = null;
            this.tail = prev;
            this.length -= 1;
            return val;
        }

        // normal case: remove in middle

        let val = prev.next.val;
        prev.next = prev.next.next;
        this.length -= 1;
        return val;
    }

    /** return average (mean) of list values. */

    average() {
        if (this.length === 0) return 0;

        let total = 0;
        let current = this.head;

        while (current) {
            total += current.val;
            current = current.next;
        }

        return total / this.length;
    }

    // FURTHER STUDY

    /** reverseInPlace() reverse list in place. returns undefined */

    reverseInPlace() {
        if (this.length < 2) return;

        let left = null;
        let right;
        this.tail = this.head;

        while (this.head.next != null) {

            right = this.head.next;
            this.head.next = left;
            left = this.head;
            this.head = right;
        }
        this.head.next = left;

    }

    /** pivotAroundValue() Rearrange items in linked list so that all
     * items with data less than the given value come first, and
     * items with greater than or equal to the given value come second
     *
     * pivotVal: number
     */

    pivot(pivotVal, firstHalf = [], secondHalf = []) {
        while (this.length) {
            if (this.head.val < pivotVal) {
                firstHalf.push(this.shift());
            } else {
                secondHalf.push(this.shift());
            }
        }

        while (firstHalf.length) {
            this.push(firstHalf.shift());
        }

        while (secondHalf.length) {
            this.push(secondHalf.shift());
        }
    }
}


module.exports = { LinkedList, Node };