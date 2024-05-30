import TeamCard from "../components/TeamCard";
import { top, V1, V2, V3, V4 } from "../data/mtt";
import "../styles/pages/meettheteam.css";
import aayushpatel from "/mtt/top/aayushpatel.png";
import dev from "/mtt/top/devB.png";

const MeetTheTeamPage = () => {
  return (
    <>
      <section className="mtt">
        <h1>Core Team</h1>
        <div>
          <TeamCard
            img={dev}
            name="Dev Barot"
            title="Chairperson"
          />
        </div>

        <div className="wrap">
          {top.map(data => (
            <TeamCard
              key={data.id}
              img={data.src}
              name={data.name}
              title={data.desg}
            />
          ))}
        </div>
        <div>
          <TeamCard
            img={aayushpatel}
            name="Aayush Patel"
            title="Fest Advisor"
          />
        </div>
      </section>

      <section className="mtt">
        <h1>Head of Departments</h1>
        <h2>Vertical 1</h2>
        <div className="wrap">
          {V1.map(data => (
            <TeamCard
              key={data.id}
              img={data.src}
              name={data.name}
              title={data.desg}
            />
          ))}
        </div>
      </section>

      <section className="mtt">
        <h2>Vertical 2</h2>
        <div className="wrap">
          {V2.map(data => (
            <TeamCard
              key={data.id}
              img={data.src}
              name={data.name}
              title={data.desg}
            />
          ))}
        </div>
      </section>

      <section className="mtt">
        <h2>Vertical 3</h2>
        <div className="wrap">
          {V3.map(data => (
            <TeamCard
              key={data.id}
              img={data.src}
              name={data.name}
              title={data.desg}
            />
          ))}
        </div>
      </section>

      <section className="mtt">
        <h2>Vertical 4</h2>
        <div className="wrap">
          {V4.map(data => (
            <TeamCard
              key={data.id}
              img={data.src}
              name={data.name}
              title={data.desg}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default MeetTheTeamPage;
