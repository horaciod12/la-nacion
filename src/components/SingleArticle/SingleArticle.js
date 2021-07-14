import React from "react";

import classes from "./SingleArticle.module.css";

const SingleArticle = (props) => {
  return (
    <React.Fragment>
      <div className={classes.article}>
        <div>
          {props.src && props.type === "1" ? (
            <img {...props} className={classes.imgA} alt={props.title} />
          ) : null}
        </div>
        <div>
          <span className={classes.lead}>{props.lead}</span>
          <span>{props.title}</span>
        </div>
        <div>
          {props.titleAutor ? (
            <p>
              <strong>{props.titleAutor}</strong>
            </p>
          ) : null}
        </div>
        {props.imgAutor ? (
          <div className={classes.containerImgAutor}>
            <img {...props} alt={props.description} className={classes.imgAutor} />
          </div>
        ) : null}
        {props.description ? (
          <div>
            <p>{props.description}</p>{" "}
          </div>
        ) : null}
        <div>
          <strong>{props.marquesina}</strong>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleArticle;
