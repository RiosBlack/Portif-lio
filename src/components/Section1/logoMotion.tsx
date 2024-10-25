import Image from 'next/image'

type Props = {}

export default function LogoMotion({ }: Props) {
  return (
    <Image
      alt='Logo'
      src={'/logo.svg'}
      width={79}
      height={81}
      className='absolute z-10 left-[48%] m-2'
    />
  )
}