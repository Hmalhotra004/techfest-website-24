import TeamCard from "../components/TeamCard";
import { top } from "../data/mtt";
import "../styles/pages/meettheteam.css";
import aayushpatel from "/mtt/top/aayushpatel.png";
import dev from "/mtt/top/devB.png";
// {
//   id: 6,
//   name: "Aayush Patel",
//   desg: "Fest Advisor",
//   src: aayushpatel,
// },

export default function MeetTheTeamPage() {
  return (
    <>
      <section className="top-core bg-mtt">
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
    </>
  );
}
