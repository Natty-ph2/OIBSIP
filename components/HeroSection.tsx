"use client"
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi"


const HeroSection = () => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
                <div className="md:w-1/2 md:mt-2">
                    <Image className="aspect-square object-cover rounded-full shadow-2xl" src="/nth.jpg" alt="" width={300} height={300} />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">Hi, I&#39;m Natty</h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl"> 
                        I&#39;m a Passionate and creative{" "}
                        <span className="font-semibold text-teal-600">
                        front-end developer{" "}
                        </span>
                        based in Addis Ababa, Ethiopia
                          with a strong foundation in web technologies and a keen eye for design. 
                        I specialize in building responsive and user-friendly web applications that deliver a seamless and engaging user experience.
                    </p>
                    <Link
                      to="projects"
                      className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                       Projects
                     </Link>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <Link 
                  to="about"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                   <HiArrowDown size={35} className="animate-bounce" /> 
                </Link>
            </div>
        </section>
    )
}

export default HeroSection;