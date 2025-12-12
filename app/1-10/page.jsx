import React from "react";

function page() {
  const employees = [
    { id: 101, name: "Alice", department: "Engineering" },
    { id: 104, name: "Dana", department: "Marketing" },
    { id: 103, name: "Charlie", department: "Engineering" },
    { id: 102, name: "Bob", department: "Sales" },
  ];

  const userLookUp = (obj) => {
    const result = {};
    obj.forEach((item) => {
      result[item.id] = item;
    });
    return result;
  };
  console.log(userLookUp(employees));

  return <div>page</div>;
}

export default page;
