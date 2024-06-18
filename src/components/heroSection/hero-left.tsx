import HandPointRight from "../../assets/HandPointRight.png"
import HealthCare from "../../assets/healthCare.svg"
import VideoPlayer from "../../assets/VideoPlayer.svg"

const sharedClasses = {
  blueBackground: "bg-blue-700",
  blueBorder: "border-blue-700",
  blueText: "text-blue-700",
  blueHover: "hover:bg-blue-900",
}

const HeroLeft = () => {
  return (
    <div className="flex flex-col justify-center pl-7 h-screen ">
      <Welcome />
      <HeroText />
      <CTA />
    </div>
  )
}

const Welcome = () => {
  return (
    <div
      className={`relative border-2 ${sharedClasses.blueBorder} w-fit border-w left-5 px-5 py-[6px] flex items-center`}
    >
      <div
        className={`absolute -top-[6px] -left-[6px] w-2 h-2 ${sharedClasses.blueBackground}  rounded-full`}
      ></div>
      <div
        className={`absolute -top-[6px] -right-[6px] w-2 h-2 ${sharedClasses.blueBackground} rounded-full`}
      ></div>
      <div
        className={`absolute -bottom-[6px] -left-[6px] w-2 h-2 ${sharedClasses.blueBackground} rounded-full`}
      ></div>
      <div
        className={`absolute -bottom-[6px] -right-[6px] w-2 h-2 ${sharedClasses.blueBackground} rounded-full`}
      ></div>
      <div className="flex  items-center">
        <div className="absolute -left-5 ">
          <img className="h-5" src={HandPointRight} alt="HandPointRight" />
        </div>
        <span className={`  font-medium ${sharedClasses.blueText}`}>
          Welcome to DocTrue
        </span>
      </div>
    </div>
  )
}

const HeroText = () => {
  return (
    <div className="py-10">
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-5xl text-black">An A-Z OPD</h1>
        <img className="h-11" src={HealthCare} alt="HealthCare" />
      </div>

      <h2 className="font-bold text-5xl py-[10px] text-blue-700">
        Automation Software
      </h2>
      <h2 className="font-bold text-5xl">for Your Practice.</h2>

      <p className="text-zinc-600 pt-5 font-semibold ">
        Helping Clinics & Hospitals Staffs to Operate Efficiently.
      </p>
    </div>
  )
}

const CTA = () => {
  return (
    <div className="pt-1">
      <div className="flex space-x-3 basis-1/4 ">
        <a
          href="#"
          className="bg-blue-500 text-white px-7 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
        >
          Start your free trial today!
        </a>
        <a
          href="#"
          className="flex gap-2 border border-blue-500 text-blue-500 px-7 py-2 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition"
        >
          <img src={VideoPlayer} alt="Video Player" />
          <span>Watch Video</span>
        </a>
      </div>
    </div>
  )
}

export default HeroLeft
