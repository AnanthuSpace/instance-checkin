import ConfigureList from "../components/ConfigureList";
import Instance from "../components/Instance";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const CheckinInstance = () => {

  return (
    <div className="d-flex trainer-gradient-bg vh-100">
      <SideBar />
      <div className="flex-grow-1 d-flex flex-column">
        <NavBar />
        <div className="d-flex flex-grow-1">
          <div className="col-2" style={{ borderRight: "1px solid lightgray" }}>
            <ConfigureList />
          </div>
          <div className="col-10">
            <Instance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckinInstance;
