import SocialCard from "../ui/social-Card";
import TypingAnimation from "../ui/typing-animation";
import ImagePerfil from "./imagePerfil";

export default function Page() {

  return (
    <div
      className='bg-roxoEscuro bg-opacity-70 border-y-2 border-gray-900 mt-[600px] md:mt-[450px] lg:mt-[1100px] py-20 w-screen'
    >
      <div
        className="flex flex-col items-center"
      >
        <ImagePerfil />
        <TypingAnimation
          className="text-roxo text-2xl md:text-3xl my-5 px-40 mb-7"
          text="E ai vamos conversar?"
          delay={0}
        />
        <div className="grid justify-items-center content-center space-y-2 md:flex justify-center items-center md:space-x-14" id='contato'>
          <div className="flex flex-col items-center">
            <SocialCard
              delay={6000}
              icon="instagram"
              link="https://www.instagram.com/riosblack/"
              key={0}
            />
            <TypingAnimation
              className="text-white text-2xl md:text-3xl my-2"
              text="Instagram"
              delay={5000}
            />
          </div>
          <div className="flex flex-col items-center">
            <SocialCard
              delay={7000}
              icon="linkedin"
              link="https://linkedin.com/in/riosblack"
              key={0}
            />
            <TypingAnimation
              className="text-white text-2xl md:text-3xl my-2"
              text="Linkedin"
              delay={6000}
            />
          </div>
          <div className="flex flex-col items-center">
            <SocialCard
              delay={8000}
              icon="github"
              link="https://github.com/RiosBlack"
              key={0}
            />
            <TypingAnimation
              className="text-white text-2xl md:text-3xl my-2"
              text="GitHub"
              delay={7000}
            />
          </div>
          <div className="flex flex-col items-center">
            <SocialCard
              delay={9000}
              icon="whatsapp"
              link="https://wa.me/5575981414537?text=Ol%C3%A1%20Douglas,%20voc%C3%AA%20pode%20me%20ajudar?"
              key={0}
            />
            <TypingAnimation
              className="text-white text-2xl md:text-3xl my-2"
              text="WhatsApp"
              delay={8000}
            />
          </div>
        </div>
      </div>
    </div>
  )
}