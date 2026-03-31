
## Searching algorithms

Searching is an essential task, whether it's finding a contact in your phone, a product in an online store, or a record in a large database.
Different searching algorithms are used depending on the size of the data and the speed required.

### Linear search

- The simplest searching algorithm!
- Not ideal for large data sets

As the name suggests, this algorithm starts from the beginning and checks each entry one by one until it finds the result.
This can be very slow! (We are going through everything!!!)

- In javascript

```js {monaco-run} {autorun:false}
const exco = [ "Sadeesha", "Dasun", "Bishru", "Asath", "Seniru", "Leena", "Lakshi" ]
const searchFor = "Seniru"

for (let i = 0; i < exco.length; i++) { // go through every member
    if __________________ { // fill in the blanks to find 'em
        console.log("Found", searchFor, "at", i)
        break // BREAAAAK!! We can stop after finding them.
    }
}
```

---
---

### Searching algorithms: Linear search

- In python

```python {monaco-run} {autorun:false}
exco = [ "Sadeesha", "Dasun", "Bishru", "Asath", "Seniru", "Leena", "Lakshi" ]
search_for = "Seniru"

for i in range(len(exco)): # go through every member
    if __________________ # fill in the blanks to find 'em
        print("Found", search_for, "at", i)
        break # BREAAAAK!! We can stop after finding them.
```

- In java
```java {monaco-run} {autorun:false}
String[] exco = new String[] { "Sadeesha", "Dasun", "Bishru", "Asath", "Seniru", "Leena", "Lakshi" };
String searchFor = "Seniru";

for (int i = 0; i < exco.length; i++) { // go through every member
    if __________________ { // fill in the blanks to find 'em
        System.out.println("Found " + searchFor + " at " + i);
        break; // BREAAAAK!! We can stop after finding them.
    }
}
```

---
---

### Other ways to search

#### Binary search

Binary search works under the **divide and conquer principle**. 
It takes a **sorted** list, and performs the search by **dividing** the array into smaller parts. Making it wayyyyy faster

We are not going to go through the implementation details now. However, if you are interested, check [this](https://www.w3schools.com/dsa/dsa_algo_binarysearch.php). Feel free to ask us too!

#### Built in methods to perform searches

Practically, we rarely implement any of these algorithms by hand. Most of these algorithms comes built in with most programming languages.

For example,

- In javascript

```js {monaco-run} {autorun:false}
const exco = [ "Sadeesha", "Dasun", "Bishru", "Asath", "Seniru", "Leena", "Lakshi" ]
const searchFor = "Seniru"
console.log("Found", searchFor, "at", exco.indexOf(searchFor))
```

> **These methods help with searching too:**
>
> [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`findLast()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast), [`findLastIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex), [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), and [`lastIndexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

---
---

#### Built in methods to perform searches

- In python

```python {monaco-run} {autorun:false}
exco = [ "Sadeesha", "Dasun", "Bishru", "Asath", "Seniru", "Leena", "Lakshi" ]
search_for = "Seniru"
print("Found", search_for, "at", exco.index(search_for))
```

> Use `in` operator to check if a value exists. (eg: `"Seniru" in exco`)

- In java

```java {monaco-run} {autorun:false}
ArrayList<String> exco = new ArrayList<String>(Arrays.asList(
    "Sadeesha", "Dasun", "Bishru", "Asath", "Seniru", "Leena", "Lakshi"
));

String searchFor = "Seniru";

System.out.println("Found " + searchFor + " at " + exco.indexOf(searchFor));
```

> **These methods help with searching too:**
>
> [`indexOf()`](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html#indexOf-java.lang.Object-), [`lastIndexOf()`](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html#lastIndexOf-java.lang.Object-), [`contains()`](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html#contains-java.lang.Object-)

