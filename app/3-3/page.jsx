import React from "react";

function page() {
  const activities = [
    { userId: "A", type: "login", success: true },
    { userId: "A", type: "upload", success: false },
    { userId: "B", type: "download", success: true },
    { userId: "A", type: "download", success: true },
    { userId: "B", type: "login", success: false },
  ];

  const activityFunction = (obj) => {
    const results = {};
    obj.forEach((item) => {
      let userId = item.userId;
      if (!results[item.userId]) {
        results[item.userId] = {
          totalActivities: 0,
          successfulActivities: 0,
          activityBreakdown: {},
        };
      }

      results[userId].totalActivities += 1;
      if (item.success) {
        results[userId].successfulActivities += 1;
      }

      //   if (!results[userId].activityBreakdown[item.type]) {
      //     results[userId].activityBreakdown[item.type] = 0;
      //   }

      //   results[userId].activityBreakdown[item.type] += 1;

      // ?? 0 initializes the value 0 to the value
      results[userId].activityBreakdown[item.type] =
        (results[userId].activityBreakdown[item.type] ?? 0) + 1;
    });
    return results;
  };
  console.log(activityFunction(activities));

  return <div>page</div>;
}

export default page;
