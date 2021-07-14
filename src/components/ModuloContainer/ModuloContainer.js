import React from "react";
import classes from "./ModuloContainer.module.css";

const ModuloContainer = () => {
  return (
    <div className={classes.focal}>
      <div className={classes.content}>
        <div className={classes.focalIzquierdo}>
          <div className={classes.cardInverted}>
            <div className={classes.cardBody}>
              <div className={classes.tag1}>
                <div className={classes.marquee}>
                  <div className={classes.marquesina}>Marquee / Author</div>
                </div>
              </div>
              <div
                className={classes.title}
                style={{ width: "470px", height: "120px" }}
              >
                Lead. Title esto es un titulo de la novedad con unas cuantas
                lineas que ocupar
              </div>
              <div
                className={classes.subhead}
                style={{ width: "470px", height: "72px", top: "128px" }}
              >
                Subhead. Lana soñaba con volar a la luna. Todas las tardes se
                tumbaba en su cama y se imaginaba cómo sería su viaje a bordo de
                su propia nave espacial.
              </div>
            </div>
            <div className={classes.imgCont}></div>
          </div>
          <div className={classes.separator}></div>
          <div className={classes.cards}>
            <div className={classes.cardRegular}>
              <div className={classes.imgBodyChild}></div>
              <div className={classes.cardBodyChild}>
                <div className={classes.titleChild}>
                  Lead. Title esto es un titulo de la novedad con unas cuantas
                  lineas que ocupar
                </div>
                <div className={classes.marquee}>
                  <div className={classes.marquesina}>Marquee / Author</div>
                </div>
              </div>
            </div>
            <div className={classes.cardRegular}>
              <div className={classes.imgBodyChild}></div>
              <div className={classes.cardBodyChild}>
                <div className={classes.titleChild}>
                  Lead. Title esto es un titulo de la novedad con unas cuantas
                  lineas que ocupar
                </div>
                <div className={classes.marquee}>
                  <div className={classes.marquesina}>Marquee / Author</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuloContainer;
