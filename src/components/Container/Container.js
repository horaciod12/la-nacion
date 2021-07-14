import React from "react";
import SingleArticle from "../SingleArticle/SingleArticle";

import classes from "../Container/Container.module.css";

const Container = (props) => {
  return (
    <React.Fragment>
      <div className={classes.containerClass}>
        {props.items.slice(0, 3).map((item) => (
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
        {props.items.slice(3, 6).map((item) => (
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
