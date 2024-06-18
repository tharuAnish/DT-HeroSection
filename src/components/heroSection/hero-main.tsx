import HeroLeft from "./hero-left"
import HeroRight from "./hero-right"

const HeroMain = () => {
  return (
    <div className="flex flex-col wrapper h-screen lg:flex-row items-center justify-between   ">
      <div className="basis-7/12  h-full">
        <HeroLeft />
      </div>
      <div className="basis-5/12  flex justify-end bg-amber-50 h-full">
        <HeroRight />
      </div>
    </div>
  )
}

export default HeroMain
