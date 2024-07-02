"use client";
import TFLogo from "@/Components/TFLogo";
import { motion } from "framer-motion";
import stylesCore from "./homeCore.module.scss";
import stylesLogo from "./homeLogo.module.scss";
import stylesTheme from "./homeTheme.module.scss";

const Home = () => {
  return (
    <>
      <HomeLogo />

      <TeamSec />

      <Theme />
    </>
  );
};

const HomeLogo = () => (
  <section className={stylesLogo.bg}>
    <section className={`container ${stylesLogo.first}`}>
      <div>
        <TFLogo classname={stylesLogo.logo} />
        <TeamBtn />
      </div>
    </section>
  </section>
);

const TeamSec = () => (
  <section className={stylesCore.bg}>
    <section className={`container ${stylesCore.core}`}>
      <div>
        <h2>Top Core Team</h2>
      </div>
      <div>
        <h1>hello</h1>
      </div>
    </section>
  </section>
);

const Theme = () => (
  <section className={stylesTheme.bg}>
    <section className={`container ${stylesTheme.theme}`}>
      <motion.img src="/theme.png" />
    </section>
  </section>
);

const TeamBtn = () => (
  <button className={stylesLogo.meetbtn}>
    <a href="/Meet-The-Team">Meet The Team</a>
  </button>
);

export default Home;
