import React from "react";

function page() {
  const orders = [
    { id: 1, customer: "Alice", total: 25, status: "shipped" },
    { id: 2, customer: "Bob", total: 10, status: "pending" },
    { id: 3, customer: "Alice", total: 40, status: "shipped" },
    { id: 4, customer: "Charlie", total: 15, status: "cancelled" },
  ];

  let result = {};
  const getShippedOrderSummaries = (orders) => {
    orders.forEach((item) => {
      if (!result[item.status]) {
        result[item.status] = [];
      }
      result[item.status].push(item);
    });
  };

  getShippedOrderSummaries(orders);
  console.log(result);

  const newArray = result.shipped;
  console.log(newArray);
  return <div>page</div>;
}

export default page;
