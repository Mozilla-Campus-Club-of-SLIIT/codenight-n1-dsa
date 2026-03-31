## Stacks

This is a **stack** of pancakes 🤤👇

<div align="center">
    <img src="/pancakes.jpeg" width="150" />
    <span class="c-gray italic">
    A stack of vegan buttermilk pancakes because I want to make you hungry (credits: lovingitvegan.com)</span>
</div>

Stack works on the **LIFO (Last-In First Out)** principle.

> I (Seniru) eat pancakes everyday. They have lots of proteins (I put banana, milk and some other magic stuff)
> I stack them like this to eat faster.
>
> When I eat, I start from the top.
>
> To reach the first pancake I placed, I have to eat all the ones above it first.

---
---

### Stacks: What and why?

Stacks have 2 main operations
- **push**: Add an item to the top of the stack
- **pop**: Remove (and retrieve) an item from the top of the stack

<div align="center" class="m-2">
    <img src="/stack-operations.png" width="200" />
    <span class="c-gray italic">Stack operations (credits: Maitri Hingu | Medium)</span>
</div>


#### Where is this used practically?

- [Undo/Redo operation](https://medium.com/@sandeepkella23/how-does-undo-work-understanding-the-mechanics-behind-ctrl-z-0369907a41d2)
- Browser forward and backward options (similar mechanism to undo/redo)
- Maze solving ([Rat in a Maze | Backtracking using Stack](https://www.geeksforgeeks.org/dsa/rat-in-a-maze-backtracking-using-stack/))

> **Did you know?**
>
> Stack is a fundemantal data structure in low level programming. We don't dive deep into that here.
> But feel free to have a chat if you want!

---
---

### Stack operations

- In javascript

We can use javascript's built in array to create a stack

```js {monaco-run} {autorun:false}
const stack = [ 1, 2, 3 ]
stack.pop() // removes 3 and returns it
stack.push(4)
console.log(stack) // play around with different order of operations and see the output
```

- In python

We can use python's built in list to create a stack

```python {monaco-run} {autorun:false}
stack = [ 1, 2, 3 ]
stack.pop() # removes 3 and returns it
stack.append(4)
print(stack) # play around with different order of operations and see the output
```
---
---

### Stack operations (cont)

- In java

```java {monaco-run} {autorun:false}
Stack<Integer> stack = new Stack<Integer>();
stack.push(1);
stack.push(2);
stack.push(3);

stack.pop(); // removes 3 and returns it
stack.push(4);

System.out.println(stack);
```

> Feel free to play around with different order of operations and values!

### Useful references

- [Oracle reference for Stack class](https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html)
---

### Stack operations (cont)

<StructureVisualizer
    :name="'stack'"
    :initialCode="`stack.push(5)`"
    :actions="['stack.push(1)', 'stack.pop()', 'console.log(stack)', 'console.log(stack.length)']"
/>

