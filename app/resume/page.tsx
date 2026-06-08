import Image from "next/image";
import Link from "next/link";
import { MdJavascript } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-12 p-12">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold font-sans">
            PORTFOLIO_OS
          </h1>

          <nav className="flex items-center gap-8">
            <div>
                <ul className="flex items-center justify-betweem gap-8">
                    <li>
                        <Link
                            href="/"
                            className="inline-block font-semibold font-sans hover:underline transform transition-transform duration-300 hover:scale-110 text-black/70 hover:text-black"
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#experience"
                            className="inline-block font-semibold font-sans hover:underline transition transitio-transform duration-300 hover:scale-110 text-black/70 hover:text-black"
                        >
                        Experience
                        </a>
                    </li>
                    <li>
                        <Link
                            href="#skill"
                            className="inline-block font-semibold font-sans hover:underline transition transitio-transform duration-300 hover:scale-110 text-black/70 hover:text-black"
                        >
                        Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#education"
                            className="inline-block font-semibold font-sans hover:underline transition transitio-transform duration-300 hover:scale-110 text-black/70 hover:text-black"
                        >
                        Education
                        </Link>
                    </li>
                </ul>
            </div>
            <button className="bg-black cursor-pointer transition hover:scale-110">
                <p className="text-white px-6 py-2 font-semibold">DOWNLOAD PDF</p>
            </button>
          </nav>
        </header>
        <hr className="border-t-2 border-neutral-300 -mt-6 -mx-12" />

        <main className="flex flex-col gap-16 p-12">
          <div className="flex gap-4">
            <div className="relative rounded-full w-44 h-44 border border-black">
              <Image 
                src="/Image/Boy.png" 
                fill
                className="object-cover rounded-full"
                alt="" 
              />
            </div>
            <div className="space-y-2.5">
              <h1 className="text-5xl font-sans font-extrabold leading-16">THANAPHON <br />THAMMAVONGSA</h1>
              <p className="text-2xl font-sans font-semibold text-gray-700">Full-stack Developer</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-0.5 h-32 bg-black"></div>
            <p className="text-2xl font-sans font-semibold">A results-driven Full-Stack Developer with <br />+ years of experience in building scalable <br />web architectures and precision-engineered <br />digital solutions.</p>
          </div>
          <div id="experience" className="space-y-6">
            <div className="flex items-center gap-4">
              <p className="text-4xl font-sans font-semibold">EXPERIENCE</p>
              <div className="h-px bg-black w-full"></div>
            </div>
            <div className="space-y-6">
              <div className="border border-black w-full h-42.5 p-6 space-y-3.5 flex flex-col justify-start hover:bg-black hover:text-white group">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-sans font-semibold">Senior Full-Stack Developer</h3>
                  <p className="text-sm font-sans text-black/70  group-hover:text-white">2020 - PRESENT</p>
                </div>
                <p className="text-sm font-sans font-medium tracking-wider">GLOBAL TECH SOLUTIONS</p>
                <p className="text-base font-sans">Led development of core cloud infrastructure, managing high-availability clusters and implementing automated CI/CD pipelines that reduced deployment times by 40%.</p>
              </div>
              <div className="border border-black w-full h-42.5 p-6 space-y-3.5 flex flex-col justify-start hover:bg-black hover:text-white group">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-sans font-semibold">Web Architect</h3>
                  <p className="text-sm font-sans text-black/70  group-hover:text-white">2016 - 2020</p>
                </div>
                <p className="text-sm font-sans font-medium tracking-wider">DIGITAL FRONTIERS</p>
                <p className="text-base font-sans">Spearheaded front-end migration to modern frameworks, defining technical standards and mentoring a team of 12 developers on best practices in React and performance optimization.</p>
              </div>
              <div className="border border-black w-full h-42.5 p-6 space-y-3.5 flex flex-col justify-start hover:bg-black hover:text-white group">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-sans font-semibold">Senior Full-Stack Developer</h3>
                  <p className="text-sm font-sans text-black/70  group-hover:text-white">2014 - 2016</p>
                </div>
                <p className="text-sm font-sans font-medium tracking-wider">STARTUP HUB</p>
                <p className="text-base font-sans">Built and maintained internal toolings that streamlined cross-departmental workflows, focusing on Ruby on Rails and PostgreSQL database management.</p>
              </div>
            </div>
          </div>
          <div id="skill" className="bg-black h-210 pt-12 pl-12 space-y-8">
            <div className="flex items-center w-full gap-4">
              <p className="text-4xl font-sans font-extrabold text-white shrink-0">TECHNICAL SKILLS</p>
              <div className="h-px bg-white flex-1 mr-10"></div>
            </div>
            <div className="grid grid-cols-4 gap-y-7">
              <div className="border w-72 h-72 flex items-center justify-center group hover:bg-white">
                <div>
                  <MdJavascript size={80} className="text-white ml-6 group-hover:text-black transition duration-300"/>
                  <p className="text-white group-hover:text-black">JAVASCRIPT (ES6+)</p>
                </div>
              </div>
              <div className="border w-72 h-72 flex items-center justify-center group hover:bg-white">
                <div>
                  <Image 
                    src="/resume/Reactt.png" 
                    alt="" 
                    width={75}
                    height={75}
                    className="invert group-hover:invert-0 transition duration-300"
                  />
                  <p className="text-white text-center group-hover:text-black">REACT</p>
                </div>
              </div>
              <div className="border w-72 h-72 flex items-center justify-center group hover:bg-white">
                <div className="space-y-2">
                  <Image 
                    src="/resume/Nodejs.png" 
                    alt="" 
                    width={60}
                    height={60}
                    className="mt-3.5 ml-1 group-hover:invert"
                  />
                  <p className="text-white text-center group-hover:text-black">NODE.JS</p>
                </div>
              </div>
              <div className="border w-72 h-72 flex items-center justify-center group hover:bg-white">
                <div className="space-y-3 mt-5">
                  <Image 
                    src="/resume/Python.png" 
                    alt="" 
                    width={50}
                    height={50}
                    className="ml-4.5 group-hover:invert" 
                  />
                  <p className="text-white text-center ml-3 group-hover:text-black">PYTHON</p>
                </div>
              </div>
              <div className="border w-72 h-72 flex items-center justify-center group hover:bg-white">
                <div>
                  <MdCss size={80} className="text-white ml-3.5 group-hover:text-black"/>
                  <p className="text-white text-center group-hover:text-black">TAILWIND CSS</p>
                </div>
              </div>
              <div className="border w-72 h-72 flex items-center justify-center group hover:bg-white">
                <div className="space-y-6 mt-2">
                  <Image 
                    src="/resume/Postgresql.webp" 
                    alt="" 
                    width={40}
                    height={40}
                    className="ml-9 group-hover:invert" 
                  />
                  <p className="text-white text-center group-hover:text-black">POSTGRESQL</p>
                </div>
              </div>
              <div className="border w-72 h-72 flex items-center justify-center group hover:bg-white">
                <div className="mb-4">
                  <Image 
                    src="/resume/Aws.jpg" 
                    alt="" 
                    width={80}
                    height={80}
                    className="group-hover:invert" 
                  />
                  <p className="text-white text-center group-hover:text-black">AWS</p>
                </div>
              </div>
              <div className="border w-72 h-72 flex items-center justify-center group hover:bg-white">
                <div className="space-y-4 mt-3">
                  <Image 
                    src="/resume/Docker.jpg" 
                    alt="" 
                    width={50}
                    height={50}
                    className="ml-4 group-hover:invert" 
                  />
                  <p className="text-white text-center ml-2 group-hover:text-black">DOCKER</p>
                </div>
              </div>
              
            </div>
          </div>
          <div id="education" className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="font-sans text-4xl font-semibold">EDUCATION</h3>
              <div className="h-px bg-black w-full"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-0.5 h-32 bg-black"></div>
                <div className="space-y-2">
                  <h2 className="text-4xl font-sans font-semibold">Bachelor of Information Technology Engineering</h2>
                  <h4 className="text-base font-sans font-semibold">National Universty of Laos</h4>
                  <p>Focus on Software. 2025 - Now</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-0.5 h-32 bg-black"></div>
                <div className="space-y-2">
                  <h2 className="text-4xl font-sans font-semibold">Completed secondary education.</h2>
                  <h4 className="text-base font-sans font-semibold">Nam Theun 2 Secondary School</h4>
                  <p>First Class Honors. 2017 - 2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <h3 className="font-sans text-4xl font-semibold">PROJECT SPOTLIGHT</h3>
              <div className="h-px bg-black w-full flex-1"></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative border w-260 h-120">
                <Image 
                  src="/resume/Code1.webp" 
                  alt="" 
                  width={728}
                  height={728}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-6">
                <div className="border w-100 h-57 flex flex-col items-center pt-10 space-y-4 hover:bg-black hover:text-white group">
                  <Image 
                    src="/resume/Circle.png" 
                    alt="" 
                    width={60}
                    height={60}
                    className="group-hover:invert"
                  />
                  <p className="text-base font-sans font-medium tracking-wider">OPEN SOURCE CONTRIBUTOR</p>
                </div>
                <div className="border w-100 h-57 hover:bg-black hover:text-white">
                  <div className="space-y-4 pt-4">
                    <h2 className="font-sans text-4xl font-semibold text-center">Micro-Frontend Kit</h2>
                    <p className="font-sans text-xl text-center">A lightweight framework for enterprise scaling.</p>
                  </div>
                  <div className="flex justify-end pr-8 pt-8">
                    <FaArrowRight className="text-xl"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

       
        <hr className="border border-neutral-300" />
      <footer className="flex items-center justify-between h-30 px-20">
        <h1 className="text-3xl font-extrabold font-sans">PORTFOLIO_OS</h1>
        <p className="font-bold text-xs font-sans">@2026 THANAPHON. BUILT WITH PRECISION</p>
        <div className="flex items-center gap-12">
          <p className="font-bold text-xs font-sans">GITHUB</p>
          <p className="font-bold text-xs font-sans">LINKEDIN</p>
          <p className="font-bold text-xs font-sans">TWITTER</p>
        </div>
      </footer>


      
    </>
  );
}
