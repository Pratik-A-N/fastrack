/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import bgImage from '../public/Assets/bg.png';

export default function AppBgImg() {
  return <Image 
    src={bgImage}
    placeholder="blur"
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
      zIndex: -1
    }}
  />
}