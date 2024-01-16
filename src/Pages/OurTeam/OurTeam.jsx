
import Marquee from "react-fast-marquee";
import {  FaFacebook, FaGithub } from "react-icons/fa";

const OurTeam = () => {
  return (
    <>
      <h1 className="text-center text-xl md:text-4xl lg:text-4xl font-bold uppercase text-gray-600 mb-10">
        Meet Our Project Team Member
      </h1>

      <Marquee>
        <div className="flex mt-24  mb-20 pb-20">
          <div className="card card-compact w-80 bg-base-100  hover:bg-slate-200 shadow-xl m-5 pt-5 relative  ">
            <div className="absolute h-[150px] w-[150px]  mx-auto rounded-full -left-0 -top-20 -right-1 avatar flex justify-center ">
              <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                <img
                  className="border-yellow-400"
                  src="https://i.ibb.co/mbsFpZ5/Whats-App-Image-2024-01-16-at-10-50-44-AM.jpg"
                />
              </div>
            </div>

            <div className="card-body mt-16 border-double">
              <h2 className="text-center text-2xl font-bold text-gray-700 uppercase">
                Shiham Bin Yusuf
              </h2>
              <h2 className="text-center font-bold text-gray-700">MERN-Stack Developer</h2>
              <p className="w-[240px] text-center mx-auto text-sm">
                {' '}
                👋 Hello, I am MERN stack developer. and i am love code. type code is most one of
                the amazing work to do.🌐✨ - Shiham123
              </p>
              <div className="flex justify-center items-center gap-5 ">
                <a
                  className="text-3xl text-[#1e40af]"
                  href="https://www.facebook.com/fairoz.rahaman.1"
                >
                  {' '}
                  <FaFacebook></FaFacebook>
                </a>

                <a className="text-3xl " href="https://github.com/Shiham123">
                  <FaGithub></FaGithub>
                </a>
                <a
                  className="text-3xl text-[#1e40af] italic font-bold"
                  href="https://shihamportfoliothree.netlify.app/"
                >
                  <img
                    className="w-[30px]"
                    src="https://static-00.iconduck.com/assets.00/adobe-portfolio-icon-2048x2048-9mr3hke4.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>

          <div className="card card-compact w-80 bg-base-100 shadow-xl m-5 pt-5 relative hover:bg-slate-200">
            <div className="absolute h-[150px] w-[150px]  mx-auto rounded-full -left-0 -top-20 -right-1 avatar flex justify-center border">
              <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  className=""
                  src="https://e1.pxfuel.com/desktop-wallpaper/627/132/desktop-wallpaper-niqab-girl-thumbnail.jpg"
                />
              </div>
            </div>
            <div className="mt-16 card-body">
              <h2 className="text-center text-2xl font-bold text-gray-700 uppercase">
                Sanjida Akter
              </h2>
              <h2 className="text-center font-bold text-gray-700">MERN-Stack Developer</h2>
              <p className="w-[250px] text-center mx-auto text-sm">
                {' '}
                👋 I'm Sanjida Akter, a dedicated web developer with a love for crafting digital
                experiences that blend functionality with aesthetics.🌐✨ - sanjidatanha09
              </p>
              <div className="flex justify-center items-center gap-5 ">
                <a
                  className="text-3xl text-[#1e40af]"
                  href="https://www.facebook.com/sanjida.tanha.10236"
                >
                  {' '}
                  <FaFacebook></FaFacebook>
                </a>

                <a className="text-3xl " href="https://github.com/sanjidatanha09">
                  <FaGithub></FaGithub>
                </a>
                <a
                  className="text-3xl text-[#1e40af] italic font-bold"
                  href="https://portfolio-client-flax.vercel.app/"
                >
                  <img
                    className="w-[30px]"
                    src="https://static-00.iconduck.com/assets.00/adobe-portfolio-icon-2048x2048-9mr3hke4.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>

          <div className="card card-compact w-80 bg-base-100 shadow-xl m-5 pt-5 relative hover:bg-slate-200">
            <div className="absolute h-[150px] w-[150px]  mx-auto rounded-full -left-0 -top-20 -right-1 avatar flex justify-center border">
              <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  className=""
                  src="https://i.ibb.co/Y7K0BHh/Whats-App-Image-2024-01-16-at-12-37-39-PM.jpg"
                />
              </div>
            </div>
            <div className="card-body mt-16">
              <h2 className="text-center text-xl font-bold text-gray-700 uppercase">
                Mohammad Shah Israil
              </h2>
              <h2 className="text-center font-bold text-gray-700">MERN-Stack Developer</h2>
              <p className="w-[270px] text-center mx-auto text-sm">
                👋"Hello ,I'm Shah Israil, an aspiring Mern stack developer about crafting engaging
                web interfaceswith a blend of innovation, design, and cutting-edge technology -🌐✨
                shahisrail
              </p>
              <div className="flex justify-center items-center gap-5">
                <a
                  className="text-3xl text-[#1e40af]"
                  href="https://www.facebook.com/shah.israil.96592"
                >
                  {' '}
                  <FaFacebook></FaFacebook>
                </a>

                <a className="text-3xl " href="https://github.com/shahisrail">
                  <FaGithub></FaGithub>
                </a>
                <a
                  className="text-3xl text-[#1e40af] italic font-bold"
                  href="https://devshahisrail.netlify.app/"
                >
                  <img
                    className="w-[30px]"
                    src="https://static-00.iconduck.com/assets.00/adobe-portfolio-icon-2048x2048-9mr3hke4.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>

          <div className="card card-compact w-80 bg-base-100 shadow-xl m-5 pt-5 relative hover:bg-slate-200">
            <div className="absolute h-[150px] w-[150px]  mx-auto rounded-full -left-0 -top-20 -right-1 avatar flex justify-center border">
              <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  className=""
                  src="https://i.ibb.co/9rmHpJf/Whats-App-Image-2024-01-16-at-10-50-44-AM-1.jpg"
                />
              </div>
            </div>
            <div className="card-body mt-16">
              <h2 className="text-center text-2xl font-bold text-gray-700 uppercase">
                Shaif Shajed Tonoy
              </h2>
              <h2 className="text-center font-bold text-gray-700">MERN-Stack Developer</h2>
              <p className="w-[270px] text-center mx-auto text-sm">
                👋 Hello, World!I'm a Web Developer.Passionate about crafting exceptional web
                experiences and turning ideas into reality through elegant code. 🌐✨ - tonoy3125
              </p>
              <div className="flex justify-center items-center gap-5 ">
                <a
                  className="text-3xl text-[#1e40af]"
                  href="https://www.facebook.com/mdshaifshajed.tonoy"
                >
                  {' '}
                  <FaFacebook></FaFacebook>
                </a>

                <a className="text-3xl " href="https://github.com/tonoy3125">
                  <FaGithub></FaGithub>
                </a>
                <a
                  className=" text-3xl text-[#1e40af] italic font-bold"
                  href="https://shaif-shajed-tonoy-portfolio.web.app/"
                >
                  <img
                    className="w-[30px]"
                    src="https://static-00.iconduck.com/assets.00/adobe-portfolio-icon-2048x2048-9mr3hke4.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>

          <div className="card card-compact w-80 bg-base-100 shadow-xl m-5 pt-5 relative hover:bg-slate-200">
            <div className="absolute h-[150px] w-[150px]  mx-auto rounded-full -left-0 -top-20 -right-1 avatar flex justify-center border">
              <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img className="" src="https://avatars.githubusercontent.com/u/132415640?v=4" />
              </div>
            </div>
            <div className="card-body mt-16">
              <h2 className="text-center text-2xl font-bold text-gray-700 uppercase">
                Subroto Das
              </h2>
              <h2 className="text-center font-bold text-gray-700">MERN-Stack Developer</h2>
              <p className="w-[250px] text-center mx-auto text-sm">
                👋 I want to contribute to the evolution of the web, which is not only visible, but
                also a seamless, accessible opportunity for users.🌐✨ - subroto23
              </p>
              <div className="flex justify-center items-center gap-5 ">
                <a
                  className="text-3xl text-[#1e40af]"
                  href="https://www.facebook.com/subroto.das.568847"
                >
                  {' '}
                  <FaFacebook></FaFacebook>
                </a>

                <a className="text-3xl " href="https://github.com/subroto23">
                  <FaGithub></FaGithub>
                </a>
                <a
                  className="text-3xl text-[#1e40af] italic font-bold"
                  href="https://portfolio-lovat-alpha-41.vercel.app/"
                >
                  <img
                    className="w-[30px]"
                    src="https://static-00.iconduck.com/assets.00/adobe-portfolio-icon-2048x2048-9mr3hke4.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>

          <div className="card card-compact w-80 bg-base-100 shadow-xl m-5 pt-5 relative hover:bg-slate-200">
            <div className="absolute h-[150px] w-[150px]  mx-auto rounded-full -left-0 -top-20 -right-1 avatar flex justify-center border">
              <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  className=""
                  src="https://i.ibb.co/Pc88jnp/Whats-App-Image-2024-01-16-at-1-49-56-PM.jpg"
                />
              </div>
            </div>
            <div className="card-body mt-16">
              <h2 className="text-center text-xl font-bold text-gray-700 uppercase">
                Mahibul Islam Ratul
              </h2>
              <h2 className="text-center font-bold text-gray-700">MERN-Stack Developer</h2>
              <p className="w-[270px] text-center mx-auto text-sm">
                {' '}
                🌐 Front-End Architect & React Maestro 💻 | Crafting seamless web applications ✨ |
                Reacting to challenges with flair, transforming ideas into dynamic user interfaces|
                🚀
              </p>
              <div className="flex justify-center items-center gap-5">
                <a
                  className="text-3xl text-[#1e40af]"
                  href="https://www.facebook.com/TheMahibulislam"
                >
                  {' '}
                  <FaFacebook></FaFacebook>
                </a>

                <a className="text-3xl " href="https://github.com/webdevratul">
                  <FaGithub></FaGithub>
                </a>
                <a
                  className="text-3xl text-[#1e40af] italic font-bold"
                  href="https://mahibulislamratul.netlify.app/"
                >
                  <img
                    className="w-[30px]"
                    src="https://static-00.iconduck.com/assets.00/adobe-portfolio-icon-2048x2048-9mr3hke4.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </>
  );
};

export default OurTeam;
