import {
    MdLanguage,
    MdEdit,
    MdPlayArrow,
    MdKeyboardArrowDown,
  } from "react-icons/md";
  
  const Navbar = () => {
    return (
      <header className="navbar d-flex justify-content-between p-3" style={{borderBottom: '1px solid lightgray'}}>
        <div className="d-flex align-items-center ms-4">
          <img
            src="../../public/image/navbar_img.png"
            alt="Logo"
            className="navbar-logo"
            style={{ width: "2.3rem", height: "2.3rem" }}
          />
          <div className="navbar-info ms-4">
            <h6 className="navbar-title mb-0">Come On Kerala</h6>
            <span className="navbar-date text-muted">
              Jun 25 Sat, 2024 - 8:00 AM (IST)
            </span>
          </div>
        </div>
  
        <div className="d-flex align-items-center me-4">
          <div className="navbar-icon-button" aria-label="Language">
            <MdLanguage />
          </div>
          <a href="#" className="navbar-link d-flex align-items-center ms-3 text-decoration-none" style={{ color: "#333" }}>
            <MdEdit />
            <span className="ms-1">Edit Website</span>
          </a>
          <div className="navbar-link d-flex align-items-center ms-3">
            <MdPlayArrow />
            <span className="ms-1">Preview</span>
          </div>
          <div className="navbar-dropdown ms-3">
            <button className="btn btn-primary d-flex align-items-center ">
              <span>Publish</span>
              <MdKeyboardArrowDown className="ms-1" />
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  