"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Brand from "./components/Brand";
import Text from "./components/Text";
import Scard from "./components/Scard";
import Video from "./components/Video";
import View from "./components/View";
import Service from "./components/Service";
import Brands from "./components/Brands";
import Zoom from "./components/Zoom";
import Build from "./components/Build";
import Responsive from "./components/Responsive";
import Repair from "./components/Repair";
import Slide from "./components/Slide";
import Detailcard from "./components/Detailcard";
import { useState } from "react";
import Textcarousal from "./components/Textcarousal";
import Review from "./components/Review";
import Bottomdetail from "./components/Bottomdetail";
import Footer from "./components/Footer";


export default function Home() {
    const[deatil,setDetail] = useState([1,2,3,4])
  return (
  <>
  <Head/>
   <Brand/>
   <Text/>
   <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between max-[1180px]:justify-around max-[1180px]:gap-5" >
    <Scard/>
    <Scard/>
    <Scard/>
   </div>
   <Video/>
   <View/>
   <Service/>
   <Brands/>
   <Zoom/>
   <Build/>
   <Responsive/>
   <Repair/>
   {
    deatil.map((item) => {
        return <Detailcard/>
    })
   }
   <Repair/>
<Textcarousal/>
<Review/>
<Bottomdetail/>
<Footer/>
  </>
  );
}
