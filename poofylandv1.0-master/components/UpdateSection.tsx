"use client"; // this is a client component
import React from "react";
import Link from "next/link";
import { wrap } from "module";

const Updatesection = () => {
  return (
    <section id="updates" className="section centered">
      <div className="content">
        <div className="center">
          <h2>DEVELOPMENT HIGHLIGHTS</h2>
        </div>
        <div className="gallery-container center">
          <p className="gallery-note">
            Current game development progress screenshots. Follow our social
            media accounts for more Poofyland updates.
            <br />
            <br />
          </p>
          <div style={{display:"flex", flexWrap:"wrap"}}>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updatesection;
