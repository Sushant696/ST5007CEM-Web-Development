class stack {
  stk = [];
  top = -1;

  constructor(size) {
    this.size = size;
  }


  isEmpty() {
    return top == -1
  }

  isFull() {
    return top == size - 1;
  }

  push(data) {
    if (isFull()) {
      console.log("Stack overflow")
    }
    else {
      stk[++top] = data;
    }
  }

  pop() {
    if (isEmpty()) {
      console.log("Stack is empty")
    }
    else {
      stk[--top]
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty")
    }
    return stk[top];
  }
}


let stk = new stack(5);
stk.push(12);
stk.push(22);
stk.peek();


