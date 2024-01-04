import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import Link from 'next/link';

const FirstContainer = styled.div`
height: 53vh;
padding: 0 0.5rem;
`;

const ConfirmContainer = styled.div`
color: white;
margin-top: 3.5rem;
height: auto;
padding: 0 0.5rem;
display: flex;
justify-content: center;
border-radius: 1rem;
width: 100%;
`;

const Title = styled.h1`
 margin-top: 0;
  background: linear-gradient(110deg, #00c8ff, #00b4e6 19%, #00a0cc 27%, #008cb3 34%, #0080a3 41%, #0080a3 47%, #0080a3 53%, #0080a3 59%, #008ca8 66%, #009fad 73%, #00b3a7 81%, #02c097);
  -webkit-background-clip: text;
  color: transparent;
`;
const LinkStC = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease-in-out;
  background: linear-gradient(110deg, #00c8ff, #00b4e6 19%, #00a0cc 27%, #008cb3 34%, #0080a3 41%, #0080a3 47%, #0080a3 53%, #0080a3 59%, #008ca8 66%, #009fad 73%, #00b3a7 81%, #02c097);
  -webkit-background-clip: text;
  color: transparent;
  &:hover{
    text-decoration: underline;
    color: white;
  }
 
 `

const ConfirmSubscriptionPage = () => {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    // Aquí puedes agregar la lógica para confirmar la suscripción utilizando el token.
    // Por ejemplo, podrías hacer una solicitud al servidor para actualizar el estado 'verified'.

    // Simplemente como ejemplo, aquí puedes loguear el token:
    console.log('Token:', token);
  }, [token]);

  return (
    <Layout>
      <FirstContainer>
        <ConfirmContainer>
          <div>
            <Title>Thanks for subscribing!</Title>
            {/* Puedes agregar más contenido aquí según sea necesario */}
            <p>
              You will start receiving the Negiupp emails soon!
            </p>
            <p>
              In the meantime you can take a look at:
            </p>
            <ul>
              <li>The <LinkStC href={"/blog"}>articles</LinkStC></li>
              <li>
                The latest <LinkStC href={"/blog"}>proyects</LinkStC>
              </li>
              <li>
                The latest Instagram <LinkStC href={"/blog"}>reels</LinkStC>
              </li>
            </ul>
          </div>
        </ConfirmContainer>
      </FirstContainer>
    </Layout>
  );
};

export default ConfirmSubscriptionPage;
