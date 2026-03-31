## Maps

- Also known as **dictionaries** (python), **tables** (lua), **associative arrays** (PHP)

<div align="center" class="my-5">
    <img src="https://khalilstemmler.com/img/blog/data-structures/hash-tables/hash-table.png" alt="hash table" width="400" />
    <span class="c-gray italic">An illustration of how hash tables work behind the scenes (credits: khalilstemmler.com)</span>
</div>

- A map is a data structure that lets you store data as **key-value pairs**
- You can specify the key to access the value

---
---

### Creating maps

- In javascript

```js {monaco-run} {autorun:false}
const obj = { a: 1, b: 2, c: 3 }
console.log(obj)
console.log("value of b is", obj.b)
```

- In javascript (using Map)
```js {monaco-run} {autorun:false}
const map = new Map()

map.set("a", 1)
map.set("b", 2)
map.set("c", 3)

console.log(map.get("b"))
```

---
---

### Creating maps (cont.)

- In Python

*In python, maps are referred as **dictionaries***

```python {monaco-run} {autorun:false}
dic = { "a": 1, "b": 2 }
print(dic, "value of b is", dic["b"])
```

* In Java

```java {monaco-run} {autorun:false}
Map<String, Integer> map = new HashMap<>();
map.put("a", 1);
map.put("b", 2);
System.out.println(map);
System.out.println("value of b is " + map.get("b"));
```

---
---

### Map operations

| Operation    | JS (Object)             | JS (Map)        | Python       | Java                 |
| ------------ | ----------------------- | --------------- | ------------ | -------------------- |
| Add / Update | `o["c"] = 3`            | `m.set("c", 3)` | `m["c"] = 3` | `m.put("c", 3)`      |
| Get          | `o["a"]`                | `m.get("a")`    | `m["a"]`     | `m.get("a")`         |
| Remove       | `delete o["a"]`         | `m.delete("a")` | `del m["a"]` | `m.remove("a")`      |
| Check exists | `"a" in o`              | `m.has("a")`    | `"a" in m`   | `m.containsKey("a")` |
| Size         | `Object.keys(o).length` | `m.size`        | `len(m)`     | `m.size()`           |
| Clear        | `o = {}`                | `m.clear()`     | `m.clear()`  | `m.clear()`          |

#### Activity

> Try out the operations you learned here in the previous slides' code editor!

---
---

### Map reference

- [MDN Javascript Object reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [MDN Javascript Map reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Python dict reference](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict)
- [Java Map interface Oracle reference](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)
    - [Java HashMap class Oracle reference](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html)
    - [Java TreeMap class Oracle reference](https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html)
    - Java has many implementations of Map for different needs (ordered, sorted, concurrent)
- [W3Schools HashMaps](https://www.w3schools.com/dsa/dsa_data_hashmaps.php)
    - Interactive examples
- [Hash Tables | What, Why & How to Use Them (khalilstemmler.com)](https://khalilstemmler.com/blogs/data-structures-algorithms/hash-tables/)
    - Explores how hash tables work behind the scenes!
    - More examples!

---
---

## Let's rewind!

<Quiz :question="{
  text: 'What is the best data structure to store contacts in a phonebook?',
  options: [
    { id: 1, text: 'Map' },
    { id: 2, text: 'Array' },
    { id: 3, text: 'Set' },
  ],
  answer: [1]
}" />

<Quiz :question="{
  text: 'Which data structure would you use to keep only the unique characters from a sentence?',
  options: [
    { id: 1, text: 'Map' },
    { id: 2, text: 'Array' },
    { id: 3, text: 'Set' },
  ],
  answer: [3]
}" />

---