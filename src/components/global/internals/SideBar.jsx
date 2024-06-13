/**
 * <SideBar />
 *
 * @component
 *
 * @return {React.ReactNode}
 */
function SideBar() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <img src="./assets/images/logo.png" alt="Logo" />
        <span className="designation">Full-Stack Developer</span>
      </div>
      <img className="me" src="./assets/images/me.jpg" alt="Me" />
      <h2 className="email">cianodev@gmail.com</h2>
      <h2 className="address">Base in Mindoro, PH</h2>
      <p className="copyright">&copy; 2024 Ciano. All Rights Reserved</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a href="https://dribbble.com/cianodev" target="_blank">
            <i className="lab la-dribbble"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lorenciano-dramayo"
            target="_blank"
          >
            <i className="lab la-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/lorencianodramayo" target="_blank">
            <i className="lab la-github"></i>
          </a>
        </li>
      </ul>
      <a href="#" className="theme-btn">
        <i className="las la-envelope"></i> Hire Me!
      </a>
    </div>
  );
}

export default SideBar;
