import React from "react";

import classes from "./SingleArticle.module.css";

const SingleArticle = (props) => {
  return (
    <React.Fragment>
      <div className={classes.cardRegular}>
        <div className={classes.card}>
          <div className={classes.cardBody}>
            <div className={classes.cardTitle}>
              {props.title}
            </div>
            {props.bajada ? <div className={classes.bajada}>
              {props.bajada}
            </div> : null}
            <div className={classes.cardMarquesina}>
              <div className={classes.cardMarquesina1}>
                <div className={classes.marquesina1}>{props.marquesina}</div>
              </div>
            </div>
          </div>
          {props.img ? <div className={classes.cardImg}></div> : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleArticle;
