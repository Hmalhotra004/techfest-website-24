"use client";
import { Card } from "@/Components/Cards";
import Reveal from "@/Components/Reveal";
import TFLogo from "@/Components/TFLogo";
import { about } from "@/lib/about";
import { motion } from "framer-motion";
import stylesAbout from "./homeAbout.module.scss";
import stylesCore from "./homeCore.module.scss";
import stylesLogo from "./homeLogo.module.scss";
import stylesTheme from "./homeTheme.module.scss";

const Home = () => {
  return (
    <>
      <HomeLogo />

      <Core />

      <Theme />

      <About />
    </>
  );
};

const HomeLogo = () => (
  <section className={stylesLogo.bg}>
    <section className={`container ${stylesLogo.first}`}>
      <div>
        <Reveal x={-200}>
          <TFLogo classname={stylesLogo.logo} />
        </Reveal>
        <TeamBtn />
      </div>
    </section>
  </section>
);

const Core = () => (
  <section className={stylesCore.bg}>
    <section className={`container ${stylesCore.core}`}>
      <div id={stylesCore.left}>
        <Reveal y={200}>
          <h2>Top Core Team</h2>
        </Reveal>
      </div>

      <div id={stylesCore.right}>
        <div id={stylesCore.top}>
          <Card
            src="/mtt/top/devB-1.png"
            desg="Chairperson"
          />
          <Card
            src="/mtt/top/anshika-1.png"
            desg="Vice Chairperson 1"
          />
        </div>

        <div id={stylesCore.mid}>
          <Card
            src="/mtt/top/sean-1.png"
            desg="Vice Chairperson 4"
          />

          <Reveal y={200}>
            <motion.img src="./icon.png" />
          </Reveal>

          <Card
            src="/mtt/top/kasvi-1.png"
            desg="Vice Chairperson 2"
          />
        </div>

        <div id={stylesCore.last}>
          <Card
            src="/mtt/top/kalp-1.png"
            desg="Vice Chairperson 3"
          />
        </div>
      </div>
    </section>
  </section>
);

const Theme = () => (
  <section className={stylesTheme.bg}>
    <section className={`container ${stylesTheme.theme}`}>
      <Reveal y={300}>
        <motion.img src="/theme.png" />
      </Reveal>
    </section>
  </section>
);

const About = () => (
  <section className={`${stylesAbout.bg1}`}>
    <section className={`container ${stylesAbout.about}`}>
      <div className={stylesAbout.bg2}>
        <Reveal y={200}>
          <h2>About Us</h2>
        </Reveal>
      </div>
      <div className={stylesAbout.details}>
        {about.map((data, idx) => (
          <div key={idx}>
            <Reveal x={-300}>
              <h3>{data.head}</h3>
            </Reveal>

            <Reveal x={-300}>
              <p>{data.d}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  </section>
);

const TeamBtn = () => (
  <Reveal x={-200}>
    <button className={stylesLogo.meetbtn}>
      <Reveal
        y={200}
        de={0.2}
      >
        <a href="/Meet-The-Team">Meet The Team</a>
      </Reveal>
    </button>
  </Reveal>
);

export default Home;
