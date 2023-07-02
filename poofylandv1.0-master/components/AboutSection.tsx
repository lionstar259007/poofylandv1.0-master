"use client"; // this is a client component
import React from "react";
import Script from "next/script";
import { useState, useEffect } from "react";

const AboutSection = () => {
  return (
    <>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js"
      ></Script>
      <section id="about">
        <div className="content">
          <section className="centered">
            <div className="about-container">
              <img
                src="/imgs/environment-float.png"
                className="about-logo"
                data-aos="zoom-in"
              />
              <div>
                <span className="mini-header">About</span>
                <h1>POOFYLAND</h1>
                <p>
                  Poofyland is a turn-based NFT 3D mobile game where players can
                  explore a magical world filled with Poofies, creatures with
                  different elemental powers. The game offers various activities
                  such as duels, training, and leveling up skills. One of the
                  unique features of the game is the integration of a fair-play
                  rewarding system, which allows players to earn by winning
                  battles against other players in the arena. It supports
                  various currencies including crypto, making it accessible
                  worldwide. Poofyland is an entertaining and immersive gaming
                  experience suitable for players of all skill levels. Available
                  on Google Play and Apple App Store soon.
                </p>
                <img
                  className="down-btns"
                  src="/imgs/download.png"
                  alt="download"
                ></img>
                <br />
                <a
                  className="poofy-btn"
                  href="https://poofyland.gitbook.io/poofyland/"
                  target="_blank"
                >
                  WHITEPAPER
                </a>
                <button className="poofy-btn m-0">TEASER</button>
              </div>
            </div>
          </section>
          <section id="nft" className="section centered">
            <div className="u-full-width">
              <div className="center section-spacer">
                <span className="mini-header">The Poofies</span>
                <h2>NFT</h2>
              </div>
              <div className="poofies">
                <div className="poofy-container">
                  <div className="model"></div>
                  <div>
                    <strong>PYRO (FIRE)</strong>
                  </div>
                  <p className="poofy-description">
                    The masters of fire, capable of unleashing powerful flames
                    and scorching their opponents with intense heat. Great
                    choice for more aggressive playstyle.
                  </p>
                </div>

                <div
                  className="poofy-container"
                  style={{ visibility: "visible" }}
                >
                  <div className="model"></div>
                  <div>
                    <strong>AQUA (WATER)</strong>
                  </div>
                  <p className="poofy-description">
                    The water-based creatures that can manipulate water and ice
                    to freeze their enemies in place, heal their teammates, and
                    create a variety of other aquatic effects.
                  </p>
                </div>

                <div
                  className="poofy-container"
                  style={{ visibility: "visible" }}
                >
                  <div className="model"></div>
                  <div>
                    <strong>AERO (WIND)</strong>
                  </div>
                  <p className="poofy-description">
                    They specialize in manipulating the wind and air around
                    them, allowing them to move with lightning-fast speed and
                    fly high above their opponents.
                  </p>
                </div>

                <div
                  className="poofy-container"
                  style={{ visibility: "visible" }}
                >
                  <div className="model"></div>
                  <div>
                    <strong>TERRA (EARTH)</strong>
                  </div>
                  <p className="poofy-description">
                    The grounded creatures that can control the earth and its
                    elements, allowing them to create walls and obstacles to
                    protect themselves and their teammates.
                  </p>
                </div>
              </div>
              <p className="center">
                <a
                  href="https://poofyland.shop"
                  target="_blank"
                  className="poofy-btn m-0"
                >
                  SHOP
                </a>
              </p>
            </div>
          </section>
          <section id="modes" className="section centered">
            <div className="u-full-width">
              <div className="center">
                <span className="mini-header">Game</span>
                <h2>Modes</h2>
              </div>
              <div className="keen-slider mode-container"></div>
              <div className="modes-nav">
                <span className="dot">Arena</span>
                <span className="dot">Training</span>
                <span className="dot">Fusion</span>
              </div>
            </div>
          </section>
          <section id="events" className="section centered">
            <div className="u-full-width">
              <div className="center section-spacer">
                <span className="mini-header">Special</span>
                <h2>Events</h2>
              </div>
              <br />
              <div className="front-events-list">
                <div className="event">
                  <a href="/event/poofyland-referral-1682315393">
                    <div className="event-img">
                      <img
                        src="https://api.poofyland.io/storage/banner-photos/zuSmDKGvWLVkSA5OLl1f0v4bxHq8UEikvUvdS8PE.jpg"
                        alt=""
                      />
                    </div>
                    <h3>Beta Test Exclusive Slots!</h3>
                    <p>
                      The Beta test which was previously scheduled to launch on
                      the 23rd of June will be moved to a later date.
                    </p>
                  </a>
                </div>
                <div className="event">
                  <a href="/event/400-busd-pre-betatest-airdrop-1687239982">
                    <div className="event-img">
                      <img
                        src="https://api.poofyland.io/storage/banner-photos/JAhWfShwpRsnEDa2nVDFB0EWIdQctPRTlQJAQH4m.jpg"
                        alt=""
                      />
                    </div>
                    <h3>400$ Busd Pre-Betatest Airdrop 🚀</h3>
                    <p>
                      We are dropping more $$$ this month! Come and join
                      Poofyland's 🥳400$ BUSD PRE-BETATEST AIRDROP 🚀
                    </p>
                  </a>
                </div>
                <div className="event">
                  <a href="/event/beta-test-1683245621">
                    <div className="event-img">
                      <img
                        src="https://api.poofyland.io/storage/banner-photos/je6HYdC7Cqm62Q9YWSPLYChgM2xMGCzruO0YZoeD.jpg"
                        alt=""
                      />
                    </div>
                    <h3>Beta Test</h3>
                    <p>
                      Poofyland is a new NFT game that will be starting the beta
                      test on June. As a beta tester, you will have the
                      opportunity to explore the world of PoofyLand, interact
                      with other players, and provide feedback on your
                      experience.
                    </p>
                  </a>
                </div>
              </div>
              <p className="center">
                <br />
                <a className="poofy-btn m-0 active" href="/events">
                  MORE EVENTS
                </a>
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
