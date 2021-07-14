import Container from "./components/Container/Container";
import ModuloContainer from "./components/ModuloContainer/ModuloContainer";

// import img from "./img/img.jpg";
// import imgAutor from "./img/3037063.webp";

const dummyData = [
  {
    id: "1",
    type: "1",
    img: true,
    title:
      "Volanta. Esto es un titulo de la novedad con unas cuantas lineas que ocupar, esto es un titulo de la novedad",
    marquesina: "Marquesina 1",
  },
  {
    id: "2",
    type: "1",
    img: true,
    title:
      "Volanta. Esto es un titulo de la novedad con unas cuantas lineas que ocupar, esto es un titulo de la novedad",
    marquesina: "Marquesina 1",
  },
  {
    id: "3",
    type: "2",
    bajada:
      "Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial.",
    title:
      "Volanta. Esto es un titulo de la novedad con unas cuantas lineas que ocupar, esto es un titulo de la novedad",
    marquesina: "Marquesina 1",
  },
  {
    id: "4",
    type: "1",
    img: true,
    title:
      "Volanta. Esto es un titulo de la novedad con unas cuantas lineas que ocupar, esto es un titulo de la novedad",
    marquesina: "Marquesina 1",
  },
  {
    id: "5",
    type: "2",
    bajada:
      "Lana soñaba con volar a la luna. Todas las tardes se tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial.",
    title:
      "Volanta. Esto es un titulo de la novedad con unas cuantas lineas que ocupar, esto es un titulo de la novedad",
    marquesina: "Marquesina 1",
  },
  {
    id: "6",
    type: "1",
    img: true,
    title:
      "Volanta. Esto es un titulo de la novedad con unas cuantas lineas que ocupar, esto es un titulo de la novedad",
    marquesina: "Marquesina 1",
  },
];

const dummyModuleContainer = {
  marquee: "Marquee / Author",
  title:
    "Lead. Title esto es un titulo de la novedad con unas cuantas lineas que ocupar",
  subhead:
    "Subhead. Lana soñaba con volar a la luna. Todas las tardes se  tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de su propia nave espacial.",
  childs: [
    {
      title:
        "Lead. Title esto es un titulo de la novedad con unas cuantas lineas que ocupar",
      marquesina: "Marquee / Author",
    },
    {
      title:
        "Lead. Title esto es un titulo de la novedad con unas cuantas lineas que ocupar",
      marquesina: "Marquee / Author",
    },
  ],
};

const App = () => {
  return (
    <div>
      <Container items={dummyData} />
      <ModuloContainer items={dummyModuleContainer} />
    </div>
  );
};

export default App;
