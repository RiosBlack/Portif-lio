import Image from 'next/image'
import React from 'react'

type Props = {}

export default function LinguagensIcons({ }: Props) {
  return (
    <div className='absolute z-10 w-96 h-96 top-[25%] right-[15%]'>
      <Image
        alt='Linhas'
        src={'/linhas.svg'}
        fill
        className='absolute z-10'
      />
      <Image
        alt='AwsIco'
        src={'/IconAws.svg'}
        width={50}
        height={50}
        className='absolute z-10 left-40 top-40'
      />
      <Image
        alt='DockerIco'
        src={'/IconDocker.svg'}
        width={50}
        height={50}
        className='absolute z-10 left-20 top-8'
      />
      <Image
        alt='GitHubIco'
        src={'/IconGitHub.svg'}
        width={50}
        height={50}
        className='absolute z-10 top-72 left-20'
      />
      <Image
        alt='JavaIco'
        src={'/IconJava.svg'}
        width={50}
        height={50}
        className='absolute z-10 left-52 top-20'
      />
      <Image
        alt='JavaScriptIco'
        src={'/IconJavaScript.svg'}
        width={50}
        height={50}
        className='absolute z-10 left-80'
      />
      <Image
        alt='NextJsIco'
        src={'/IconNextJs.svg'}
        width={50}
        height={50}
        className='absolute z-10 left-60 bottom-28'
      />
      <Image
        alt='ReacJsIco'
        src={'/IconReacjs.svg'}
        width={50}
        height={50}
        className='absolute z-10 left-20 bottom-52'
      />
      <Image
        alt='TsIco'
        src={'/IconTs.svg'}
        width={50}
        height={50}
        className='absolute z-10 right-3 bottom-14'
      />
    </div>
  )
}