import Image from "next/image";
import Link from "next/link";

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

          <button className="bg-black cursor-pointer transition hover:scale-110">
            <a href="/resume">
              <p className="text-white px-6 py-2 font-semibold">Resume</p>
              {/* <Image src="" alt="" /> */}
            </a>
          </button>
        </header>
        <hr className="border-t-2 border-neutral-300 -mt-6 -mx-12" />

        <main className="flex flex-col gap-16 p-12">
          <div className="flex gap-16">
            <div className="space-y-16">
                <div className="space-y-4">
                    <p className="text-black/70 text-sm tracking-widest font-sans font-semibold">GET IN TOUCH</p>
                    <h1 className="text-5xl font-sans font-extrabold tracking-wide leading-16 -mx-4">LET&apos;S CREATE SOMETHING <br />REMARKABLE TOGETHER.</h1>
                </div>
                <div className="flex gap-12">
                  <form className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="text-sm font-sans font-semibold tracking-widest">NAME</label>
                            <input type="text" className="border border-black w-96 h-10 rounded-none text-sm px-4" placeholder="YOUR FULL NAME" required/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="text-sm font-sans font-semibold tracking-widest">EMAIL</label>
                            <input type="email" className="border border-black w-96 h-10 rounded-none text-sm px-4" placeholder="YOUR@EMAIL.COM" required/>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="text-sm font-sans font-semibold tracking-widest">SUBJECT</label>
                            <select name="subject" id="" className="border border-black rounded-none text-sm w-196 h-10 px-4">
                                <option value="">PROJECT INQUIRY</option>
                                <option value="">SOFTWARE ENGINEERING</option>
                                <option value="">CYBERSECURITY</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-10">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="text-sm font-sans font-semibold tracking-widest">MESSAGE</label>
                            <textarea name="" id="" className="border border-black rounded-none text-base w-196 h-45 px-4" required></textarea>
                        </div>
                        <input type="submit" value="SEND MASSAGE" className="text-lg font-sans font-semibold bg-black text-white w-55 h-15 cursor-pointer"/>
                    </div>
                  </form>
                  <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="border border-black w-125 h-40 flex flex-col justify-center px-10 space-y-6">
                            <Image 
                                src="/Icon/Letter.png"
                                width={22}
                                height={22} 
                                alt=""
                            />
                            <div>
                                <p className="font-sans text-xs text-black/70 font-semibold">EMAIL ME</p>
                                <h2 className="font-sans text-4xl font-bold">hello@thanaphon.dev</h2>
                            </div>
                        </div>
                        <div className="border border-black w-125 h-40 flex flex-col justify-center px-10 space-y-6">
                            <Image 
                                src="/Icon/Location.png"
                                width={22}
                                height={22} 
                                alt=""
                            />
                            <div>
                                <p className="font-sans text-xs text-black/70 font-semibold">LOCATION</p>
                                <h2 className="font-sans text-4xl font-bold">Vientaine, Laos</h2>
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
      <footer className="flex items-center justify-between h-30 px-20">
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
