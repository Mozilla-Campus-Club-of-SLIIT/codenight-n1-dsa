## Recursion

- Recursion is when a function calls itself.
- Used in divide and conquer problems, backtracking, traversals, etc.

[Search “recursion”](https://www.google.com/search?q=recursion)

2 things to consider when writing a recursive function

- **Recursive case**: the function calling itself
- **Base case**: the condition that stops the recursion and prevents infinite calls

Let's write a function to sum first `n` numbers

`sumn(5)` is the sum of first 5 numbers *(5 + 4 + 3 + 2 + 1)*

````md magic-move
```python
sumn(5)
```
```python {*|2}
= 5 
    + sumn(4)
```
```python {2,3|3}
= 5 
    + 4
        + sumn(3)
```
```python {3,4|4}
= 5
    + 4 
        + 3
            + sumn(2)
```
```python {4,5|5}
= 5
    + 4 
        + 3
            + 2
                + sumn(1)
```
```python {5}
= 5
    + 4 
        + 3
            + 2
                + 1
```
```python
= 5 + 4 + 3 + 2 + 1
```
```python
= 15
```
````

---
---

### Recursion (implementation examples)

- In javascript

```js {monaco-run} {autorun:false}
function sumn(n) {
    if (n < 0) throw new Error("Positive integers only")
    // base case (notice how sumn(1) returned 1 without calling itself in the previous slide)
    if (n <= 1) return n 
    return n 
        + sumn(n - 1) // recursive call
}

console.log(sumn(5))
```

- In python

```python {monaco-run} {autorun:false}
def sumn(n):
    if n < 0: raise Exception("Positive integers only")
    # base case (notice how sumn(1) returned 1 without calling itself in the previous slide)
    if n <= 1: return n
    return n + sumn(n - 1) # recursive call

print(sumn(5))
```

---
---

### Recursion (implementation examples)

- In java *(This example can’t be run here, but you can try it locally)*

```java
public class Main {

    public static int sumn(int n) throws Exception {
        if (n < 0) throw new Exception("Positive integers only");
        // base case (notice how sumn(1) returned 1 without calling itself in the previous slide)
        if (n <= 1) return n;
        return n
            + sumn(n - 1); // recursive call
    }

    public static void main(String[] args) throws Exception {
        System.out.println(sumn(5));
    }

}
```

