import React from "react";
import classes from "./ModuloContainer.module.css";

const ModuloContainer = (props) => {
  return (
    <div className={classes.focal}>
      <div className={classes.content}>
        <div className={classes.focalIzquierdo}>
          <div className={classes.cardInverted}>
            <div className={classes.cardBody}>
              <div className={classes.tag1}>
                <div className={classes.marquee}>
                  <div className={classes.marquesina}>
                    {props.items.marquee}
                  </div>
                </div>
              </div>
              <div
                className={classes.title}
                style={{ width: "470px", height: "120px" }}
              >
                {props.items.title}
              </div>
              <div
                className={classes.subhead}
                style={{ width: "470px", height: "72px", top: "128px" }}
              >
                {props.items.subhead}
              </div>
            </div>
            <div className={classes.imgCont}></div>
          </div>
          <div className={classes.separator}></div>
          <div className={classes.cards}>
            <div className={classes.cardRegular}>
              {props.items.childs.map((item, index) => (
                <React.Fragment key={index}>
                  <div className={classes.imgBodyChild}></div>
                  <div className={classes.cardBodyChild}>
                    <div className={classes.titleChild}>
                      {item.title}
                    </div>
                    <div className={classes.marquee}>
                      <div className={classes.marquesina}>{item.marquesina}</div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuloContainer;
