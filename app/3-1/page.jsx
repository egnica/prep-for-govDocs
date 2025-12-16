import React from "react";

function page() {
  const documents = [
    {
      id: "1",
      userId: "userA",
      status: "approved",
      submittedAt: "2025-11-20T10:00:00Z",
    },
    {
      id: "2",
      userId: "userA",
      status: "pending",
      submittedAt: "2025-11-25T12:00:00Z",
    },
    {
      id: "3",
      userId: "userB",
      status: "approved",
      submittedAt: "2025-11-01T09:00:00Z",
    },
    {
      id: "4",
      userId: "userA",
      status: "pending",
      submittedAt: "2025-12-13T12:00:00Z",
    },
    {
      id: "5",
      userId: "userA",
      status: "approved",
      submittedAt: "2025-12-10T12:00:00Z",
    },
  ];

  const today = new Date();
  const thirtyDaysAgo = new Date(today);
  thirtyDaysAgo.setDate(today.getDate() - 30);

  console.log(thirtyDaysAgo);

  const filtered = documents.filter(
    (item) => new Date(item.submittedAt) > thirtyDaysAgo
  );

  const filteredObject = (obj) => {
    const results = {};
    obj.forEach((item) => {
      if (!results[item.userId]) {
        results[item.userId] = { docsTotal: 0, numApproved: 0, rating: 0 };
      }
      results[item.userId].docsTotal += 1;
      if (item.status == "approved") results[item.userId].numApproved += 1;
    });

    Object.values(results).forEach((item) => {
      item.rating = item.numApproved / item.docsTotal;
    });
    return results;
  };
  console.log(filteredObject(filtered));

  return <div>page</div>;
}

export default page;
