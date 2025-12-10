import React from "react";

function page() {
  const orders = [
    { id: 1, customer: "Alice", total: 25, status: "shipped" },
    { id: 2, customer: "Bob", total: 10, status: "pending" },
    { id: 3, customer: "Alice", total: 40, status: "shipped" },
    { id: 4, customer: "Charlie", total: 15, status: "cancelled" },
  ];

  let result = {};
  const getTotalSpent = (orders) => {
    orders.forEach((item) => {
      let customer = item.customer;

      if (!result[customer]) {
        result[customer] = 0;
      }
      result[customer] = result[customer] + item.total;
    });
  };

  getTotalSpent(orders);
  console.log(result);

  return <div>page</div>;
}

export default page;
