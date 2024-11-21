export default function BackgroundVideo() {
  return (
    <div className='relative overflow-hidden w-full h-full z-0'>
      <div className='w-full h-full absolute bg-black bg-opacity-65'></div>
      <video preload="auto" loop muted autoPlay >
        <source src="/Background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}