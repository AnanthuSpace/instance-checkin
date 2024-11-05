import { Routes, Route } from "react-router-dom";
import CheckinInstance from "../pages/CheckinInstance";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CheckinInstance />} />
    </Routes>
  );
};

export default UserRouter;
