import { logos } from "../data/logos";
import "../styles/components/footer.css";
import tflogo from "/logos/tfLogo.png";

export default function Footer() {
  return (
    <section className="footer">
      <h3 className="footer__heading">Follow Us On:</h3>
      <ul>
        {logos.map(logo => (
          <li
            key={logo.id}
            className="footer__lists"
          >
            <a
              href={logo.link}
              target="_blank"
            >
              <img
                src={logo.image}
                className="footer__logos"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      <img
        className="footer__tflogo"
        src={tflogo}
        alt="techfestlogo"
      />
    </section>
  );
}
