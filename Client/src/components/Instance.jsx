import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import InstanceButtons from "./InstanceButtons";

const Instance = () => {
  const [instance, setInstance] = useState(1);

  return (
    <div>
      <h6 className="p-4">Instance</h6>
      <div className="d-flex justify-content-center">
        {instance ? (
          <InstanceButtons />
        ) : (
          <div className="text-center justify-content-center">
            <img
              src="../../public/image/Empty-instance.png"
              alt="No instance"
              style={{ width: "150px", height: "150px", marginBottom: "1rem" }}
            />
            <h6>No Instance Available</h6>
            <p>Please add an instance to display information here.</p>
            <button className="btn btn-primary">
              <IoAdd />
              Add Instance
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Instance;
