"use client"; // this is a client component
import React, {useState} from "react";
import Link from "next/link";

const Extrasection = () => {
  // const []
  return (
    <section id="extra" className="centered">
      <div className="content">
        <div className="footer-intro center">
          <span className="water1">
            <span className="water2 centered">
              <img src="/imgs/water-scene.png" alt="" />
            </span>
          </span>
        </div>
        <div id="faqs" className="section FAQs center">
          <div className="center">
            <h2>FAQs</h2>
          </div>
          <div className="row">
            <div className="one-half column">
              <div className="FAQ" style={{ visibility: "visible" }}>
                <div className="question">
                  <strong>What is Poofyland?</strong>
                </div>
                <div className="answer">
                  Poofyland is a PVP, turn-based, NFT game that features cute
                  and adorable NFT characters known as Poofies. It offers a
                  reward system for winning players inside the arena who put
                  their gold in the table and fight to win the reward at stake.
                </div>
              </div>
            </div>
            <div className="one-half column">
              <div className="FAQ" style={{ visibility: "visible" }}>
                <div className="question">
                  <strong>What is Poofyland?</strong>
                </div>
                <div className="answer">
                  Poofyland is a PVP, turn-based, NFT game that features cute
                  and adorable NFT characters known as Poofies. It offers a
                  reward system for winning players inside the arena who put
                  their gold in the table and fight to win the reward at stake.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extrasection;
