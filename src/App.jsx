import React, { useState } from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
const App = () => {
  const [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.9,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:-1,
      ease:"Expo.easeInOut"
    }),
    gsap.to(".sky",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:-.8,
      ease:"Expo.easeInOut"
    }),
    gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:-.8,
      ease:"Expo.easeInOut"
    }),
    gsap.to(".girl", {
      scale:1,
      x: "-50%",
      
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    // gsap.to(".downloadd",{
    //   delay:1,
    //   duration:1,
      
    //   ease:'power2.inOut'
    // })
    
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.4) * 70;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      }),
        gsap.to(".sky", {
          x: xMove,
        }),
        gsap.to(".bg", {
          x: xMove * 1.7,
        });
    });
  }, [showContent]);
  return (
    <>
      <div className="svg flex justify-center items-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/assets/bg (1).png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]  ">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
              <div className="logo flex gap-6">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-15 h-[6px] bg-white"></div>
                  <div className="line w-8 h-[6px] bg-white"></div>
                  <div className="line w-5 h-[6px] bg-white"></div>
                </div>
                <h3 className="text-3xl text-white -mt-[8px] leading-none">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className=" imagesdiv relative w-full h-screen overflow-hidden ">
              <img
                className=" absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="/assets/sky.png"
                alt=""
              />
              <img
                className=" absolute bg scale-[1.8]  rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="/assets/bg (1).png"
                alt=""
              />
              <div className="text  text-white flex flex-col gap-3 absolute top-10 left-1/2 -translate-x-1/2  ">
                <h1 className="text-[8rem] leading-none -ml-20">grand</h1>
                <h1 className="text-[8rem] leading-none -ml-0">theft</h1>
                <h1 className="text-[8rem] leading-none -ml-20">auto</h1>
              </div>
              <img
                className="absolute girl -bottom-[50%]  left-1/2 -translate-x-1/2 scale-[.2] rotate-[10deg]   "
                src="/assets/girlbg.png"
                alt=""
              />
            </div>

            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-xl ri-arrow-down-line"></i>
                <h3 className="text-l font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[35px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="/assets/ps5.png"
                alt=""
              />
              <img className="absolute h-[80px] top-1/2 right-1/11 -translate-x-1/2 -translate-y-1/2 " src="../public/assets/logo18.png" alt="" />
            </div>
          </div>
          <div className="w-full text-white h-screen flex items-center justify-center bg-black">
            <div className="cntr flex text-white w-full h-[80%] overflow-hidden">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute left-1/2 top-1/2 scale-[1.1] -translate-x-1/2 -translate-y-1/2 "
                  src="/assets/imag.png"
                  alt=""
                />
              </div>
            <div className="rg w-[40%] py-0">
              <h1 className="text-5xl">Still Running,</h1>
              <h1 className="text-5xl">Not Hunting</h1>
              <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio possimus, asperiores nam, omnis inventore nesciunt a
                architecto eveniet saepe, ducimus necessitatibus at voluptate.
              </p>
              <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius
                illum fugit eligendi nesciunt quia similique velit excepturi
                soluta tenetur illo repellat consectetur laborum eveniet eaque,
                dicta, hic quisquam? Ex cupiditate ipsa nostrum autem sapiente.
              </p>
              <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius
                illum fugit eligendi nesciunt quia similique velit excepturi
                soluta tenetur illo repellat consectetur laborum eveniet eaque,
                dicta, hic quisquam? Ex cupiditate ipsa nostrum autem sapiente.
              </p>
              <button className="downloadd bg-yellow-500 px-10 py-10 text-[#7240c2] mt-10 text-4xl crusor-pointer  ">
                Download Now
              </button>
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
