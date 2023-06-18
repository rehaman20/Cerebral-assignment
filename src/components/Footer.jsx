import FooterData from "./footerData";
import Nav from "./Nav";
import FooterForm from "./FooterForm";

function Footer() {
  const time = new Date();
  const currentYear = time.getFullYear();

  function renderNav(nav) {
    return <Nav title={nav.footerHeading} list={nav.navItems} />;
  }

  return (
    <footer className="footer">
      <div className="grid grid--footer">
        <FooterForm />
        {FooterData.map(renderNav)}
      </div>
      <p className="copyright">
        &copy; <span>{currentYear}</span>
        Cerebral Inc. All rights reserved. 2093 Philadelphia Pike #9898
        Claymont, DE 19703
      </p>
    </footer>
  );
}

export default Footer;
