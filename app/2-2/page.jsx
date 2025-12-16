import React from "react";
import Police from "../data/Police_Incidents_2025.json";

function page() {
  const neighborhoodCrimeCount = () => {
    const results = {};
    Police.features.forEach(({ properties }) => {
      if (!results[properties.neighborhood]) {
        results[properties.neighborhood] = 0;
      }
      results[properties.neighborhood] += 1;
    });

    const sortedList = Object.entries(results).sort((a, b) => b[1] - a[1]);
    return sortedList;
  };

  console.log(neighborhoodCrimeCount());

  return <div>page</div>;
}

export default page;
