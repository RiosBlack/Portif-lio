import Image from "next/image"

interface Props {
  Link: string
}

export default function PhotoSection(Props: Props) {
  return (
    <Image
      src={Props.Link ?? ''}
      alt="Foto"
      fill
      quality={100}
    />
  )
}