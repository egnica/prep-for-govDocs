import React from "react";

function page() {
  const users = [
    {
      id: 1,
      name: "Alice",
      isActive: true,
      preferences: {
        theme: "dark",
        notifications: true,
      },
    },
    {
      id: 2,
      name: "Bob",
      isActive: false,
      preferences: {
        theme: "light",
        notifications: false,
      },
    },
    {
      id: 3,
      name: "Charlie",
      isActive: true,
      preferences: {
        theme: "dark",
        notifications: false,
      },
    },
  ];

  // Problem 7: Get Active Users With Email Notifications Enabled

  const activeNotifications = (obj) => {
    const user = [];
    let newItem = {};
    Object.values(obj).forEach((item) => {
      if (item.isActive == true) {
        newItem = item.preferences;
        if (newItem.notifications == true) {
          user.push(item.name);
        }
      }
    });
    return user;
  };

  console.log(activeNotifications(users));

  return <div>page</div>;
}

export default page;
