import React from "react";

export default function page() {
  const users = [
    { id: "u1", email: "a@test.com", role: "admin", isActive: true },
    { id: "u2", email: "b@test.com", role: "user", isActive: false },
    { id: "u3", email: "c@test.com", role: "user", isActive: true },
    { id: "u4", email: "d@test.com", role: "user", isActive: true },
  ];

  const filteredUsers = users.filter(
    (item) => item.role !== "admin" && item.isActive
  );

  const usersFunction = (obj) => {
    const result = [];
    obj.forEach((item) => {
      result.push({ id: item.id, email: item.email });
    });
    return result;
  };

  console.log(usersFunction(filteredUsers));

  return <div>page</div>;
}
