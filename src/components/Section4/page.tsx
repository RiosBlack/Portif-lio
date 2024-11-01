import SocialCard from "../ui/social-Card";
import TypingAnimation from "../ui/typing-animation";
import ImagePerfil from "./imagePerfil";

export default function Page() {

  return (
    <div
      className='bg-roxoEscuro bg-opacity-70 border-y-2 border-gray-900 mt-[900px] py-20'
    >
      <div
        className="flex flex-col items-center"
      >
        <ImagePerfil />
        <TypingAnimation
          className="text-roxo text-3xl my-5 px-40 mb-7"
          text="E ai vamos conversar?"
          delay={0}
        />
        <div className="flex space-x-14" id='contato'>
          <div className="flex flex-col items-center">
            <SocialCard
              delay={6000}
              icon="instagram"
              link="https://www.instagram.com/riosblack/"
              key={0}
            />
            <TypingAnimation
              className="text-white text-3xl my-2"
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
              className="text-white text-3xl my-2"
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
              className="text-white text-3xl my-2"
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
              className="text-white text-3xl my-2"
              text="WhatsApp"
              delay={8000}
            />
          </div>
        </div>
      </div>
    </div >
  )
}