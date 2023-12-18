---
title: JavaScript Parallel async
description: "Run several async tasks in parallel with JavaScript."
date: Dec 05 2022
categories: JavaScript, Tutorial
image: /img/javascript-parallel-async/image.jpg
author: Mirado Andria
---
You may find yourself in a situation where you have to perform several asynchronous tasks in parallel and wait for the results of each one. In this case, you can use the `Promise.all` method, which allows you to execute multiple async tasks concurrently and wait for their results.

The `Promise.all` method takes an array of promises as an input, and returns a new promise that resolves when all of the input promises have resolved, or rejects if any of the input promises have rejected.

Here is an example of how you can use the `Promise.all` method in JavaScript to run several async tasks in parallel:

``` js
const task1 = async () => {
  // Async task 1 ...
};

const task2 = async () => {
  // Async task 2 ...
};

const task3 = async () => {
  // Async task 3 ...
};

const tasks = [task1(), task2(), task3()];

const results = await Promise.all(tasks);
```

In the above example, we defined three async tasks, `task1`, `task2`, and `task3`, and added them to an array called `tasks`. Then, we used the `Promise.all` method to run all of the async tasks in the `tasks` array concurrently, and wait for their results. When all of the async tasks have resolved, the `Promise.all` promise will resolve, and we can access the results of the tasks in the `results` array.

You can learn more about the `Promise.all` method and its usage and options from the [JavaScript MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), and explore other examples and use cases for running async tasks in parallel with JavaScript.

I hope you found this useful.