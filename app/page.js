import dynamic from "next/dynamic";
import Contacts from "./sections/Contacts";
const Experience = dynamic(() => import('./sections/Experience'), { 
  ssr: false
})
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";

import Navbar from "./sections/Navbar";
const About = dynamic(() => import('./sections/About'), { 
  ssr: false
})


export default function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar/>
      <Hero/>
      {/* <Hero/> */}
      <About/>
      <Experience/>
      <Contacts/>
      <Footer/>
    </main> 
    )

}
