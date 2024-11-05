import { RiQrScanLine } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";

const InstanceTable = () => {
  const instanceData = [
    {
      name: "Food",
      participantTypes: "Volunteers, Guests, +2 more",
      tickets: "Ticket 01, Ticket 02 +2 more",
      alloted: 340,
      checkin: 160,
      pending: 180,
    },
    {
      name: "Book Stall",
      participantTypes: "Volunteers, Guests, +2 more",
      tickets: "-",
      alloted: 340,
      checkin: 160,
      pending: 180,
    },
  ];

  return (
    <div>
      <table className="table">
      <thead className="shadow table-header"
        >
          <tr>
            <th>Instance Name</th>
            <th>Included Participant Types</th>
            <th>Included Tickets</th>
            <th>Alloted</th>
            <th>Checkin</th>
            <th>Pending</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {instanceData.map((instance, index) => (
            <tr key={index} className="aling-item-center table-body-spacing">
              <td>{instance.name}</td>
              <td>{instance.participantTypes}</td>
              <td>{instance.tickets}</td>
              <td className="primary-underline">{instance.alloted}</td>
              <td className="primary-underline">{instance.checkin}</td>
              <td className="primary-underline">{instance.pending}</td>
              <td>
                <button className="shadow btn-table">
                  <RiQrScanLine style={{ marginRight: "5px" }} />
                  Scan
                </button>
                <button className="btn">
                  <HiDotsVertical />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstanceTable;
