import USP from "../../assets/USP.svg"

export default function HeroRight() {
  return (
    <div className="flex items-center ">
      <img
        className="h-[450px] mr-9 cursor-pointer"
        src={USP}
        alt="Unique Selling Proposition"
      />
    </div>
  )
}
