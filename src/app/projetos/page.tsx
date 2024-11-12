import PhotoSection1 from "./components/photoSection1";

export default function page() {
  return (
    <>
      <div className="bg-transparent w-screen h-80">background</div>
      <div>
        <h1>Titulo</h1>
        <button>Botão</button>
      </div>
      <div>
        <div>Descrição</div>
        <div>Tecnologias</div>
      </div>
      <div>
        <PhotoSection1 />
      </div>
    </>
  )
}