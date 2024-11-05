import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiPieChart } from "react-icons/tfi";
import {
  RiPagesLine,
  RiStoreLine,
  RiCalendarEventFill,
  RiSettings3Line,
  RiPrinterLine,
  RiClipboardLine,
  RiInstagramLine,
  RiArrowGoBackFill,
} from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="text-light d-flex flex-column align-items-center py-3 h-100"
      style={{
        width: "5rem",
        minHeight: "100vh",
        borderRight: "1px solid lightgray",
      }}
    >
      <div className="mb-3">
        <img
          src="../../public/image/Vector.png"
          alt="Trainer Profile"
          className="rounded-circle"
          style={{ width: "2.3rem", height: "2.3rem", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <hr
          style={{ width: "100%", borderColor: "#525866", marginTop: "1rem" }}
        />
      </div>

      <div className="text-center w-100" style={{ marginTop: "-1rem" }}>
        <div
          className="my-2"
          onClick={() => navigate("/dashboard")}
          style={{ cursor: "pointer" }}
        >
          <MdOutlineDashboard
            className={`main-icon ${
              isActive("/dashboard") ? "text-white" : "text-secondary"
            }`}
          />
          <p className="small text-secondary mb-0">Dashboard</p>
        </div>

        <div
          className="activate my-2"
          onClick={() => navigate("/configure")}
          style={{ cursor: "pointer" }}
        >
          <RiCalendarEventFill
            className={`activate ${
              isActive("/configure") ? "text-white" : "text-secondary"
            }`}
          />
          <p className="small text-secondary mb-0 activate">Configure</p>
        </div>

        <div
          className="my-2"
          onClick={() => navigate("/website")}
          style={{ cursor: "pointer" }}
        >
          <RiPagesLine
            className={`main-icon ${
              isActive("/website") ? "text-white" : "text-secondary"
            }`}
          />
          <p className="small text-secondary mb-0">Website</p>
        </div>

        <div
          className="my-2"
          onClick={() => navigate("/exhibitors")}
          style={{ cursor: "pointer" }}
        >
          <RiStoreLine
            className={`main-icon ${
              isActive("/exhibitors") ? "text-white" : "text-secondary"
            }`}
          />
          <p className="small text-secondary mb-0">Exhibitors</p>
        </div>

        <div
          className="my-2"
          onClick={() => navigate("/print")}
          style={{ cursor: "pointer" }}
        >
          <RiPrinterLine
            className={` main-icon ${
              isActive("/print") ? "text-white" : "text-secondary"
            }`}
          />
          <p className="small text-secondary mb-0">Print</p>
        </div>

        <div
          className="my-2"
          onClick={() => navigate("/registrations")}
          style={{ cursor: "pointer" }}
        >
          <RiClipboardLine
            className={`main-icon ${
              isActive("/registrations") ? "text-white" : "text-secondary"
            }`}
          />
          <p className="small text-secondary mb-0">Registrations</p>
        </div>

        <div
          className="my-2"
          onClick={() => navigate("/instasnap")}
          style={{ cursor: "pointer" }}
        >
          <RiInstagramLine
            className={`main-icon ${
              isActive("/instasnap") ? "text-white" : "text-secondary"
            }`}
          />
          <p className="small text-secondary mb-0">Insta Snap</p>
        </div>

        <div
          className="my-2"
          onClick={() => navigate("/reports")}
          style={{ cursor: "pointer" }}
        >
          <TfiPieChart
            className={`main-icon ${
              isActive("/reports") ? "text-white" : "text-secondary"
            }`}
          />
          <p className="small text-secondary mb-0">Reports</p>
        </div>

        <div
          className="my-2"
          onClick={() => navigate("/settings")}
          style={{ cursor: "pointer" }}
        >
          <RiSettings3Line
            className={`main-icon ${
              isActive("/settings") ? "text-white" : "text-secondary"
            }`}
          />
          <p className="small text-secondary mb-0">Settings</p>
        </div>
      </div>

      <div
        className="mt-auto mb-3 d-flex align-items-center justify-content-center gap-2 rounded-2 p-2"
        style={{ cursor: "pointer", width: "fit-content" }}
        onClick={() => navigate(-1)}
      >
        <RiArrowGoBackFill size={20} className="text-secondary" />
      </div>
    </div>
  );
};

export default SideBar;
