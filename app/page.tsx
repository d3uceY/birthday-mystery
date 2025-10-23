export default function Home() {
  return (
    <div className="min-h-screen p-6">
      <main className="border border-black p-8">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="flex flex-col text-center"><span className="font-semibold uppercase text-5xl">Happy Birthday </span>
              <span className="font-medium text-5xl">To me</span></h1>

          </div>

          <div className="text-center text-2xl text-balance">
            <span className="font-semibold">Hint:</span> Look for the clues
            <br />
            to find the code
          </div>

          <form className="flex flex-col gap-6">
            <input type="text" placeholder="Enter code" className="input p-2 focus:outline-0 lined thin" />
            <button type="submit" className="button p-2 focus:outline-0 lined thick uppercase font-semibold !bg-[#EFB45C]">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}
