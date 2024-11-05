import { AttendanceList } from "./AttendanceList";
import CheckinInstanceList from "./CheckinInstanceList";
import RegistrationList from "./RegistrationList";

const ConfigureList = () => {
  return (
    <div className=" flex-column  pt-3">
      <div className="config-div ">
        <RegistrationList />
      </div>
      <div className="config-div ">
        <AttendanceList />
      </div>
      <div className="config-div ">
        <CheckinInstanceList />
      </div>
    </div>
  );
};

export default ConfigureList;
