import Image from "next/image";
import Link from "next/link";
import { IoBrushOutline } from "react-icons/io5";
import { MdAutoGraph } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-8 sm:gap-12 p-4 sm:p-8 lg:p-12">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold font-sans text-center md:text-left">
            THANAPHON
          </h1>

          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-8">
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

          <button className="bg-black cursor-pointer transition hover:scale-110 self-center md:self-auto">
            <a href="/resume">
              <p className="text-white px-6 py-2 font-semibold">Resume</p>
            </a>
          </button>
        </header>
        <hr className="border-t-2 border-neutral-300 -mt-2 sm:-mt-6 -mx-4 sm:-mx-8 lg:-mx-12" />

        <main className="flex flex-col gap-16 lg:p-12">
          <div className="flex flex-col gap-16 lg:gap-48">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-24 xl:gap-48">
              <div className="shrink-0">
                <Image
                  src="/Image/Boy.png"
                  width={720}
                  height={720}
                  className="w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-160 xl:h-160 rounded-full object-cover shadow-lg transition"
                  alt=""
                />
              </div>

              <div className="space-y-12 w-full">
                <div className="space-y-5">
                  <div className="space-y-3">
                    <p className="text-sm font-sans font-medium tracking-wide text-neutral-500">INTRODUCTION</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold">CRAFTING DIGITAL ARCHITECTURE.</h1>
                  </div>
                  <div className="space-y-5 max-w-prose">
                    <p>I am Thanaphon, a Full-Stack Developer with a decade of experience in building scalable web applications. My approach combines the rigor of engineering with the nuance of design, ensuring that every line of code serves a larger aesthetic and functional purpose.</p>
                    <p>My journey began in the terminal, where I discovered the power of transformation through automation. Today, I architect complex systems for global clients, focusing on performance, accessibility, and clean architecture.</p>
                  </div>
                </div>
                <hr className="border border-neutral-300" />
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold">0</h1>
                    <p className="text-sm font-sans font-medium tracking-wide text-neutral-500">PROJECTS COMPLETED</p>
                  </div>
                  <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold">0</h1>
                    <p className="text-sm font-sans font-medium tracking-wide text-neutral-500">YEARS EXPERIENCE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-14">
              <h1 className="text-2xl sm:text-3xl font-sans font-bold">THE FOUNDATION</h1>
              <div className="flex flex-col gap-4 xl:flex-row">
                <div className="w-full xl:flex-3">
                  <div className="border border-black w-full h-full flex flex-col justify-between space-y-12 pb-6">
                    <div className="flex flex-col p-6 space-y-5">
                      <Image
                      src="/Photos/Graduated.png"
                      width={48}
                      height={48}
                      alt=""
                      />
                      <h2 className="text-2xl sm:text-3xl font-sans font-bold">ACADEMIC PATH</h2>
                      <div className="space-y-10">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h6 className="font-semibold font-sans">Bachelor&apos;s Degree Program</h6>
                            <p className="text-neutral-500 font-sans">Information Engineering, National University Of Laos.</p>
                          </div>
                          <p className="font-semibold whitespace-nowrap">2025 - Now</p>
                        </div>

                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h6 className="font-semibold font-sans">Completed secondary education</h6>
                            <p className="text-neutral-500 font-sans">Nam Theun2 Secondary School</p>
                          </div>
                          <p className="font-semibold whitespace-nowrap">2017 - 2025</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm font-sans font-medium tracking-wide text-neutral-500 mx-6">{"// "} Continuous learning through certifications in AWS, Google Cloud, and Advanced System Design.</p>
                  </div>
                </div>

                <div className="w-full xl:flex-2 space-y-4">
                  <div className="bg-black text-white w-full min-h-48 flex flex-col p-8 space-y-2">
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
                  <div className="border border-neutral-300 w-full min-h-48 flex flex-col p-8 space-y-2 tracking-wider">
                    <p className="text-sm font-sans text-neutral-600 font-medium tracking-wider">CURRENT FOCUS</p>
                    <p className="text-2xl sm:text-3xl font-sans font-bold ">ARTIFICIAL INTELLIGENCE.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>

      <div className="space-y-20">
        <hr className="border border-neutral-300" />
        <div className="text-center space-y-6 px-4">
          <p className="text-2xl font-sans font-bold text-neutral-400">99</p>
          <p className="text-2xl sm:text-3xl lg:text-5xl font-sans font-semibold leading-snug lg:leading-15 max-w-4xl mx-auto"><i>&quot;Simplicity is the final achievment. After one has played a vast quantity of notes and more notes, it is Simplicity that emerges as the crowing reward of art.&quot; </i></p>
          <p className="text-sm italic">-FREDERIC CHOPIN (MY DEV PHILOSOPHY)</p>
        </div>
        <hr className="border border-neutral-300" />
      </div>

      <footer className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-12 lg:gap-72 py-8 sm:py-0 sm:h-30 px-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold font-sans">THANAPHON</h1>
        <p className="font-bold text-xs font-sans">@2026 THANAPHON. BUILT WITH PRECISION</p>
        <div className="flex items-center gap-6 sm:gap-12">
          <p className="font-bold text-xs font-sans">GITHUB</p>
          <p className="font-bold text-xs font-sans">LINKEDIN</p>
          <p className="font-bold text-xs font-sans">TWITTER</p>
        </div>
      </footer>
    </>
  );
}
