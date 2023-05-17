import "./Admin.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
//import AdminTable from "../AdminTable/AdminTable";

const Admin = () => {
  const [volunteers, setVolunteers] = useState();
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allBookings")
      .then((response) => response.json())
      .then((data) => {
        setVolunteers(data);
      });
  }, [control]);

  const handleDeleteEvent = id => {
    fetch(`http://localhost:5000/allBookings/${id}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
            alert('Deleted booking successfully');
            setControl(!control);
        }
    })

  }

  return (
    <div className="mt-8 mx-8 md:mx-16 lg:mx-32 admin-page">
      <div>
        <div className="flex items-center text-blue-600 font-bold">
          <BsFillPeopleFill className="w-6 h-6" />
          <h6>Volunteer register list</h6>
        </div>
        <Link to="/addEvent">
        <div className="flex items-center font-bold mt-4">
          <AiOutlinePlus className="w-4 h-4" />
          <h6>Add event</h6>
        </div>
        </Link>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th>Registering date</th>
                <th>Volunteer list</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {volunteers &&
                  volunteers.map((volunteer) => (
                    <tr className="font-semibold" key={volunteer._id}>
                      <td>{volunteer.userName}</td>
                      <td>{volunteer.email}</td>
                      <td>{volunteer.date}</td>
                      <td>{volunteer.title}</td>
                      <td>
                        <RiDeleteBinLine onClick={()=>handleDeleteEvent(volunteer._id)} className="w-6 h-6 text-red-600" />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
