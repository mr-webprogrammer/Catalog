import React, { useEffect, useState } from "react";
import Item from "./Item";

function List({ }) {

  const [catalogData, setCatalogData] = useState([
    {
      catalogName: "Hotel",
      catalogCount: 10
    },
    {
      catalogName: "Hotel",
      catalogCount: 15
    },
    {
      catalogName: "Hotel",
      catalogCount: 17
    },
    {
      catalogName: "Hotel",
      catalogCount: 8
    },
  ])

  async function fetchData() {
    const response = await fetch('http://49.12.13.213:9090/api/v1/catalog/get-list');
    let result = await response.json();
    let data = result.data
    setCatalogData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      {catalogData.map((i, index) => {
        return (
          <Item key={index} title={i.catalogName} count={i.catalogCount} />
        )
      })}
    </div>
  );
}

export default List;
