import React from "react";
import Work from "./props/Work";

import "./Works.css";

function Works(props) {
  const work = {
    siteTitle: ["COUES"],
    siteExplain: ["fk;asjbnjbscisgnjsbdjg"],
    siteImg: [""],
  };

  return (
    <div className={`works ${props.addWorksCss}`}>
      <p className="work-title">Works</p>
      <div className="sites">
        <Work
          siteTitle={work.siteTitle}
          siteExplain={work.siteExplain}
          siteImg={work.siteImg}
        />
        <div className="line">l</div>
        <Work
          siteTitle={work.siteTitle}
          siteExplain={work.siteExplain}
          siteImg={work.siteImg}
        />
        <div className="line">l</div>
        <Work
          siteTitle={work.siteTitle}
          siteExplain={work.siteExplain}
          siteImg={work.siteImg}
        />
      </div>
    </div>
  );
}

export default Works;
