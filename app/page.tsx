"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { playSound } from "./helper/playSound";


const schema = z.object({
  code: z
    .string()
    .min(1, "type in some characters, bro")
    .regex(/^\d{7}$/, "Code must be exactly 7 digits"),
});

type FormData = z.infer<typeof schema>;


export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsReady(true);
  }, []);


  const shakeInput = () => {
    if (inputRef.current) {
      gsap.fromTo(
        inputRef.current,
        { x: 0 },
        {
          x: -20,
          duration: 0.1,
          repeat: 5,
          yoyo: true,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.set(inputRef.current, { x: 0 });
          }
        }
      );
    }
  };


  useGSAP(() => {
    if (!isReady) return;
    const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });


    tl.fromTo(".ribbon-img",
      { y: "-30vh" },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    )
      .fromTo(".main-content",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.8 },
        "-=0.2"
      )
      .fromTo(".question-img",
        { opacity: 0, scale: 0, rotation: -30 },
        { opacity: 1, scale: 1, rotation: -10, duration: 0.5 },
        "-=0.4"
      )
      .fromTo(".bulb-img",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(".magnifier-img",
        { opacity: 0, scale: 0, rotation: -30 },
        { opacity: 1, scale: 1, rotation: 15, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(".gift-img",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(".dashed-img",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.4 },
        "-=0.2"
      )
      .fromTo(".xpaper-img",
        { opacity: 0, scale: 0, rotation: -30 },
        { opacity: 1, scale: 1, rotation: -8, duration: 0.5 },
        "-=0.2"
      )
      .fromTo(".baloon-img",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.4");


    gsap.to(".baloon-img", {
      y: -15,
      rotation: 3,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1
    });

    gsap.to(".question-img", {
      y: -8,
      rotation: -12,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1.2
    });

    gsap.to(".bulb-img", {
      rotation: 5,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1.5
    });

  }, [isReady]);


  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      code: ""
    }
  });


  const onSubmit = (data: FormData) => {

    if (Number(data.code) !== 8212735) {
      shakeInput();
      playSound("/sound/failed.mp3");

      const errorArray = [
        "it's not supposed to be that easy, right?",
        "nawa for you o, brrooo",
        "this shit ain't working fam",
        "you must really want that 15k because wth?",
        "wait first, make i call igwe",
        "i think it's time you give up, lil bro",
        "just beg me for the answer",
        "the hint is right there, bro",
        "omo, e don be",
        "e go enter bro, you do Hallelujah challenge",
        "guy, calm down, you're making it too hard",
        "bro, just type the code",
        
      ]

      const randomizer = Math.floor(Math.random() * errorArray.length);
      const randomMessage = errorArray[randomizer];

      setError("code", {
        type: "manual",
        message: randomMessage,
      });
    } else {
      playSound("/sound/yay.mp3", true, .5);
      setIsCorrect(true);
    }

  };

  useEffect(() => {
    if (errors.code) {
      shakeInput();
      playSound("/sound/failed.mp3");
    }
  }, [errors]);

  return (
    <div className="min-h-screen md:p-6 p-2">
      {isCorrect && (
        <div className="bg-[rgb(0,0,0,0.5)] w-full h-full inset-0 fixed z-200 flex items-center justify-center p-4">
          <div className="bg-[#FDF7E7] rounded-lg p-4 max-w-sm">
            <img src="/image/dialog.png" alt="dialog" className="mb-4" />
            <div>
              Damn, you actually cracked this shit.
              Now I have to give you money, nawa.
              Screenshot this and send it to me, Jesse, to get your money
            </div>
          </div>
        </div>
      )}
      <main className="border-black h-full p-0 handdraw border-3 max-w-2xl mx-auto relative min-h-[760px] max-h-[760px] overflow-y-hidden overflow-x-hidden">
        {/* ribbon */}
        <div className="ribbon-img absolute top-0 left-0 w-[46%]">
          <img className="w-full" src="/image/strap-ribbon.png" alt="" />
        </div>
        {/* baloon */}
        <a href="https://www.youtube.com/watch?v=rfelvI_ikf4" target="_blank" className="baloon-img absolute hover:scale-125 z-20 cursor-pointer  top-8 right-10 md:h-56 h-40">
          <img className="h-full" src="/image/baloon.png" alt="" />
        </a>

        {/* question */}
        <a href="https://www.youtube.com/watch?v=Pw-0pbY9JeU" target="_blank" className="question-img absolute hover:scale-125 z-20 cursor-pointer  top-[10%] md:top-[20%] left-[10%] md:h-30 h-24">
          <img className="h-full" src="/image/question.png" alt="" />
        </a>

        {/* bulb */}
        <a href="https://www.youtube.com/watch?v=hEcoZrWPtJw" target="_blank" className="bulb-img absolute hover:scale-125 z-20 cursor-pointer  md:top-[34%] top-[42%] right-1 md:right-6 md:h-40 h-32">
          <img className="h-full" src="/image/bulb.png" alt="" />
        </a>

        {/* magnifier */}
        <a href="https://www.youtube.com/watch?v=ATTys6EyX_Q" target="_blank" className="magnifier-img absolute hover:scale-125 z-20 cursor-pointer  top-[50%] md:top-[44%] -left-4 md:left-6 md:h-36 h-28">
          <img className="h-full" src="/image/magnifier.png" alt="" />
        </a>

        {/* gift */}
        <a href="https://www.youtube.com/watch?v=0pwpP2QOW9g" target="_blank" className="gift-img absolute hover:scale-125 z-20 cursor-pointer  md:top-[67%] top-[75%] md:left-4 md:h-[250px] h-[150px]">
          <img className="h-full" src="/image/gift.png" alt="" />
        </a>

        {/* dashed-line */}
        <div className="dashed-img absolute  top-[74%] md:top-[67%] left-[30%] md:h-30 h-[20vw]">
          <img className="h-full" src="/image/dashed-line.png" alt="" />
        </div>

        {/* x-paper */}
        <a href="https://www.youtube.com/watch?v=OWKzRngush4" target="_blank" className="xpaper-img absolute hover:scale-125 z-20 cursor-pointer  md:top-[64%] top-[68%] -right-[4%] sm:right-[2%] md:h-50 h-30">
          <img className="h-full" src="/image/x-paper.png" alt="" />
        </a>

        <div className="flex flex-col gap-3 pt-16 main-content">
          <div>
            <h1 className="flex flex-col text-center"><span className="font-semibold uppercase md:text-7xl text-4xl z-10 text-black">Happy <br /> Birthday </span>
              <span className="font-medium text-5xl z-10 text-black">To me</span></h1>
          </div>

          <div className="text-center text-2xl text-balance z-10 text-black">
            <span className="font-semibold">Hint:</span> Look for the clues
            <br />
            to find the code
          </div>

          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div ref={inputRef} className="w-fit mx-auto">
              <input
                type="number"
                placeholder="Enter code"
                className="input p-2 focus:outline-0 lined thin no-spinner"
                {...register("code")}
              />
            </div>
            {errors.code && (
              <p className="text-red-700 text-center error">
                ⚠ {errors.code.message}
              </p>
            )}
            <button
              type="submit"
              className="button p-2 focus:outline-0 lined thick uppercase font-semibold !bg-[#EFB45C]"
            >
              Submit
            </button>
          </form>
        </div>
         <div className="text-xs z-10 text-black absolute bottom-3 right-0">
            <p className="font-semibold">v1.0.0</p>
            <p>Made by yours truly</p>
            <a href="https://github.com/d3uceY" target="_blank" className="underline">Deuce (Jesse)</a>
          </div>
      </main>
    </div>
  );
}
