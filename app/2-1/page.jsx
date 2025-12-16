import React from "react";

function page() {
  // "https://jsonplaceholder.typicode.com/todos"

  //   fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
  //     console.log(res, res.json)
  //   );

  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => {
  //       console.log("before json, bodyUsed:", response.bodyUsed);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("data type:", Array.isArray(data) ? "array" : typeof data);
  //       console.log("first item:", data[0]);
  //     });
  //   async function loadGroupTodos() {
  //     console.log("start");

  //     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     console.log("after fetch, bodyUsed:", response.bodyUsed);

  //     const data = await response.json();
  //     console.log("after json, bodyUsed:", response.bodyUsed);

  //     console.log("first item:", data[0]);
  //   }

  //   loadGroupTodos();
  //   async function loadAndGroupTodos() {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const todos = await response.json();

  //     const result = {};

  //     todos.forEach((item) => {
  //       if (!result[item.completed]) {
  //         result[item.completed] = 0;
  //       }
  //       result[item.completed] += 1;
  //     });
  //     console.log(result)
  //   }

  // loadAndGroupTodos()

  async function loadTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    return todos;
  }

  async function main() {
    const todos = await loadTodos();
    console.log(todos);
  }
  main();

  return <div>page</div>;
}

export default page;
