import React, { useEffect, useState } from "react";
import Devider from "../../../components/ui/Devider";
import Title from "../../../components/ui/Title";
import Container from "./../../../components/ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./../../../components/ui/ProductCard/Index";
import "swiper/css";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const TopProducts = () => {
  const [slider, setslider] = useState({});

  const [topData, setData] = useState([
    {
      productDescriptions: "Clean Code , Clean Architecture",
      productIsActive: true,
      productIsNew: true,
      productIsTop: false,
      productName: "Clean Code",
      productPrice: "49",
      subCatalogID: 0 ,
      productImage: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    } ,
    {
      productDescriptions: "Clean Code , Clean Architecture",
      productIsActive: true,
      productIsNew: true,
      productIsTop: false,
      productName: "Clean Code",
      productPrice: "49",
      subCatalogID: 0 ,
      productImage: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    } ,
    {
      productDescriptions: "Clean Code , Clean Architecture",
      productIsActive: true,
      productIsNew: true,
      productIsTop: false,
      productName: "Clean Code",
      productPrice: "49",
      subCatalogID: 0 ,
      productImage: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    } ,
    {
      productDescriptions: "Clean Code , Clean Architecture",
      productIsActive: true,
      productIsNew: true,
      productIsTop: false,
      productName: "Clean Code",
      productPrice: "49",
      subCatalogID: 0 ,
      productImage: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    } ,
    
  ]);


  async function fetchData() {
    const response = await fetch('http://49.12.13.213:9090/api/v1/product/top?offset=0&limit=10');
    let result = await response.json();
    let data = result.data
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])



  const next = () => {
    slider.slideNext();
  };
  const prev = () => {
    slider.slidePrev();
  };

  return (
    <Container>
      <Title>Top Products</Title>
      <Devider half />

      <Swiper
        spaceBetween={50}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setslider(swiper)}
      >
       {topData !== null ? topData.map((i , index) =>{
        return(
          <SwiperSlide key={index}>
            <ProductCard productDescriptions={i.productDescriptions} productImage={i.productImage} productName={i.productName} productPrice={i.productPrice} />
          </SwiperSlide> 
        )
       }) : ""}
      </Swiper>

      <div className="flex gap-2 justify-center mt-6 lg:justify-end">
        <button className="py-4 px-10 rounded-xl bg-[#F0F9FF]" onClick={prev}>
          <HiArrowNarrowLeft />
        </button>
        <button className="py-4 px-10 rounded-xl bg-[#F0F9FF]" onClick={next}>
          <HiArrowNarrowRight />
        </button>
      </div>
    </Container>
  );
};

export default TopProducts;
