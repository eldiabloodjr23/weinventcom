
import Image from "next/image"
const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-100 z-10 w-[240px] xl-w-[200px]">
      <Image src={'/bulb.png'} width={260} height={200} className="h-full w-full" />
    </div>
  )
}

export default Bulb