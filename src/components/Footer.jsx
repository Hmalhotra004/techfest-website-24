export default function Footer() {
  return (
    <section>
      <div className="foot">
        <div className="container-foot">
          <h3>Follow Us On:</h3>
          <ul>
            <li>
              <a href="#">
                <img src="./Assets/logo/Instagram.svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./Assets/logo/threads.svg" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./Assets/logo/LinkedIn.png" />
              </a>
            </li>
          </ul>
        </div>
        <img
          className="logo-f"
          src="./Assets/logo/Logo.png"
          alt="tflogo"
        />
      </div>
    </section>
  );
}
