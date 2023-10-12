import axios from "axios";
import React, { useState, useEffect } from "react";
import "../CSS/Calls.css"

export default function Calls() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://data.seattle.gov/resource/33kz-ixgy.json"
      );
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      <h3 className="secondaryTitle">Calls:</h3>

      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="callList">
          {data.slice(0, 20).map((call, index) => (
            <div key={index} className="callBox">
              <p className={"callText callType"}>{call ? call.call_type : ""}</p>
              <p className={"callText callType"}>{call ? call.initial_call_type : ""}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
