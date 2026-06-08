import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
          <div className="space-y-4">
            <h1 className="font-sans text-3xl sm:text-4xl font-extrabold">SELECTED PROJECTS</h1>
            <p className="font-sans text-base text-black/70 ">A SHOWCASE OF TECHNICAL PRECISION AND CREATIVE PROBLEM-SOLVING. EVERY LINE OF CODE SERVE A PURPOSE, EVERY PIXEL IS INTENTIONAL.</p>
          </div>
          <div className="flex flex-col gap-6 xl:flex-row xl:items-stretch xl:justify-between">
            <div className="space-y-6 w-full xl:w-107.25">
                <div className="border border-black w-full h-120 space-y-1 flex flex-col">
                    <Image
                        src="/Pictures/Typing.jpg"
                        width={480}
                        height={300}
                        className="object-cover w-full h-36"
                        alt=""
                    />
                    <div className="p-4 space-y-3">
                        <div className="space-y-2">
                            <p className="text-sm text-black/70 tracking-wider font-sans">FINTECH / SECURITY</p>
                            <h1 className="text-3xl sm:text-4xl font-bold font-sans">NEURAL SHIELD</h1>
                        </div>
                        <p className="text-base text-black/70 font-sans">An AI-driven threat detection system utilizing real-time data streams to visualize network vulnerabilities in a dark-mode terminal aesthetic.</p>
                    </div>
                    <button className="border border-black/70 px-8 sm:px-16 lg:px-24 py-2 mt-auto mb-6 self-center tracking-widest font-semibold cursor-pointer hover:bg-black hover:text-white">EXPLORE CASE STUDY</button>
                </div>
                <div className="border border-black w-full h-120 space-y-1 flex flex-col">
                    <Image
                        src="/Pictures/Black.jpg"
                        width={480}
                        height={300}
                        className="object-cover w-full h-36"
                        alt=""
                    />
                    <div className="p-4 space-y-3">
                        <div className="space-y-2">
                            <p className="text-sm text-black/70 tracking-wider font-sans">MULTIEDIA</p>
                            <h1 className="text-3xl sm:text-4xl font-bold font-sans">SONIC GRID</h1>
                        </div>
                        <p className="text-base text-black/70 font-sans">Real-time digital signal processing engine for procedural audio generation in immersive virtual environments.</p>
                    </div>
                    <button className="border border-black/70 px-8 sm:px-16 lg:px-24 py-2 mt-auto mb-6 self-center tracking-widest font-semibold cursor-pointer hover:bg-black hover:text-white">EXPLORE CASE STUDY</button>
                </div>
            </div>

            <div className="bg-black w-full xl:w-107.25 h-auto xl:h-245 flex flex-col">
                <Image
                    src="/Pictures/Buildings.jpg"
                    width={480}
                    height={300}
                    alt=""
                    className="object-cover w-full h-64 xl:h-163.25"
                />
                <div className="p-4 space-y-3">
                    <div className="space-y-2">
                        <p className="text-sm text-white tracking-wider font-sans">WEB ENGINE</p>
                        <h1 className="text-3xl sm:text-4xl font-bold font-sans text-white">CORE V3</h1>
                    </div>
                    <p className="text-base text-white font-sans">A headless commerce framework built for speed, handling millions of requests with sub-100ms latency across global nodes.</p>
                </div>
                <button className="border border-white bg-black text-white px-8 sm:px-16 lg:px-24 py-2 mt-10 mb-8 self-center tracking-widest font-semibold cursor-pointer hover:bg-white hover:text-black">VIEW REPOSITORY</button>
            </div>

            <div className="space-y-6 w-full xl:w-107.25">
                <div className="border border-black w-full h-120 space-y-1 flex flex-col">
                    <Image
                        src="/Pictures/server-room.webp"
                        width={480}
                        height={300}
                        className="object-cover w-full h-36"
                        alt=""
                    />
                    <div className="p-4 space-y-3">
                        <div className="space-y-2">
                            <p className="text-sm text-black/70 tracking-wider font-sans">INFRASTRUCTURE</p>
                            <h1 className="text-3xl sm:text-4xl font-bold font-sans">VOID OPS</h1>
                        </div>
                        <p className="text-base text-black/70 font-sans">Kubernetes orchestration visualization tool designed for site reliability engineers managing distributed clusters.</p>
                    </div>
                    <button className="border border-black/70 px-8 sm:px-16 lg:px-24 py-2 mt-auto mb-6 self-center tracking-widest font-semibold cursor-pointer hover:bg-black hover:text-white">EXPLORE CASE STUDY</button>
                </div>
                <div className="border border-black w-full h-120 space-y-1 flex flex-col">
                    <Image
                        src="/Pictures/Code.jpg"
                        width={480}
                        height={300}
                        className="object-cover w-full h-36"
                        alt=""
                    />
                    <div className="p-4 space-y-3">
                        <div className="space-y-2">
                            <p className="text-sm text-black/70 tracking-wider font-sans">UTILITY</p>
                            <h1 className="text-3xl sm:text-4xl font-bold font-sans">KINETIC IDE</h1>
                        </div>
                        <p className="text-base text-black/70 font-sans">A lightweight, terminal-based code editor focused on minimal distraction and hyper-fast keyboard navigation.</p>
                    </div>
                    <button className="border border-black/70 px-8 sm:px-16 lg:px-24 py-2 mt-auto mb-6 self-center tracking-widest font-semibold cursor-pointer hover:bg-black hover:text-white">EXPLORE CASE STUDY</button>
                </div>

            </div>
          </div>
          <div className="border border-black flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:h-30 px-6 sm:px-10 py-6 sm:py-0">
            <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-wide">CURIOUS ABOUT THE JOURNEY?</h2>
                <p className="text-sm font-sans text-black/70 tracking-wide">EXPLORE THE PROFESSIONAL EVOLUTION AND KEY MILESTONES BEHIND THESE PROJECTS.</p>
            </div>
            <button className="bg-black text-white px-10 py-3 cursor-pointer flex items-center justify-center gap-6 shrink-0">
                <p className="text-sm font-sans">VIEW CAREER PATH</p>
                <FaArrowRight />
            </button>
          </div>
        </main>
      </div>


        <hr className="border border-neutral-300" />
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
