
## Sorting algorithms

> Sorting refers to ordering data in an increasing or decreasing manner according to some linear relationship among the data items.
>
> - wikipedia

### Why sorting matters?

- Present a list in ascending or descending order (students' list sorted by name)
- To improve search speed (remember binary search?)

### Popular searching algorithms

- [Bubble sort](https://www.w3schools.com/dsa/dsa_algo_bubblesort.php)
- [Selection sort](https://www.w3schools.com/dsa/dsa_algo_selectionsort.php)
- [Insertion sort](https://www.w3schools.com/dsa/dsa_algo_insertionsort.php)
- [Quick sort](https://www.w3schools.com/dsa/dsa_algo_quicksort.php)
- [Counting sort](https://www.w3schools.com/dsa/dsa_algo_countingsort.php)
- [Radix sort](https://www.w3schools.com/dsa/dsa_algo_radixsort.php)
- [Merge sort](https://www.w3schools.com/dsa/dsa_algo_mergesort.php)

> Some of these are fun! I suggest you check them in a leisurely time. There are interactive elements in the above links to help you understand

---
---

### Meme sorting algorithms

> Hey, we learned a lot so far! Sometimes distracting a little bit with reels or memes is a good idea ;)

<div class="flex items-center gap-3">
    <iframe width="315" height="380"
        src="https://www.youtube.com/embed/Ry8VuK9Js6g"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
    </iframe>
    <iframe width="315" height="380"
        src="https://www.youtube.com/embed/GX4VtE84nh8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
    </iframe>
    <iframe width="315" height="380"
        src="https://www.youtube.com/embed/IhS9eEOFd10"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
    </iframe>
</div>

---
---

### Implement sorting

We got to know many sorting algorithms so far. But practically, we never implement them by hand. Everything is already done for you, by the standard library!

- In javascript
```js {monaco-run} {autorun:false}
const arr = [ 5, 78, 3, 1, 69, 84, 67, 95 ]
arr.sort()
console.log(arr)
```

- In python
```python {monaco-run} {autorun:false}
arr = [ 5, 78, 3, 1, 69, 84, 67, 95 ]
arr.sort()
print(arr)
```

- In java
```java {monaco-run} {autorun:false}
ArrayList<Integer> arr = new ArrayList<Integer>(Arrays.asList(5, 78, 3, 1, 69, 84, 67, 95));
arr.sort(null); // why do we use null? 🤔
System.out.println(arr);
```