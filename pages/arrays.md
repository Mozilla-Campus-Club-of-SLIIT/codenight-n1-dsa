## Arrays


> "A linear data structure that stores items at contiguous (memory) locations."
>
> - GeekForGeeks (https://www.geeksforgeeks.org/dsa/array-data-structure-guide/)

<p align="center">
    <img src="/array.png" alt="Array" width="400px" />
    <span class="c-gray italic">An array with values 2, 4, 10, 5, 15, 3 (credits: wscubetech.com)</span>
</p>

- Simplest data structure
- Also known as **lists** (Python), **vectors** (C++), and **slices** (Go)

---

### Array operations

#### Creating an array

- In javascript

```js {monaco-run} {autorun:false}
const arr = [ 2, 4, 10, 5, 15, 3 ]
console.log(arr) // print the array!
```

- In python

```python {monaco-run} {autorun:false}
arr = [ 2, 4, 10, 5, 15, 3 ]
print(arr)
```

- In java
```java {monaco-run} {autorun:false}
int arr[] = new int[] { 2, 4, 10, 5, 15, 3 };
System.out.println(Arrays.toString(arr));
```

---

#### Accessing items
Most languages have 0 based indexes. That means the first item is the 0th index!

- In javascript
```js {monaco-run} {autorun:false}
const arr = [ 2, 4, 10, 5, 15, 3 ]
console.log(arr[0]) // prints the first element of the array
```

- In python

```python {monaco-run} {autorun:false}
arr = [ 2, 4, 10, 5, 15, 3 ]
print(arr[0])
```

- In java
```java {monaco-run} {autorun:false}
int arr[] = new int[] { 2, 4, 10, 5, 15, 3 };
System.out.println(arr[0]);
```

> **Task:** What would be the index of the last item of this array?
>
> Try to print it using your language of choice 😎

---
---

### Quiz time!

We learned about languages that have 0 based indexes. But are there languages that have 1 based index? (first index is 1)?

For this quiz, you will have to do a little research 🤓

<Quiz :question="{
  text: 'Which of the following languages have 1-based indexes?',
  options: [
    { id: 1, text: 'Java' },
    { id: 2, text: 'Lua' },
    { id: 3, text: 'R' },
    { id: 4, text: 'Go' },
    { id: 5, text: 'Matlab'}
  ],
  answer: [2, 3, 5]
}" />

---
---

### Useful array references

- [Arrays in Data Structure: Types, Uses & Examples (wscubetech.com)](https://www.wscubetech.com/resources/dsa/array-data-structure)
    - includes:
        - arrays in C, C++
        - types of arrays (1 dimensional, 2 dimensional or multi-dimensional)
        - advanced operations on array (must read!)

- [MDN Javascript array reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Java Arrays class Oracle documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html)
- [Python list reference](https://docs.python.org/3/tutorial/datastructures.html) 
