## Sets

A data structure designed to store unique elements!

### Creating sets

- In javascript

```js {monaco-run} {autorun:false}
const set = new Set([ 1, 2, 2, 3 ])
console.log(set) // notice how it only has uninque elements only, no duplicates!
```

- In python

```python {monaco-run} {autorun:false}
s = set([ 1, 2, 3, 3 ])
print(s)
```

- In java

```java {monaco-run} {autorun:false}
Set<Integer> set = new HashSet<>(Arrays.asList(1, 2, 2, 3));
System.out.println(set);
```

---
---

### Set operations

|              | Javascript           | Python          | Java            |
| ------------ | -------------------- | --------------- | --------------- |
| Add          | `s.add(4)`           | `s.add(4)`      | `s.add(4)`      |
| Remove       | `s.delete(2)`        | `s.remove(2)`   | `s.remove(2)`   |
| Check exists | `s.has(2)`           | `2 in s`        | `s.contains(2)` |
| Size         | `s.size`             | `len(s)`        | `s.size()`      |
| Clear        | `s.clear()`          | `s.clear()`     | `s.clear()`     |

#### Activity

> Try out the operations you learned here in the previous slide's code editor!
>
> You can try inserting duplicate values and see how it behaves

---
---
### Set reference

- [MDN Javascript set reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
    - Highlight other cool things you could do with sets!
- [Python set reference](https://docs.python.org/3/tutorial/datastructures.html#sets)
- [Java Set interface Oracle reference](https://docs.oracle.com/javase/8/docs/api/java/util/Set.html)
    - [Java HashSet class Oracle reference](https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html)
    - Java has many more implementation of Sets!
