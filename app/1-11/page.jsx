import React from "react";

function page() {
  const activityLog = [
    { userId: 1, action: "login", timestamp: "2025-01-02 09:10:00" },
    { userId: 2, action: "view_page", timestamp: "2025-01-02 09:12:00" },
    { userId: 1, action: "upload_file", timestamp: "2025-01-02 09:15:00" },
    { userId: 3, action: "login", timestamp: "2025-01-02 09:20:00" },
    { userId: 1, action: "logout", timestamp: "2025-01-02 09:25:00" },
    { userId: 2, action: "logout", timestamp: "2025-01-02 09:30:00" },
  ];

  const groupByUser = (obj) => {
    const result = {};
    obj.forEach((item) => {
      if (!result[item.userId]) {
        result[item.userId] = [];
      }
      result[item.userId].push(item);
    });
    return result;
  };
  console.log(groupByUser(activityLog));

  return <div>page</div>;
}

export default page;
