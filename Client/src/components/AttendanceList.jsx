import { RiTicket2Line, RiPresentationLine } from "react-icons/ri";

export const AttendanceList = () => {
  return (
    <div className="ps-3">
    <p className="sub-p">ATTENDANCE</p>
    <ul className="list-unstyled">
      <li className="py-1 d-flex align-items-center list-text">
        <RiTicket2Line className="me-2 li-icon " />
        Attendance
      </li>
      <li className="py-1 d-flex align-items-center list-text">
        <RiPresentationLine className="me-2 li-icon " />
        Attendance Summary
      </li>
    </ul>
  </div>
  )
}
