import LinkedList from './index';

describe('testing insert head functionality of linked list', () => {
  // initalize new linked list (empty)
  let LL = new LinkedList();
  test('initalization of linked list should result in head and tail being null', () => {
    expect(LL.head && LL.tail).toBe(null);
  });
  // insert value into empty linked list
  test('insertHead of empty linked list', () => {
    LL.insertHead('firstValue');
    expect(LL.head.value).toBe('firstValue');
    expect(LL.tail.value).toBe('firstValue');
    expect(LL.head.next && LL.tail.next).toBe(null);
    expect(LL.head.value || LL.tail.value).not.toBe(null);
  });

  test('insertHead of linked list with 1 node in list', () => {
    LL.insertHead('secondValue');
    expect(LL.head.value).toBe('secondValue');
    expect(LL.tail.value).toBe('firstValue');
    expect(LL.head.next.value).toBe('firstValue');
    expect(LL.tail.next).toBe(null);
  });

  test('insertHead of linked list with multiple nodes in list', () => {
    LL.insertHead('thirdValue');
    expect(LL.head.value).toBe('thirdValue');
    expect(LL.head.next.value).toBe('secondValue');
    expect(LL.tail.value).toBe('firstValue');
    expect(LL.tail.next).toBe(null);
  });
  //   console.log('test look', LL);
});
