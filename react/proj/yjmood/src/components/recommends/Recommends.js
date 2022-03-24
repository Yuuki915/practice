import React from "react";
import Recommend from "./Recommend";

import topsRecom from "../../images/tops-recom.jpg";
import cardiganRecom from "../../images/cardigan-img.png";
import cardiganBgRecom from "../../images/cardigan-img-bg.jpg";

import "./Recommends.css";

export default function Recommends() {
  const items = {
    src: [topsRecom, cardiganRecom, cardiganBgRecom],
    btns: [
      "SHOP ALL PRODUCTS",
      "SHOP ALL OUTER",
      "SHOP KNITWEAR ITEMS",
      "SHOP SET ITEMS",
    ],
    h2: ["THE BUTTERFLY CROP TOP", "HAJI BOLERO CARDIGAN", "SET SERIES"],
  };
  const recomStyle1 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const recomStyle2 = {
    margin: "auto 0",
  };
  const h2BtnStyle1 = {
    width: "250px",
    textAlign: "right",
    marginLeft: "5rem",
  };
  const h2BtnStyle2 = {
    width: "250px",
    textAlign: "left",
    marginRight: "5rem",
  };
  const imgContainerStyle = {
    position: "relative",
  };
  const imgBgStyle = {
    position: "absolute",
    right: "0",
    zIndex: "-1",
  };
  const imgStyle = {
    position: "absolute",
    top: "4rem",
    right: "4rem",
  };
  const h2Style = {
    // position: "absolute",
    // top: "50%",
    // left: "0",
    margin: "auto 0",
  };

  return (
    <div className="recommends">
      <Recommend
        style={recomStyle1}
        textStyle={h2BtnStyle1}
        src={items.src[0]}
        btn={items.btns[1]}
        h2={items.h2[0]}
      />

      <Recommend
        style={recomStyle2}
        textStyle={h2BtnStyle2}
        imgContainerStyle={imgContainerStyle}
        imgStyle={imgStyle}
        imgBgStyle={imgBgStyle}
        h2Style={h2Style}
        src={items.src[1]}
        srcBg={items.src[2]}
        btn={items.btns[2]}
        h2={items.h2[1]}
      />

      <Recommend
        style={recomStyle1}
        textStyle={h2BtnStyle1}
        src={items.src[0]}
        btn={items.btns[3]}
        h2={items.h2[2]}
      />
    </div>
  );
}
