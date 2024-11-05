import {
  RiSearchLine,
  RiFilter3Line,
  RiDownloadFill,
  RiAddLine,
} from "react-icons/ri";
import { PiUploadSimpleFill } from "react-icons/pi";
import InstanceTable from "./InstanceTable";

const InstanceButtons = () => {
  return (
    <div className="col-11">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <button className="shadow btn-table me-2 ">
            <RiSearchLine />
          </button>
          <button className="shadow btn-table">
            <RiFilter3Line style={{ marginRight: "5px" }} />
            Filter
          </button>
        </div>
        <div className="d-flex align-items-center">
          <button className="shadow btn-table me-2">
            <RiDownloadFill style={{ marginRight: "5px" }} />
            Import
          </button>
          <button className="shadow btn-table me-2">
            <PiUploadSimpleFill style={{ marginRight: "5px" }} />
            Export
          </button>
          <button className="btn btn-primary">
            <RiAddLine style={{ marginRight: "5px", color: "white" }} />
            Add Instance
          </button>
        </div>
      </div>
      <div className="mt-4">
        <InstanceTable />
      </div>
    </div>
  );
};

export default InstanceButtons;
