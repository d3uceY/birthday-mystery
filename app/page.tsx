export default function Home() {
  return (
    <div className="min-h-screen h-screen p-6">
      <main className="border-black h-full p-0 handdraw border-3 max-w-2xl mx-auto relative min-h-[760px] max-h-[760px]">
        {/* ribbon */}
        <div className="absolute transition-all top-0 left-0 w-[46%]">
          <img className="w-full" src="/image/strap-ribbon.png" alt="" />
        </div>
        {/* baloon */}
        <div className="absolute hover:scale-125 cursor-pointer transition-all top-8 right-10 h-56">
          <img className="h-full" src="/image/baloon.png" alt="" />
        </div>

        {/* question */}
        <div className="absolute hover:scale-125 cursor-pointer transition-all top-[20%] left-[10%] h-30">
          <img className="h-full" src="/image/question.png" alt="" />
        </div>

        {/* bulb */}
        <div className="absolute hover:scale-125 cursor-pointer transition-all top-[34%] right-6 h-40">
          <img className="h-full" src="/image/bulb.png" alt="" />
        </div>

        {/* magnifier */}
        <div className="absolute hover:scale-125 cursor-pointer transition-all top-[44%] left-6 h-36">
          <img className="h-full" src="/image/magnifier.png" alt="" />
        </div>

        {/* gift */}
        <div className="absolute hover:scale-125 cursor-pointer transition-all top-[67%] left-4 h-[250px]">
          <img className="h-full" src="/image/gift.png" alt="" />
        </div>

        {/* dashed-line */}
        <div className="absolute transition-all top-[67%] left-[30%] h-30">
          <img className="h-full" src="/image/dashed-line.png" alt="" />
        </div>

        {/* x-paper */}
        <div className="absolute hover:scale-125 cursor-pointer transition-all top-[67%] right-[7%] h-40">
          <img className="h-full" src="/image/x-paper.png" alt="" />
        </div>

        <div className="flex flex-col gap-3 pt-16">
          <div>
            <h1 className="flex flex-col text-center"><span className="font-semibold uppercase md:text-7xl text-4xl">Happy <br /> Birthday </span>
              <span className="font-medium text-5xl">To me</span></h1>
          </div>

          <div className="text-center text-2xl text-balance">
            <span className="font-semibold">Hint:</span> Look for the clues
            <br />
            to find the code
          </div>

          <form className="flex flex-col gap-3">
            <input type="text" placeholder="Enter code" className="input p-2 focus:outline-0 lined thin" />
            <button type="submit" className="button p-2 focus:outline-0 lined thick uppercase font-semibold !bg-[#EFB45C]">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}
