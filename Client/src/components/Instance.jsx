import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import InstanceButtons from "./InstanceButtons";
import AddInstanceModal from "./AddInstanceModal";
import axiosInstance from "../config/axiosInstance";

const Instance = () => {
  const [instance, setInstance] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newInstance, setNewInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/");
        setInstance(response.data.instanceData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (newInstance) {
      setInstance((prevInstances) => [...prevInstances, newInstance]);
      setNewInstance(null);
    }
  }, [newInstance]);

  const handleAdd = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <h6 className="p-4">Instance</h6>
      <div className="d-flex justify-content-center">
        {console.log(instance)}
        {instance.length ? (
          <InstanceButtons instance={instance} />
        ) : (
          <div className="text-center justify-content-center">
            <img
              src="../../public/image/Empty-instance.png"
              alt="No instance"
              style={{ width: "150px", height: "150px", marginBottom: "1rem" }}
            />
            <h6>No Instance Available</h6>
            <p>Please add an instance to display information here.</p>
            <button className="btn btn-primary" onClick={handleAdd}>
              <IoAdd />
              Add Instance
            </button>
          </div>
        )}
      </div>
      <AddInstanceModal
        open={openModal}
        handleClose={handleCloseModal}
        setNewInstance={setNewInstance}
        setInstance={setInstance}
      />
    </div>
  );
};

export default Instance;
