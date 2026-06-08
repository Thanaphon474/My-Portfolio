import Image from "next/image";
import Link from "next/link";
import { IoBrushOutline } from "react-icons/io5";
import { MdAutoGraph } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-12 p-12">
        <header className="flex items-center justify-center gap-72">
          <h1 className="text-3xl font-extrabold font-sans">
            THANAPHON
          </h1>

          <nav>
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
                <Link
                  href="/about-me"
                  className="inline-block font-semibold font-sans hover:underline transition transitio-transform duration-300 hover:scale-110 text-black/70 hover:text-black"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="inline-block font-semibold font-sans hover:underline transition transitio-transform duration-300 hover:scale-110 text-black/70 hover:text-black"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="inline-block font-semibold font-sans hover:underline transition transitio-transform duration-300 hover:scale-110 text-black/70 hover:text-black"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-me"
                  className="inline-block font-semibold font-sans hover:underline transition transitio-transform duration-300 hover:scale-110 text-black/70 hover:text-black"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>

          <button className="bg-black cursor-pointer transition hover:scale-110">
            <a href="/resume">
              <p className="text-white px-6 py-2 font-semibold">Resume</p>
            </a>
          </button>
        </header>
        <hr className="border-t-2 border-neutral-300 -mt-6 -mx-12" />

        <main className="flex flex-col gap-16 p-12">
          <div className="flex flex-col gap-48">
            <div className="flex gap-48">
              <div>
                <Image
                  src="/Image/Boy.png"
                  width={720}
                  height={720}
                  className="w-160 h-160 rounded-full object-cover shadow-lg transition"
                  alt=""
                />
              </div>

              <div className="space-y-12">
                <div className="space-y-5">
                  <div className="space-y-3">
                    <p className="text-sm font-sans font-medium tracking-wide text-neutral-500">INTRODUCTION</p>
                    <h1 className="text-5xl font-sans font-extrabold">CRAFTING DIGITAL<br />ARCHITECTURE.</h1>
                  </div>
                  <div className="space-y-5">
                    <p>I am Thanaphon, a Full-Stack Developer with a decade of <br />experience in building scalable web applications. My approach <br />combines the rigor of engineering with the nuance of design, <br />ensuring that every line of code serves a larger aesthetic and <br />functional purpose.</p>
                    <p>My journey began in the terminal, where I discovered the <br />power of transformation through automation. Today, I architect <br />complex systems for global clients, focusing on performance, <br />accessibility, and clean architecture.</p>
                  </div>
                </div>
                <hr className="border border-neutral-300" />
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-6xl font-sans font-extrabold">0</h1>
                    <p className="text-sm font-sans font-medium tracking-wide text-neutral-500">PROJECTS COMPLETED</p>
                  </div>
                  <div>
                    <h1 className="text-6xl font-sans font-extrabold">0</h1>
                    <p className="text-sm font-sans font-medium tracking-wide text-neutral-500">YEARS EXPERIENCE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-14">
              <h1 className="text-3xl font-sans font-bold">THE FOUNDATION</h1>
              <div className="flex gap-4">
                <div>
                  <div className="border border-black w-200 h-100 space-y-12">
                    <div className="flex flex-col p-6 space-y-5">
                      <Image
                      src="/Photos/Graduated.png"
                      width={48}
                      height={48}
                      alt=""
                      />
                      <h2 className="text-3xl font-sans font-bold">ACADEMIC PATH</h2>
                      <div className="space-y-10">
                        <div className="flex items-center justify-between">
                          <div>
                            <h6 className="font-semibold font-sans">Bachelor&apos;s Degree Program</h6>
                            <p className="text-neutral-500 font-sans">Information Engineering, National University Of Laos.</p>
                          </div>
                          <p className="font-semibold">2025 - Now</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h6 className="font-semibold font-sans">Completed secondary education</h6>
                            <p className="text-neutral-500 font-sans">Nam Theun2 Secondary School</p>
                          </div>
                          <p className="font-semibold">2017 - 2025</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm font-sans font-medium tracking-wide text-neutral-500 ml-6">{"// "} Continuous learning through certifications in AWS, Google Cloud, and Advanced System Design.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-black text-white w-130 h-48 flex flex-col p-8 space-y-2">
                    <h4 className="tex-sm font-sans font-semibold tracking-wider">CORE INTERESTS</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-1">
                        <Image 
                          src="/resume/Nodejs.png" 
                          alt="" 
                          width={40}
                          height={40}
                          className=""
                        />
                        <p className="text-lg font-sans font-semibold">System Architecture</p>
                      </div>
                      <div className="flex items-center gap-3.5">
                        <IoBrushOutline size={22}  className="ml-2"/>
                        <p className="text-lg font-sans font-semibold">UI/UX Psychology</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MdAutoGraph size={25} className="ml-2"/>
                        <p className="text-lg font-sans font-semibold">Performance Optimization</p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-neutral-300 w-130 h-48 flex flex-col p-8 space-y-2 tracking-wider">
                    <p className="text-sm font-sans text-neutral-600 font-medium tracking-wider">CURRENT FOCUS</p>
                    <p className="text-3xl font-sans font-bold ">ARTIFICIAL <br />INTELLIGENCE.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>

      <div className="space-y-20">
        <hr className="border border-neutral-300" />
        <div className="text-center space-y-6">
          <p className="text-2xl font-sans font-bold text-neutral-400">99</p>
          <p className="text-5xl font-sans font-semibold leading-15"><i>&quot;Simplicity is the final achievment. <br />After one has played a vast quantity <br />of notes and more notes, it is <br />Simplicity that emerges as the <br />crowing reward of art.&quot; </i></p>
          <p className="text-sm italic">-FREDERIC CHOPIN (MY DEV PHILOSOPHY)</p>
        </div>
        <hr className="border border-neutral-300" />
      </div>

      <footer className="flex items-center justify-center gap-72 h-30">
        <h1 className="text-3xl font-extrabold font-sans">THANAPHON</h1>
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
