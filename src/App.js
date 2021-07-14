import Container from "./components/Container/Container";
import ModuloContainer from "./components/ModuloContainer/ModuloContainer";

import img from "./img/img.jpg";
import imgAutor from "./img/3037063.webp"

const dummyData = [
  {
    id: "1",
    type: "1",
    img: img,
    lead: "Casi normal. ",
    title:
      "Así se vive en el país más vacunado del mundo y por qué tienta a cada vez más argentinos",
    marquesina: "Por Inés Beato Vassolo",
  },
  {
    id: "2",
    type: "1",
    img: img,
    lead: "Casi normal. ",
    title:
      "Así se vive en el país más vacunado del mundo y por qué tienta a cada vez más argentinos",
    marquesina: "Por Inés Beato Vassolo",
  },
  {
    id: "3",
    lead: "¡Se queda! ",
    title:
      "Messi llegó a un principio de acuerdo con Barcelona: los detalles de su nuevo contrato",
    marquesina: "Por Leandro Vesco",
    description:
      "El argentino y el club catalán habrían llegado a un acuerdo que se oficializaría en los próximos días, según adelanta la prensa española",
  },
  {
    id: "4",
    lead: "¡Se queda! ",
    title:
      "Messi llegó a un principio de acuerdo con Barcelona: los detalles de su nuevo contrato",
    marquesina: "Por Leandro Vesco",
    description:
      "El argentino y el club catalán habrían llegado a un acuerdo que se oficializaría en los próximos días, según adelanta la prensa española",
  },
  {
    id: "5",
    titleAutor: "Reparar el error de Trump en Haití",
    img: imgAutor,
    marquesina: "Por Andrés Oppenheimer",
  },
  {
    id: "6",
    titleAutor: "Reparar el error de Trump en Haití",
    img: imgAutor,
    marquesina: "Por Andrés Oppenheimer",
  },
];

const App = () => {
  return (
    <div>
      <Container items={dummyData} />
      <ModuloContainer />
    </div>
  );
}

export default App;
