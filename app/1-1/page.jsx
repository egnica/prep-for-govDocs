import React from "react";

function page() {
  const objArray = [
    { id: 1, title: "Fix bug", status: "open" },
    { id: 2, title: "Add feature", status: "in-progress" },
    { id: 3, title: "Write tests", status: "open" },
  ];

  const result = {};

  const sortFuc = (obj) => {
    obj.forEach((item) => {
      if (!result[item.status]) {
        result[item.status] = [];
      }
      result[item.status].push(item);
    });
  };

  sortFuc(objArray);
  console.log(result);

  return <div>page</div>;
}

export default page;
