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


export default function Home() {
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
  </>
  );
}
