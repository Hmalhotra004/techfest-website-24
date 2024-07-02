import TFLogo from "@/Components/TFLogo";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      <section className={styles.bg1}>
        <section className={`container ${styles.first}`}>
          <div>
            <TFLogo classname={styles.logo} />
            <TeamBtn />
          </div>
        </section>
      </section>
    </>
  );
};

const TeamBtn = () => (
  <button className={styles.meetbtn}>
    <a href="/Meet-The-Team">Meet The Team</a>
  </button>
);

export default Home;
