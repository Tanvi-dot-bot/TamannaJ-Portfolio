import dynamic from "next/dynamic";
import Contacts from "./sections/Contacts";
const Experience = dynamic(() => import('./sections/Experience'), { 
  ssr: false
})
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
// const Hero = dynamic(() => import('./sections/Hero'), {
//   ssr: false
// })
import Navbar from "./sections/Navbar";
const About = dynamic(() => import('./sections/About'), { 
  ssr: false
})


export default function Home() {
let count = 0
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar/>
      {count === 0 && <Hero/>}
      {/* <Hero/> */}
      <About/>
      <Experience/>
      <Contacts/>
      <Footer/>
    </main> 
    )

}
