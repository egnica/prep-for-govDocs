import React from "react";

export default function page() {
  // Finding duplications and returning an array of functions without the duplications

  const events = [
    { id: "e1", userId: "A", type: "click", value: 0 },
    { id: "e1", userId: "A", type: "click", value: 0 }, // duplicate
    { id: "e2", userId: "A", type: "purchase", value: 50 },
    { id: "e3", userId: "B", type: "view", value: 0 },
    { id: "e4", userId: "B", type: "purchase", value: 30 },
    { id: "e4", userId: "B", type: "purchase", value: 30 }, // duplicate
  ];

  const filterFunction = (obj) => {
    const filtered = [];
    const seen = {};

    for (let i = 0; i < obj.length; i++) {
      const id = obj[i].id;

      if (seen[id] !== true) {
        seen[id] = true;
        filtered.push(obj[i]);
      }
    }

    return filtered;
  };

  console.log(filterFunction(events));
  return <div>page</div>;
}
