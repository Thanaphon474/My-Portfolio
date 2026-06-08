import Image from "next/image";
import Link from "next/link";

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
                  className="inline-block font-semibold font-sans hover:underline transition duration-300 hover:scale-110 text-black/70 hover:text-black"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-me"
                  className="inline-block font-semibold font-sans hover:underline transition duration-300 hover:scale-110 text-black/70 hover:text-black"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="inline-block font-semibold font-sans hover:underline transition duration-300 hover:scale-110 text-black/70 hover:text-black"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="inline-block font-semibold font-sans hover:underline transition duration-300 hover:scale-110 text-black/70 hover:text-black"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="inline-block font-semibold font-sans hover:underline transition duration-300 hover:scale-110 text-black/70 hover:text-black"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>

          <button className="bg-black cursor-pointer transition hover:scale-110 self-center md:self-auto">
            <a href="/resume">
              <p className="text-white px-6 py-2 font-semibold">Resume</p>
              {/* <Image src="" alt="" /> */}
            </a>
          </button>
        </header>
        <hr className="border-t-2 border-neutral-300 -mt-2 sm:-mt-6 -mx-4 sm:-mx-8 lg:-mx-12" />

        <main className="flex flex-col gap-16 lg:p-12">
          <div className="flex gap-16">
            <div className="space-y-16 w-full">
                <div className="space-y-4">
                    <p className="text-black/70 text-sm tracking-widest font-sans font-semibold">GET IN TOUCH</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-wide leading-tight lg:leading-16">LET&apos;S CREATE SOMETHING REMARKABLE TOGETHER.</h1>
                </div>
                <div className="flex flex-col gap-12 xl:flex-row">
                  <form className="space-y-8 w-full xl:max-w-2xl">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex flex-col gap-1 flex-1">
                            <label htmlFor="" className="text-sm font-sans font-semibold tracking-widest">NAME</label>
                            <input type="text" className="border border-black w-full h-10 rounded-none text-sm px-4" placeholder="YOUR FULL NAME" required/>
                        </div>
                        <div className="flex flex-col gap-1 flex-1">
                            <label htmlFor="" className="text-sm font-sans font-semibold tracking-widest">EMAIL</label>
                            <input type="email" className="border border-black w-full h-10 rounded-none text-sm px-4" placeholder="YOUR@EMAIL.COM" required/>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="text-sm font-sans font-semibold tracking-widest">SUBJECT</label>
                            <select name="subject" id="" className="border border-black rounded-none text-sm w-full h-10 px-4">
                                <option value="">PROJECT INQUIRY</option>
                                <option value="">SOFTWARE ENGINEERING</option>
                                <option value="">CYBERSECURITY</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-10">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="text-sm font-sans font-semibold tracking-widest">MESSAGE</label>
                            <textarea name="" id="" className="border border-black rounded-none text-base w-full h-45 px-4" required></textarea>
                        </div>
                        <input type="submit" value="SEND MASSAGE" className="text-lg font-sans font-semibold bg-black text-white w-full sm:w-55 h-15 cursor-pointer"/>
                    </div>
                  </form>
                  <div className="space-y-8 w-full xl:max-w-md">
                    <div className="space-y-4">
                        <div className="border border-black w-full h-40 flex flex-col justify-center px-6 sm:px-10 space-y-6">
                            <Image
                                src="/Icon/Letter.png"
                                width={22}
                                height={22}
                                alt=""
                            />
                            <div>
                                <p className="font-sans text-xs text-black/70 font-semibold">EMAIL ME</p>
                                <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold wrap-break-word">hello@thanaphon.dev</h2>
                            </div>
                        </div>
                        <div className="border border-black w-full h-40 flex flex-col justify-center px-6 sm:px-10 space-y-6">
                            <Image
                                src="/Icon/Location.png"
                                width={22}
                                height={22}
                                alt=""
                            />
                            <div>
                                <p className="font-sans text-xs text-black/70 font-semibold">LOCATION</p>
                                <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold">Vientaine, Laos</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                      <div className="relative w-full h-72 cursor-pointer">
                        <Image
                          src="/Icon/Map.jpg"
                          width={500}
                          height={120}
                          className="w-full h-72 object-cover"
                          alt=""
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center animate-ping">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="font-sans text-xs text-black/70 font-semibold tracking-widest">FOLLOW MY JOURNEY</p>
                        <div className="flex items-center gap-3">
                          <div className="border border-black w-12 h-12 flex items-center justify-center cursor-pointer">
                            <Image
                              src="/Icon/Payment.webp"
                              width={42}
                              height={42}
                              alt=""
                            />
                          </div>
                          <div className="border border-black w-12 h-12 flex items-center justify-center cursor-pointer">
                            <Image
                              src="/Icon/Handbag.png"
                              width={28}
                              height={28}
                              alt=""
                            />
                          </div>
                          <div className="border border-black w-12 h-12 flex items-center justify-center pr-1 cursor-pointer">
                            <Image
                              src="/Icon/share.png"
                              width={20}
                              height={20}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </main>
      </div>


        <hr className="border border-neutral-300" />
      <footer className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row py-8 sm:py-0 sm:h-30 px-6 sm:px-20">
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
