import React from "react";
import SingleArticle from "../SingleArticle/SingleArticle";
import img from "../../img/img.jpg";
import imgAutor from "../../img/3037063.webp"
import classes from "../Container/Container.module.css";

const Dummy_container_data = [
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

const Container = () => {
  return (
    <React.Fragment>
      <div className={classes.containerClass}>
        {Dummy_container_data.slice(0, 3).map((item) => (
          <SingleArticle
            key={item.id}
            type={item.type}
            src={item.img}
            lead={item.lead}
            title={item.title}
            marquesina={item.marquesina}
          />
        ))}
      </div>
      <div className={classes.containerClass}>
        {Dummy_container_data.slice(3, 6).map((item) => (
          <SingleArticle
            key={item.id}
            type={item.type}
            src={item.img}
            lead={item.lead}
            title={item.title}
            titleAutor={item.titleAutor}
            imgAutor={item.img}
            marquesina={item.marquesina}
            description={item.description}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Container;
