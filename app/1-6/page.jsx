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
  let topCustomer = { customer: null, total: 0 };

  const getTopCustomer = (obj) => {
    obj.forEach((item) => {
      const customer = item.customer;
      if (!result[customer]) {
        result[customer] = 0;
      }
      result[customer] += item.total;
    });

    Object.entries(result).forEach(([customer, total]) => {
      if (total > topCustomer.total) {
        topCustomer = { customer, total };
      }
    });
  };

  getTopCustomer(orders);

  console.log(topCustomer);

  return <div>page</div>;
}

export default page;
