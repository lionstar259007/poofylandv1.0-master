"use client"; // this is a client component
import React from "react";
import Link from "next/link";

const Roadmapsection = () => {
  return (
    <section id="roadmap" className="section centered">
      <span className="cloud">
        <span className="cloud1">
          <img src="/imgs/clouds-1.png" alt="" className="clouds-bg" />
        </span>
      </span>
      <span className="cloud">
        <span className="cloud2">
          <img src="/imgs/clouds-2.png" alt="" className="clouds-bg" />
        </span>
      </span>
      <div className="content section-spacer">
        <div className="center roadmap-header">
          <span className="mini-header">Our Goal</span>
          <h2>ROADMAP</h2>
        </div>
        <div className="timeline">
          <ul>
            <li style={{ visibility: "visible" }}>
              <div>
                <span className="mini-header">Q4 2022</span>
                <ul className="roadmap-list">
                  <li style={{ visibility: "visible" }}>Team Onboarding</li>
                  <li style={{ visibility: "visible" }}>
                    Project Plan Approval
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Game and Character Design Conceptualization
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Implementation of Game Play and Workflow Designs
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Game Characters and Map Prototype Finalization
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Game Design and Asset Licensing
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Completion of Documents for Mobile App Deployment
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Game Economic Design and Implementation
                  </li>
                </ul>
              </div>
            </li>
            <li style={{ visibility: "visible" }}>
              <div>
                <span className="mini-header">Q1 2023</span>
                <ul className="roadmap-list">
                  <li style={{ visibility: "visible" }}>
                    Official Release of marketing Site and Content
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Trailers and Teasers of In-Game Story Outline
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Implementation of whitepaper and NFT Smart contract
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Internal Phase: Game and Shop Testing
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Marketing and Community events starts
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Social Media and Press Release Publications
                  </li>
                </ul>
              </div>
            </li>
            <li style={{ visibility: "visible" }}>
              <div>
                <span className="mini-header">Q2 2023</span>
                <ul className="roadmap-list">
                  <li style={{ visibility: "visible" }}>
                    Internal Phase: PVP and Training Ground Enhancement
                  </li>
                  <li style={{ visibility: "visible" }}>
                    NFT Minting (Beta Test)
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Game Enhancement: Internal Betatest
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Public Release: Training Ground, PVP Mode, Game Shop
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Ingame Economy integration
                  </li>
                </ul>
              </div>
            </li>
            <li style={{ visibility: "visible" }}>
              <div>
                <span className="mini-header">Q3 2023</span>
                <ul className="roadmap-list">
                  <li style={{ visibility: "visible" }}>
                    Official Game Launching (All Game Modes)
                  </li>
                  <li style={{ visibility: "visible" }}>Marketplace</li>
                  <li style={{ visibility: "visible" }}>NFT Public Sales</li>
                  <li style={{ visibility: "visible" }}>
                    Public Release: Fusion
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Community Contests and marketing Strategies
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Mobile Version Enhancement and improvements
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Acquire Official Partnership with Private Ventures
                  </li>
                </ul>
              </div>
            </li>
            <li style={{ visibility: "visible" }}>
              <div>
                <span className="mini-header">Q4 2023</span>
                <ul className="roadmap-list">
                  <li style={{ visibility: "visible" }}>PVP Tournaments</li>
                  <li style={{ visibility: "visible" }}>
                    Advance Game Accessories and Upgrades
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Additional Game Modes (TBA)
                  </li>
                  <li style={{ visibility: "visible" }}>
                    Community Engagement and marketing Strategies
                  </li>
                </ul>
              </div>
            </li>
            <li style={{ visibility: "visible" }}>
              <div>
                <span className="mini-header">Q1 2024</span>
                <ul className="roadmap-list">
                  <li style={{ visibility: "visible" }}>
                    Ongoing Development…
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <img src="/imgs/mountain.png" className="mountain" alt=""></img>
    </section>
  );
};

export default Roadmapsection;
