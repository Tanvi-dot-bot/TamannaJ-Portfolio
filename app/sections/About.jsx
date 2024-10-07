
import React from 'react'
import { Globe } from "react-globe.gl"
const About = () => {
  return (
    <section className="c-space my-20">
        <div className="grid xl:grid-cols-3
        xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                   <img src="../assets/grid1.png" alt="grid-1" 
                   className="w-full sm:h-[276px] h-fit object-contain"/> 
                   <div className="">
                    <p className="grid-headtext">Hi I'm Ahmed</p>
                    <p className="grid-subtext"> with 1 year of experience i have honed
                        my skills in both front-end and back-end development.
                    </p>
                   </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3
             ">
                <div className="grid-container">
                    <img src="../assets/grid2.png" alt="grid-2" 
                    className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext"> 
                            i specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystem. </p>
                    </div>
                </div>
             </div>
             <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px]
                    h-fit flex justify-center items-center">
                        {/* <Globe/> */}
                    </div>
                </div>
             </div>
        </div>
    </section>
  )
}

export default About