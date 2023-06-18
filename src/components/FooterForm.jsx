function FooterForm() {
  return (
    <div>
      <div className="cta">
        <div className="cta-text-box">
          <h1 className="heading-secondary">Let's stay in touch</h1>
          <p className="cta-text">
            Get the latest in mental health, free events, feature updates and
            more.
          </p>

          <form action="#" className="cta-form">
            <div>
              <input
                type="text"
                name=""
                id="full-name"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name=""
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <label>Please enter your name</label>
            <button className="btn btn--form">Submit</button>
          </form>
        </div>
        <div className="social-links">
          <img src="/src/assets/facebook.webp"></img>
          <img src="/src/assets/instagram.webp"></img>
          <img src="/src/assets/linkin.webp"></img>
        </div>
        <div className="download">
          <img src="/src/assets/apple-store.svg"></img>
          <img className="playstore" src="/src/assets/playstore.png"></img>
        </div>
      </div>
    </div>
  );
}
export default FooterForm;
