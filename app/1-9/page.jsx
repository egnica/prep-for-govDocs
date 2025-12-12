import React from "react";

function page() {
  const products = [
    { id: 1, name: "Laptop", price: 1200, tags: ["electronics", "computers"] },
    { id: 2, name: "Desk", price: 300, tags: ["furniture"] },
    { id: 3, name: "Monitor", price: 200, tags: ["electronics"] },
    { id: 4, name: "Chair", price: 150, tags: ["furniture", "office"] },
  ];

  // return an object counting how many times each tag appears across all products.

  const tagCounts = (obj) => {
    const results = {};

    Object.values(products).forEach((item) => {
      item.tags.forEach((tag) => {
        if (!results[tag]) {
          results[tag] = 0;
        }
        results[tag] += 1;
      });
    });
    return results;
  };
  console.log(tagCounts(products));

  return <div>page</div>;
}

export default page;
