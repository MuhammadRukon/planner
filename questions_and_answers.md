<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>- A: `{}`</b></summary>
<p>

#### Answer: ?

<i>in browser JS environment, objects assigned in variables without datatype such as let, const and var create property in the global object. This isn't same as regular variable declaration in Node.js. In Node.js, you will get "ReferenceError: greetign is not defined".</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>- C: `"12"`</b></summary>
<p>

#### Answer: ?

<i>when we try to add a number with a string, it doesnt add but concatenates the two inputs and returns a concatenated string.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>- A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>We havent modified the "food" array, rather declared a variable "info" that is initialized with an object that holds the first value of "food" array as the "favouriteFoods" properties value.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>- B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>Since we are not providing any arguments for "name" parameter, it becomes undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>- C: 3</b></summary>
<p>

#### Answer: ?

<i>since the first value is of "nums" array is 0 (falsy), the compiler avoids getting into the if block, hence the value of "count" stays 0. after that, all the values are truthy and count is incremented with 1 each time the compiler gets into the if block. </i>

</p>
</details>
