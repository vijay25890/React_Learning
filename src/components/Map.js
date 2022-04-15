import React from "react";

const Map = () => {
  const students = ["vijay", "ajay", "akash"];
  const stud = [
    {
      name: "vijay more",
      id: 22,
    },
    {
      name: "ajay more",
      id: 66,
    },
  ];

  const student = [
    {
      name: "vijay more",
      address: [
        {
          no: 200,
        },
        {
          no: 400,
        },
      ],
    },
  ];

  return (
    <div>
      {students.map((e) => (
        <h6>{e}</h6>
      ))}
      {stud.map((el) => (
        <div>
          <h6>{el.name}</h6>
          <h6>{el.id}</h6>
        </div>
      ))}
    </div>
  );
};
export default Map;
