import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LeaveService from "../DBServices/LeaveService";

const ApplyLeave = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    id: "",
    leavedate: "",
    startdate: "",
    enddate: "",
    leavereason: "",
  });
  
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      
      leaveApplyDate: user.leavedate,
      leaveStartDate: user.startdate,
      leaveEndDate: user.enddate,
      leaveReason: user.leavereason,
      studentId:user.id,
    };
    console.log(data);
    LeaveService.createLeave(data).then((result) => {
    alert("Leave Applied")
    history.push("/Home");
  });
};

  return (
    <html>
      <h5 style={{ color: "black" }}>Apply Leave</h5>
      <div className="form">
        <form onSubmit={(e) => onSubmit(e)}>
          <label>Student Id</label>
          <input
            type="text"
            name="id"
            value={user.id}
            className="form-control"
            placeholder=" Enter Student Id"
            required
            onChange={(e) => onInputChange(e)}
          />
          <label>Apply Leave Date</label>
          <input
            type="date"
            name="leavedate"
            value={user.leavedate}
            className="form-control"
            placeholder="dd/mm/yyyy"
            onChange={(e) => onInputChange(e)}
          />
          <label>Start Date</label>
          <input
            type="date"
            name="startdate"
            value={user.startdate}
            className="form-control"
            placeholder="dd/mm/yyyy"
            onChange={(e) => onInputChange(e)}
          />
          <label>End Date</label>
          <input
            type="date"
            name="enddate"
            value={user.enddate}
            className="form-control"
            placeholder="dd/mm/yyyy"
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <label>Leave Reason</label>
          <input
            type="textarea"
            name="leavereason"
            value={user.leavereason}
            className="form-control"
            placeholder="Enter Reason"
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <button type="submit" className="btn btn-primary btn-block">
            Apply Leave
          </button>
        </form>
      </div>
    </html>
  );
};

export default ApplyLeave;
