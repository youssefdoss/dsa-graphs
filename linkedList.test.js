'use strict';

// Test specifically for pivot method

const { LinkedList } = require('./linkedList');

describe('pivot', function() {
  it('works', function() {
    const list = new LinkedList([7,6,2,3,9,1,1]);
    list.pivot(5);

    expect(list.length).toEqual(7);
    expect(list.head.val).toEqual(2);
    expect(list.tail.val).toEqual(9);
    expect(list.head.next.val).toEqual(3);
    expect(list.head.next.next.val).toEqual(1);
    expect(list.head.next.next.next.val).toEqual(1);
    expect(list.head.next.next.next.next.val).toEqual(7);
    expect(list.head.next.next.next.next.next.val).toEqual(6);
    expect(list.head.next.next.next.next.next.next.val).toEqual(9);
    expect(list.head.next.next.next.next.next.next.next).toEqual(null);
  });

  it('works on empty list', function() {
    const list = new LinkedList();
    list.pivot(5);

    expect(list.length).toEqual(0);
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
  });

  it('works', function() {
    const list = new LinkedList([7,6,5,2,3,9,1,1]);
    list.pivot(5);

    expect(list.length).toEqual(8);
    expect(list.head.val).toEqual(2);
    expect(list.tail.val).toEqual(9);
    expect(list.head.next.val).toEqual(3);
    expect(list.head.next.next.val).toEqual(1);
    expect(list.head.next.next.next.val).toEqual(1);
    expect(list.head.next.next.next.next.val).toEqual(7);
    expect(list.head.next.next.next.next.next.val).toEqual(6);
    expect(list.head.next.next.next.next.next.next.val).toEqual(5);
    expect(list.head.next.next.next.next.next.next.next.val).toEqual(9);
    expect(list.head.next.next.next.next.next.next.next.next).toEqual(null);
  });
});