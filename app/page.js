import Image from "next/image";

export default function Home() {
  
  return (
    <>
    <div className="text-center text-white lg:py-16 flex flex-col gap-2">
      <div className="flex gap-2 justify-center items-center">
       <h1 className=" text-center text-2xl font-bold ">Buy me a chai ? </h1>
       <span><img src="/tea.gif" alt="" width={50} height={50} /></span>
      </div>
       <p> A crowed funding website for creators . Get fund by your fans and followers</p>

       <div>
             <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start here</button>

             <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>


       </div>
    </div>

    <div className="bg-white opacity-5 h-1"></div>

    <div className="text-white py-16 px-5 ">
      yours fans can buy you a chai, coffee or any drink of your choice.

      <div className="flex justify-around py-10 ">
        <div className="flex flex-col items-center hover:bg-slate-900 p-2 rounded-lg w-[160px] ">
          <img src="/man.gif" alt="" width={150} height={150} className="bg-slate-800 rounded-full p-2 " />
          <h1 className="font-bold">Fund yourself</h1>
          <p></p>
        </div>
        <div className="flex flex-col items-center hover:bg-slate-900 p-2 rounded-lg w-[160px] ">
          <img src="/coin.gif" alt="" width={150} height={150} className="bg-slate-800 rounded-full p-2 " />
          <h1 className="font-bold">Fund yourself</h1>
          <p></p>
        </div>
        <div className="text-center flex flex-col items-center hover:bg-slate-900 p-2 rounded-lg w-[160px] ">
          <img src="/group.gif" alt="" width={150} height={150} className="bg-slate-800 rounded-full p-2 " />
          <h1 className="font-bold">Fans want to help</h1>
          <p className="text-sm">your fans are avilabe to help you</p>
        </div>
      </div>
    </div>

    <div className="bg-white opacity-5 h-1"></div>
    <div className="text-white py-16 px-5 flex justify-center ">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=UK4wjJGWOlpx8gWT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    </>
  );
}
