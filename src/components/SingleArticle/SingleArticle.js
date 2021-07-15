import React from "react";

import classes from "./SingleArticle.module.css";

const SingleArticle = (props) => {
  if (props.type === "1" || props.type === "2") {
    return (
      <div className={classes.cardRegular}>
        <div className={classes.card}>
          <div className={classes.cardBody}>
            <div className={classes.cardTitle}>{props.title}</div>
            {props.bajada ? (
              <div className={classes.bajada}>{props.bajada}</div>
            ) : null}
            <div className={classes.cardMarquesina}>
              <div className={classes.cardMarquesina1}>
                <div className={classes.marquesina1}>{props.marquesina}</div>
              </div>
            </div>
          </div>
          {props.img ? <div className={classes.cardImg}></div> : null}
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.cardAutor}>
        <div className={classes.linea}>
          <div className={classes.separadorCita}></div>
        </div>
        <div className={classes.cuerpo}>
          <div className={classes.image}>
            <div className={classes.autor}>
              <div className={classes.insideAutor}>{props.insideAutor}</div>
            </div>
            <div className={classes.imgCircular}></div>
          </div>
          <div className={classes.title}>
            {props.title}
          </div>
        </div>
      </div>
    );
  }
};

export default SingleArticle;
