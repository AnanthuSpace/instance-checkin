import { RiTicket2Line, RiPresentationLine } from "react-icons/ri";
const CheckinInstanceList = () => {
  return (
    <div className="ps-3">
      <p className="sub-p">CHECKIN INSTANCE</p>
      <ul className="list-unstyled">
        <li className="py-1 d-flex align-items-center list-text">
          <RiTicket2Line className="me-2 li-icon activate" />
          <span className="activate"> Instance</span>
        </li>
        <li className="py-1 d-flex align-items-center list-text">
          <RiPresentationLine className="me-2 li-icon" />
          Instance Check-in
        </li>
      </ul>
    </div>
  );
};

export default CheckinInstanceList;
