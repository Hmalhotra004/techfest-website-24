import Card from "../../components/Card";
import { artists, contact, panel_1, panel_2, speaker } from "../../data/summit";
import "../../styles/pages/techsummit.css";

export default function TechSummit() {
  return (
    <body className="bg">
      <section className="summit">
        <h1 className="summit__heading">TECHSUMMIT</h1>
        <p className="summit__para">
          Date : 24th January, 2024
          <br />
          Venue : Mukesh Patel Hall
          <br />
          Opp Cooper Hospital
          <br />
          Time : 11:30 AM Onwards
          <br />
        </p>
        <h2 className="summit__subheading">PANEL 1 :</h2>
        <h3 className="summit__smallheading">
          CAREER TRAJECTORIES: THE TRIFECTA OF CHOICES - <br />
          JOBS, ENTREPRENEURSHIP, AND INVESTING
        </h3>

        <section className="panel">
          {panel_1.map(data => (
            <Card
              key={data.id}
              img={data.img}
              name={data.Name}
            />
          ))}
        </section>

        <h2 className="summit__subheading">PANEL 2 :</h2>
        <h3 className="summit__smallheading">BEYOND THE SPOTLIGHT</h3>

        <section className="panel">
          {panel_2.map(data => (
            <Card
              key={data.id}
              img={data.img}
              name={data.Name}
            />
          ))}
        </section>

        <h2 className="summit__subheading">MUSIC ARTIST</h2>

        <section className="panel">
          {artists.map(data => (
            <Card
              key={data.id}
              img={data.img}
              name={data.Name}
            />
          ))}
        </section>

        <h2 className="summit__subheading">KEYNOTE SPEAKERS</h2>

        <section
          id="panel"
          className="panel"
        >
          {speaker.map(data => (
            <Card
              key={data.id}
              img={data.img}
              name={data.Name}
            />
          ))}
        </section>

        <section className="contact">
          <h3 className="contact__heading">Contact Us</h3>
          <div className="contact__container container">
            {contact.map(data => (
              <p
                className="contact__para"
                key={data.id}
              >
                {data.Name}
                <br />
                {data.No}
              </p>
            ))}
          </div>
        </section>
      </section>
    </body>
  );
}
