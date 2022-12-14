import React, { useEffect, useState } from "react";
import { HiArrowDown, HiArrowNarrowRight } from "react-icons/hi";
import Devider from "../../../components/ui/Devider";
import ProductCard from "../../../components/ui/ProductCard/Index";
import Title from "../../../components/ui/Title";
import Container from "./../../../components/ui/Container";

const AllProducts = () => {

  const [all, setAll] = useState([])

  async function fetchData() {
    const response = await fetch('http://49.12.13.213:9090/api/v1/product/new?offset=0&limit=20');
    let result = await response.json();
    let data = result.data
    setAll(result.data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <Container>
      <div className="flex justify-between">
        <Title>All Products</Title>
        <div className="rounded-md px-7 rounded-md bg-[#F0F9FF] flex items-center">
          <select name="" id="" className="bg-transparent">
            <option>
              By Price <HiArrowDown />
            </option>
            <option>By Date</option>
            <option>By Sells</option>
          </select>
        </div>
      </div>
      <Devider half />
      <div className="grid lg:grid-cols-4 gap-7 grid-cols-1">
        {all.map(i => {
          return (
            <ProductCard productDescriptions={i.productDescriptions} productImage={i.productImage} productName={i.productName} productPrice={i.productPrice} />
          )
        })}
      </div>
      <Devider half />
      <div className="flex justify-center gap-3 items-center">
        <div className="p-2">1</div>
        <div className="p-2">2</div>
        <div className="p-2">3</div>
        <div className="p-2">4</div>
        <div className="p-2">
          <HiArrowNarrowRight />
        </div>
      </div>
    </Container>
  );
};

export default AllProducts;
