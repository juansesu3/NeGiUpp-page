import React from "react";

const ProyectCard = ({ proyects }) => {
  return (
    <div>
      {proyects.length > 0 &&
        proyects.map((proyect) => (
          <div key={proyect._id}>
            <h1>{proyect.title}</h1>
          </div>
        ))}
      ProyectCard
    </div>
  );
};

export default ProyectCard;
