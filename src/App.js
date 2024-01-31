import { useState } from "react";
import "./styles.css";
import Background from "./Background";

const links = [
  {
    id: "@linkedinId",
    title: "LinkedIn",
    path: `https://linkedin.com`,
    logo: "https://github.com/gauravghongde/social-icons/blob/master/PNG/Color/LinkedIN.png?raw=true",
    acitve: false,
  },
  {
    id: "@mediumId",
    title: "Medium",
    logo: `https://github.com/gauravghongde/social-icons/blob/master/PNG/Color/Medium.png?raw=true`,
    path: "https://medium.com",
    acitve: false,
  },
  {
    id: "@githubID",
    title: "Github",
    logo: `https://github.com/gauravghongde/social-icons/blob/master/PNG/Color/Github.png?raw=true`,
    path: "https://github.com",
    acitve: false,
  },
  {
    id: "#leetcodeId",
    title: "Leetcode",
    logo: `https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png?20191202080835`,
    path: "https://leetcode.com",
    acitve: false,
  },
  {
    id: `@twitterId`,
    title: "Twitter/X",
    logo: `https://github.com/gauravghongde/social-icons/blob/master/PNG/Color/Twitter.png?raw=true`,
    path: "https://x.com",
    acitve: false,
  },

  ,
  {
    id: `@instagramId`,
    title: "Instagram",
    logo: `https://github.com/gauravghongde/social-icons/blob/master/PNG/Color/Instagram.png?raw=true`,
    path: "https://instagram.com",
    acitve: false,
  },
  {
    id: "@quoraId",
    title: "Quora",
    logo: `https://github.com/gauravghongde/social-icons/blob/master/PNG/Color/Quora.png?raw=true`,
    path: "https://quora.com",
    acitve: false,
  },
  {
    id: "@spotifyId",
    title: "Spotify",
    logo: `https://github.com/gauravghongde/social-icons/blob/master/PNG/Color/Spotify.png?raw=true`,
    path: "https://spotify.com",
    acitve: false,
  },
];

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <LinkContainer links={links} />
      <Footer />
    </>
  );
}
function LinkBox({ link }) {
  const [text, setText] = useState(link.title);
  function handleMouseEnter() {
    setText(link.id);
    console.log("hello");
  }
  function handleMouseLeave() {
    setText(link.title);
    console.log("bye");
  }
  function handleOpen() {
    window.open(link.path, "_blank");
  }

  return (
    <>
      <button
        className={"glow-on-hover linkBox"}
        type="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={link.logo} alt="😊" />
        <span>{text}</span>

        <div class="arrow" onClick={handleOpen}>
          &rarr;
        </div>
      </button>
    </>
  );
}
function LinkContainer({ links }) {
  return (
    <div className="main">
      <div className="linkContainer">
        {links.map((link) => (
          <LinkBox link={link} key={link.id} />
        ))}
      </div>
    </div>
  );
}
function Footer() {
  const divStyle = {
    width: "95vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: "20px",
    fontWeight: "bolder",
    fontFamily: `Verdana, Geneva, Tahoma, sansSerif`,
  };
  return (
    <div style={divStyle}>
      <span>Let's Connect</span>
    </div>
  );
}
function Navbar() {
  return (
    <div className="navbar center">
      <span>My Links</span>
      <div>😎</div>
    </div>
  );
}
