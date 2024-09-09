import React, { useEffect, useState } from "react";
import API from "../api/axios.config";
import { Link } from "react-router-dom";

function Gyms() {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    API.get("/gyms")
      .then((res) => setGyms(res.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div>
      <h1>Our Gyms</h1>
      {!gyms && <div>Loading...</div>}
      <div className="flex space-x-2">
        {gyms &&
          gyms.map((g) => (
            <div key={g.id} className="border p-2 ">
              <h4 className="font-bold text-xl ">{g.name} </h4>
              <p>{g.description}</p>
              <p>Address: {g.address}</p>
              <p>
                Area: {g.area} m<sup>2</sup>
              </p>
              <button className="bg-red-950 text-white p-2 rounded-md ">
                <Link to="/request">Записаться</Link>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Gyms;
