import Image from "next/image";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import Brand from "./components/Brand";
import Text from "./components/Text";
import Scard from "./components/Scard";
import Video from "./components/Video";
import View from "./components/View";

export default function Home() {
  return (
  <>
  <Head/>
   <Brand/>
   <Text/>
   <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between">
    <Scard/>
    <Scard/>
    <Scard/>
   </div>
   <Video/>
   <View/>
  </>
  );
}
