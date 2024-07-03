import stylesCore from "@/app/homeCore.module.scss";
import { motion } from "framer-motion";
import { Card } from "./Cards";
import Reveal from "./Reveal";

const CoreTeam = () => {
  return (
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
              <motion.img
                src="./icon.png"
                id={stylesCore.img}
              />
            </Reveal>

            <div id={stylesCore.extra}>
              <Card
                src="/mtt/top/kalp-1.png"
                desg="Vice Chairperson 3"
              />
            </div>

            <Card
              src="/mtt/top/kasvi-1.png"
              desg="Vice Chairperson 2"
            />
          </div>

          <div id={stylesCore.bottom}>
            <Card
              src="/mtt/top/kalp-1.png"
              desg="Vice Chairperson 3"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default CoreTeam;
