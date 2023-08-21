import Link from "next/link"
import {RiFacebookLine, RiInstagramLine} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className=" flex items-center gap-x-3 text-lg">
      <Link href={''} className=" hover:text-accent transition-all duration-300">
      <RiFacebookLine />
      </Link>
      <Link href={''} className=" hover:text-accent transition-all duration-300">
      <RiInstagramLine />
      </Link>
    </div>
  )
}

export default Socials