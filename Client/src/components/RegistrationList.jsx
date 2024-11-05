import { RiBillLine, RiBarChart2Line, RiGroupLine, RiFileCloseLine, RiUserFollowLine } from "react-icons/ri";

const RegistrationList = () => {
  return (
    <div className="ps-3">
      <p className="sub-p">REGISTRATION</p>
      <ul className="list-unstyled">
        <li className="py-1 d-flex align-items-center list-text">
          <RiBillLine className="me-2 li-icon" />
          Orders
        </li>
        <li className="py-1 d-flex align-items-center list-text">
          <RiBarChart2Line className="me-2 " />
          Order Summary
        </li>
        <li className="py-1 d-flex align-items-center list-text">
          <RiGroupLine className="me-2 li-icon" />
          Attendees
        </li>
        <li className="py-1 d-flex align-items-center list-text">
          <RiFileCloseLine className="me-2 li-icon" />
          Missed Registrations
        </li>
        <li className="py-1 d-flex align-items-center list-text">
          <RiUserFollowLine className="me-2 li-icon" />
          Approval
        </li>
      </ul>
    </div>
  );
};

export default RegistrationList;
