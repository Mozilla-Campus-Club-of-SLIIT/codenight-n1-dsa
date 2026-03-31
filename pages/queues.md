## Queues

This is a queue 🦊👇

<div align="center" class="m-5">
    <img src="/queue-generic.png" alt="A queue" width="400" />
    <span class="c-gray italic">A queue! (credits: codefinity.com)</span>
</div>

A queue is like a line of people waiting. First one in line goes first, last one waits. This is **FIFO (First In, First Out)**

#### When is this useful?

- **Printer jobs**: Documents are printed in the order you send them
- **Supermarket checkout**: People are served in the order they arrive
- **Task scheduling**: Computers run tasks in the order they’re added

Basically, anytime the inseration order matters, and you want the first thing added to be handled first

---
---

### Queue operations

Queues have 2 basic operations

- **enqueue:** insert a new element to the back of the queue
- **dequeue:** remove an element from the front of the queue
- **peak:** see what is the front-most element in the queue

<br />

- In javascript

We can use a JavaScript array with built-in methods to act like a queue

```js {monaco-run} {autorun:false}
// people lining up at a ticket counter
const queue = ["A", "B", "C"]

// D joins the line (enqueue)
queue.push("D")
console.log("D joins:", queue)

// first person gets served and leaves (dequeue)
const served = queue.shift()
console.log(served, "served")
console.log("remaining:", queue)
```

---
---

### Queue operations (cont)

- In python

There are many ways you can implement a queue in python. Some of them are,
- built in `list` (we have already learned this!)
- `collections.deque` (faster)
- Implementations in the `queue` module

We'll use `collections.deque` for this demonstration

```python {monaco-run} {autorun:false}
# people lining up at a ticket counter
from collections import deque

queue = deque(["A", "B", "C"])

# D joins the line (enqueue)
queue.append("D")
print("D joins:", list(queue))

# first person gets served and leaves (dequeue)
served = queue.popleft()
print(served, "served")
print("remaining:", list(queue))
```

---
---

### Queue operations (cont)

- In java

Java has many ways too! Check [Oracle reference documentation of Queue interface](https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html) to see all the possibilities

```java {monaco-run} {autorun:false}
ArrayDeque<String> queue = new ArrayDeque<>();
queue.add("A");
queue.add("B");
queue.add("C");

// D joins the line (enqueue)
queue.add("D");
System.out.println("D joins: " + queue);

// first person gets served and leaves (dequeue)
String served = queue.poll();
System.out.println(served + " served");
System.out.println("remaining: " + queue);
```

---
---
### Queue operations (cont)

<StructureVisualizer
    :name="'queue'"
    :initialCode="`queue.push(5)`"
    :actions="['queue.push(1)', 'queue.shift()', 'console.log(queue)', 'console.log(queue.length)']"
/>

---
---

### Useful queue references

- [Queues W3Schools](https://www.w3schools.com/dsa/dsa_data_queues.php)
- [Queues GeekForGeeks](https://www.geeksforgeeks.org/dsa/queue-data-structure/)
- [Queue realpython](https://realpython.com/ref/stdlib/queue/)
    - Shows different standard library implementation of queue and their use cases
- [Python `collections.deque` object reference](https://docs.python.org/3/library/collections.html#collections.deque)
- [Python `queue` module reference](https://docs.python.org/3/library/queue.html)
- [Oracle reference documentation of Queue interface](https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html)
---