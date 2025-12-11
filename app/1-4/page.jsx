import React from "react";

function page() {
  const orders = [
    { id: 1, customer: "Alice", total: 25, status: "shipped" },
    { id: 2, customer: "Bob", total: 10, status: "pending" },
    { id: 3, customer: "Alice", total: 40, status: "shipped" },
    { id: 4, customer: "Charlie", total: 15, status: "cancelled" },
    { id: 5, customer: "Bob", total: 20, status: "pending" },
  ];

  const result = {};

  const countStatus = (obj) => {
    obj.forEach((item) => {
      if (!result[item.status]) {
        result[item.status] = 0;
      }
      result[item.status] += 1;
    });
  };

  countStatus(orders);
  console.log(result);

  return <div>page</div>;
}

export default page;
