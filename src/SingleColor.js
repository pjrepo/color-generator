import React, { useState } from "react";
import rgbToHex from "./Utils";

const SingleColor = (props) => {
  const [alert, setAlert] = useState(false);

  const { rgb, weight, index } = props;
  const bcg = rgb.join(",");
  console.log(bcg);

  return (
    <React.Fragment>
      <article style={{ background: `rgb(${bcg})` }}></article>
    </React.Fragment>
  );
};

export default SingleColor;
