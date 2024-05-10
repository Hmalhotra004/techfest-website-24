import Card from "../components/Card";
import { artists, panel_1, panel_2, speaker } from "../data/summit";
import "../styles/pages/techsummit.css";

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

        <section className="panel">
          {speaker.map(data => (
            <Card
              key={data.id}
              img={data.img}
              name={data.Name}
            />
          ))}
        </section>

        {/* 

      <section className="contact">
        <div className="container">
          <h3>Contact Us</h3>
          <div>
            <p>
              Khushi Dama
              <br />
              +91 1234567890
            </p>
            <p>
              Shorya Jain
              <br />
              +91 8824323801
            </p>
            <p>
              Shivam Sukhija
              <br />
              +91 8058459844
            </p>
          </div>
        </div> */}
      </section>
    </body>
  );
}
