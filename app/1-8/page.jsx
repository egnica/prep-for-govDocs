import React from "react";

function page() {
  const users = [
    { name: "Alice", settings: { theme: "dark", alerts: true } },
    { name: "Bob", settings: { theme: "light", alerts: false } },
    { name: "Cara", settings: { theme: "dark", alerts: false } },
  ];

  const themeUsers = (obj) => {
    let darkUsers = [];
    Object.values(obj).forEach((item) => {
      if (item.settings.theme == "dark") {
        darkUsers.push(item.name);
      }
    });
    return darkUsers;
  };
  console.log(themeUsers(users));

  return <div>page</div>;
}

export default page;
