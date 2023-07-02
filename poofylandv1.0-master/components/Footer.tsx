"use client";
import {
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import {
  TbBrandTelegram,
  TbBrandTiktok,
  TbBrandDiscord,
  TbBrandMedium,
} from "react-icons/tb";

const Footer = () => {
  const socialIcons = [
    {
      name: "facebook",
      icon: <FiFacebook size={40} />,
      link: "https://twitter.com/PoofyLand",
    },
    {
      name: "twitter",
      icon: <FiTwitter size={40} />,
      link: "https://twitter.com/PoofyLand",
    },
    {
      name: "linkin",
      icon: <FiLinkedin size={40} />,
      link: "https://www.linkedin.com/company/poofylandnft/",
    },
    {
      name: "instagram",
      icon: <FiInstagram size={40} />,
      link: "https://www.instagram.com/poofyland_official/",
    },
    {
      name: "youtube",
      icon: <FiYoutube size={40} />,
      link: "https://www.youtube.com/@poofyland",
    },
    {
      name: "telegram",
      icon: <TbBrandTelegram size={40} />,
      link: "https://t.me/poofylandofficial",
    },
    {
      name: "discord",
      icon: <TbBrandDiscord size={40} />,
      link: "https://discord.com/invite/eEsK8u7cXE",
    },
    {
      name: "tiktok",
      icon: <TbBrandTiktok size={40} />,
      link: "https://www.tiktok.com/@poofyland",
    },
    {
      name: "medium",
      icon: <TbBrandMedium size={40} />,
      link: "https://medium.com/@poofyland",
    },
  ];
  return (
    <>
      <footer id="community" className="section centered">
        <div className="center">
          <div className="community centered">
            <div className="center">
              <img
                className="community-img"
                src="/imgs/community.png"
                alt=""
                style={{ visibility: "visible" }}
                width={500}
                height={500}
              />
              <div className="social">
                {socialIcons.map((socialIcons, index) => (
                  <a
                    key={index}
                    href={socialIcons.link}
                    target="_blank"
                    className={socialIcons.name}
                  >
                    {socialIcons.icon}
                  </a>
                ))}
              </div>
              <br></br>
            </div>
          </div>

          <div className="partners" style={{ visibility: "visible" }}>
            <small>Partners:</small>
            <br></br>
            <div className="centered">
              <img src="/imgs/ddc.png" alt="" />
              <img src="/imgs/crossspace-2.png" alt="" />
            </div>
          </div>

          <div className="partners" style={{ visibility: "visible" }}>
            <small>Powered By:</small>
            <br></br>
            <div className="centered">
              <a href="https://unity.com/" target="_blank">
                <img src="/imgs/unity.png" alt="" />
              </a>
            </div>
          </div>

          <div className="copyright" style={{ visibility: "visible" }}>
            <small>Developed By:</small>
            <br></br>

            <a href="https://crazymunchies.studio" target="_blank">
              <img src="/imgs/cms-logo.png" alt="" width={500} height={500} />
            </a>

            <p className="footer-links">
              <a href="https://poofyland.shop" target="_blank">
                Shop
              </a>
              <a href="https://poofyland.gitbook.io/poofyland/" target="_blank">
                Whitepaper
              </a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms Of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
