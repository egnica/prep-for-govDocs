import React from "react";

function page() {
  const requests = [
    { id: 1, userId: "A", status: "completed", price: 50 },
    { id: 2, userId: "A", status: "open", price: 30 },
    { id: 3, userId: "B", status: "completed", price: 80 },
    { id: 4, userId: "A", status: "completed", price: 20 },
    { id: 5, userId: "B", status: "canceled", price: 100 },
  ];

  const userFunction = (obj) => {
    const result = {};
    obj.forEach((item) => {
      if (!result[item.userId]) {
        result[item.userId] = {
          totalRequests: 0,
          completedRequests: 0,
          totalRevenue: 0,
        };
      }
      result[item.userId].totalRequests += 1;
      if (item.status == "completed") {
        result[item.userId].completedRequests += 1;
        result[item.userId].totalRevenue += item.price;
      }
    });
    return result;
  };
  console.log(userFunction(requests));

  return <div>page</div>;
}

export default page;
