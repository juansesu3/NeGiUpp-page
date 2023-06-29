import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProyectPage = () => {
  const [proyect, setProyect] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/proyects?id=" + id).then((response) => {
      setProyect(response.data);
    });
  }, [id]);
  console.log(proyect);
  return (
    <>
      <Header />
      <Center>
        <p>Branding - E-commerce</p>
        <h1>AESTHETIC DESIGN FOR BRAND NEW STARTUP</h1>
        <div>
          <img src="" alt="image-proyect" />
        </div>
        <div>
          <div>Stack of technologies</div>
          <div>
            <h3>About</h3>
            <p>{proyect.about}</p>
          </div>
        </div>
        <div>
          <img src="" alt="image-proyect" />
        </div>
        {/*Images under here */}
        <div>
          <div>1</div>
          <div>2</div>
          <div>2</div>
          <div>4</div>
        </div>
        {/*Images above here */}

        <div>
          <div>
            <div>
              <p>Realese Date</p>
              <h4>{proyect.releaseDate}</h4>
            </div>
            <div>
              <p>Client</p>
              <h4>{proyect.client}</h4>
            </div>
            <div>
              <p>Service</p>
              <h4>{proyect.service}</h4>
            </div>
            <div>
              <p>Proyect type</p>
              <h4>{proyect.proyectType}</h4>
            </div>
          </div>
          <div>
            <h3>Description</h3>
            <p>{proyect.description}</p>
          </div>
        </div>
        <div>
          <img src="" alt="image-proyect" />
        </div>
        <div>
          <button>Next Proyect</button>
        </div>
      </Center>
      <Footer />
    </>
  );
};

export default ProyectPage;
