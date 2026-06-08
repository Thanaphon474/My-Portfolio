import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-8 sm:gap-12 p-4 sm:p-8 lg:p-12">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold font-sans text-center md:text-left">
            PERSONAL PORTFOLIO
          </h1>

          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-8">
              <li>
                <Link
                  href="#"
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
                  href="#skills"
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

        <main className="flex flex-col gap-16 sm:gap-24 lg:p-12">
          <div>
            <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-32">
              <div className="space-y-6 text-center lg:text-left">
                <h2>
                  <span className="font-semibold font-sans text-2xl sm:text-3xl lg:text-4xl">
                    Hello I&apos;m{" "}
                  </span>
                  <span className="font-extrabold font-sans text-2xl sm:text-3xl lg:text-4xl">
                    Thanaphon Thammavongsa.
                  </span>
                </h2>
                <h3>
                  <span className="font-extrabold font-sans text-2xl sm:text-3xl lg:text-4xl">
                    Full Stack{" "}
                  </span>
                  <span className="font-extrabold font-sans text-3xl sm:text-4xl lg:text-5xl text-transparent [-webkit-text-stroke:2px_black]">
                    Developer
                  </span>
                </h3>
                <h3>
                  <span className="font-semibold font-sans text-2xl sm:text-3xl lg:text-4xl fonts">
                    Based in{" "}
                  </span>
                  <span className="font-extrabold font-sans text-3xl sm:text-4xl lg:text-5xl">
                    Laos.
                  </span>
                </h3>
                <p className="font-serif text-base sm:text-lg max-w-prose mx-auto lg:mx-0">
                  I&apos;m a professional web Developer from Laos. I have spent
                  the past 10+ years building my skills and reputation with my
                  client base and am always looking developer new work
                  relationships.
                </p>
              </div>
              <div className="shrink-0">
                <Image
                  src="/Image/Boy.png"
                  width={720}
                  height={720}
                  className="w-56 h-56 sm:w-80 sm:h-80 lg:w-120 lg:h-120 rounded-full object-cover shadow-lg transition mt-5"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 lg:justify-start mt-10 lg:mt-12">
              <a href="https://www.facebook.com/thanaphon.thammavongsa.7">
                <div className=" w-16 h-16 bg-black rounded-lg objec-cover flex items-center justify-center cursor-pointer">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Image
                      src="/Image/Facebook.png"
                      width={24}
                      height={24}
                      alt=""
                      className="mt-2"
                    />
                  </div>
                </div>
              </a>

              <a href="https://www.instagram.com/syq.starboy/">
                <div className=" w-16 h-16 border-2 border-black rounded-lg flex items-center justify-center cursor-pointer">
                  <Image
                    src="/Image/ig.png"
                    width={48}
                    height={48}
                    alt=""
                  />
                </div>
              </a>

              <a href="https://wa.me/8562093995090">
                <div className=" w-16 h-16 border-2 border-black rounded-lg flex items-center justify-center cursor-pointer overflow-hidden">
                  <Image
                    src="/Image/Whatsapp-Photoroom.png"
                    width={36}
                    height={36}
                    alt=""
                    className="object-cover"
                  />
                </div>
              </a>

              <a href="https://www.tiktok.com/@syq.starboy">
                <div className=" w-16 h-16 border-2 border-black rounded-lg flex items-center justify-center cursor-pointer">
                  <Image
                    src="/Image/TikTok.png"
                    width={42}
                    height={42}
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>

          <div id="skills" className="flex items-center justify-center">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl">
              My{" "}
              <span className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl">
                Skills
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10 lg:gap-x-24 lg:gap-y-12 justify-items-center">
            <div className="w-full max-w-48 aspect-square border-2 border-black rounded-xs flex items-center justify-center">
              <div>
                <Image
                  src="/Image/Github-Photoroom.png"
                  width={94}
                  height={94}
                  alt=""
                  className="mt-3"
                />
                <p className="text-center font-sans font-extrabold">GitHub</p>
              </div>
            </div>
            <div className="w-full max-w-48 aspect-square border-2 border-black rounded-xs flex items-center justify-center">
              <div className="space-y-5">
                <Image
                  src="/Image/HTML5.png"
                  width={67}
                  height={67}
                  alt=""
                  className="mt-4"
                />
                <p className="text-center font-sans font-extrabold">HTML5</p>
              </div>
            </div>
            <div className="w-full max-w-48 aspect-square border-2 border-black rounded-xs flex items-center justify-center">
              <div className="space-y-3">
                <Image
                  src="/Image/Tailwindcss.svg"
                  width={80}
                  height={80}
                  alt=""
                  className="ml-3 mt-2"
                />
                <p className="text-center font-sans font-extrabold">
                  Tailwind CSS
                </p>
              </div>
            </div>
            <div className="w-full max-w-48 aspect-square border-2 border-black rounded-xs flex items-center justify-center">
              <div className="space-y-4">
                <Image
                  src="/Image/CSS-Photoroom.png"
                  width={72}
                  height={72}
                  alt=""
                  className="mt-4"
                />
                <p className="text-center font-sans font-extrabold">CSS</p>
              </div>
            </div>
            <div className="w-full max-w-48 aspect-square border-2 border-black rounded-xs flex flex-col items-center justify-center">
              <div className="space-y-5">
                <Image
                  src="/Image/JavaScript.jpg"
                  width={64}
                  height={64}
                  alt=""
                  className="mt-6 ml-3"
                />
                <p className="text-center font-sans font-extrabold">
                  JavaScript
                </p>
              </div>
            </div>
            <div className="w-full max-w-48 aspect-square border-2 border-black rounded-xs flex items-center justify-center">
              <div className="space-y-2">
                <Image
                  src="/Image/React.png"
                  width={76}
                  height={76}
                  alt=""
                  className="mt-2"
                />
                <p className="text-center font-sans font-extrabold">React</p>
              </div>
            </div>
            <div className="w-full max-w-48 aspect-square border-2 border-black rounded-xs flex items-center justify-center">
              <div className="space-y-4">
                <Image
                  src="/Image/nodejs.png"
                  width={52}
                  height={52}
                  alt=""
                  className="mt-4"
                />
                <p className="text-center font-sans font-extrabold">Node.js</p>
              </div>
            </div>
            <div className="w-full max-w-48 aspect-square border-2 border-black rounded-xs flex items-center justify-center">
              <div className="space-y-3">
                <Image
                  src="/Image/Python.jpg"
                  width={65}
                  height={65}
                  alt=""
                  className="mt-4"
                />
                <p className="text-center font-sans font-extrabold">Python</p>
              </div>
            </div>
            <div className="w-full max-w-48 aspect-square border-2 border-black rounded-xs flex items-center justify-center">
              <div className="space-y-3">
                <Image
                src="/Image/Java.png"
                width={65}
                height={65}
                alt=""
                />
                <p className="text-center font-sans font-extrabold">Java</p>
              </div>
            </div>
            <div className="w-full max-w-48 aspect-square border-2 border-black rounded-xs flex items-center justify-center">
              <div className="space-y-4">
                <Image
                  src="/Image/php.png"
                  width={92}
                  height={92}
                  alt=""
                  className="mt-8"
                />
                <p className="text-center font-sans font-extrabold">PHP</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="w-full min-h-screen flex flex-col bg-black px-4">
        <h1 className="text-white text-center text-3xl sm:text-4xl lg:text-5xl font-sans mt-16 sm:mt-24">
          My{" "}
          <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Experience
          </span>
        </h1>
      </div>
    </>
  );
}
