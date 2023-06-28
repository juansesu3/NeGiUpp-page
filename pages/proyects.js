import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProyectCard from "@/components/ProyectCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProyectsPage = () => {
  const [proyects, setProyects] = useState([]);

  useEffect(() => {
    axios.get("/api/proyects").then((response) => {
      setProyects(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <Center>
        <h1 style={{color:"#ffff"}}>Proyects</h1>
        <ProyectCard proyects={proyects} />
      </Center>
      <Footer />
    </div>
  );
};

export default ProyectsPage;
