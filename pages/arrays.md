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

