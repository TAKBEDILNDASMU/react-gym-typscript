import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-20">
      <div className="mx-auto flex w-5/6 flex-col gap-16 md:flex-row">
        <div className="mt-10 basis-1/2 space-y-5 md:mt-0">
          <img src={Logo} alt="logo" className="h-6" />
          <p>
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="basis-1/4 space-y-5">
          <h4 className="font-bold">Links</h4>
          <p>Massa orci senectus</p>
          <p>Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="basis-1/4 space-y-5">
          <h4 className="font-bold">Contact Us</h4>
          <p>Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
