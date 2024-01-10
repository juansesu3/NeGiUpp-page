import Points from '@/components/icons/Points';
import Swal from 'sweetalert2';
import Image from 'next/image';

import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const ContainerLinks = styled.div`
    background-color: #000000;
    height: 110vh;
`;

const Header = styled.div`
position: sticky;
top: 1rem;
width: 95%;
display: flex;
justify-content: ${(props) => (props.isVisible ? 'end  ' : 'space-between')};
background: ${(props) => (props.isVisible ? 'transparent' : 'rgba(255, 255, 255, 0.5)')};
backdrop-filter: ${(props) => (props.isVisible ? 'none' : 'blur(10px)')};
align-items: center;
padding: 0.5rem 0.7rem ;
margin: 0 auto;
border-radius: 10rem;
border: ${(props) => (props.isVisible ? 'none' : '1px solid #fff')}; 
  transition: background 0.3s ease-in-out,  justify-content 0.3s ease-in-out; /* Agregar transiciones para opacidad y altura */
  overflow: hidden; 
`;
const ImageUser = styled.div`
  display: ${(props) => (props.isVisible ? 'none' : 'flex')};
width: 3rem;
height: 3rem;
transition: display 0.3s ease-in-out;
img{
    width: 100%;
    border-radius: 100%;
    transition: display 0.3s ease-in-out;
    display: ${(props) => (props.isVisible ? 'none ' : 'flex')};
}

`;
const IconPoints = styled.div`
  transition: background 0.3s ease-in-out;
padding: 0.7rem;
background: ${(props) => (props.isVisible ? '#ffffff ' : '#000000')};
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

svg{
    width: 1.3rem;
    height: 1.3rem;
    transition: color 0.3s ease-in-out;
    color: ${(props) => (props.isVisible ? ' #000000' : ' #ffffff')};
}
`;

const User = styled.div`
color: #000000;
display: ${(props) => (props.isVisible ? 'none' : 'flex')};
font-weight: 600;
`;

const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 2.5rem;
`;

const ImagePrincipal = styled.div`
    width: 6rem;
    border-radius: 5rem;
img{
    width: 100%;
    border-radius: 5rem;
}
`;

const InfoSummry = styled.div`
    color: #ffffff;
    text-align: center;
    width: 70%;
    h1{
        
    }
    p{
        opacity: 0.7;
        line-height: 1.5;
    }

`;

const ContainerBoxLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 95%;
    max-width: 40rem;
  
    

`;

const BoxLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #222;
    color: #ffffff;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    text-decoration: none;
    &:hover {
    transform: scale(1.02);  // Ajusta el factor de escala según tus necesidades
}
`;

const ImageLink = styled.div`
    width: 3rem;
    height: 3rem;
    img{
        width: 100%;
        border-radius: 0.5rem;
    }
`;

const TitleBoxLink = styled.h2`
    font-weight: 400;
    margin: 0;
    font-size: 1rem;
`;
const IconBoxLink = styled.div`
    color: #ffffff;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
svg{
    width: 2rem;
}
&:hover{
    background: #101010;
}
`;

const ContainerIconsLinks = styled.div`

fill: white;

display: flex;
align-items: center;
justify-content: center;
margin-top: 2rem;
gap: 1rem;
cursor: pointer;
svg{
    width: 3rem;
    transition: transform 0.3s ease-in-out;
    &:hover {
    transform: scale(1.08);  // Ajusta el factor de escala según tus necesidades
}
}
`


const LinksPage = () => {
    const [scrollDirection, setScrollDirection] = useState("up");

    const links = [
        'https://negiupp.com',
        'https://negiup.com/notfound',
        'https://www.linkedin.com/in/juan-s-suarez/',
        'https://github.com/juansesu3',

    ]
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY.current) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            prevScrollY.current = currentScrollY;
        };
        let prevScrollY = { current: window.scrollY };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClickPoints = () => {
        alert('share')
    }

    const handleClickPointLink = (event) => {
        const customContent = `
            <div class="custom-container">
            <h1>Share this link</h1>
                <div class="custom-item">
                    <div class="info">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <linearGradient id="s9~sBE_MLsUutFtX7i6Pra_KrtKMa6Fduil_gr1" x1="20.601" x2="27.399" y1="4.721" y2="43.279" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fede00"></stop><stop offset="1" stop-color="#ffd000"></stop></linearGradient><path fill="url(#s9~sBE_MLsUutFtX7i6Pra_KrtKMa6Fduil_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path d="M14.613,20.505c-0.168,0-0.342,0.039-0.503,0.12c-0.265,0.132-0.463,0.36-0.557,0.641	c-0.151,0.453,0.004,0.95,0.386,1.236l3.676,2.296l-0.143,0.382c-0.066,0.179-1.67,4.403-4.703,6.057	c-0.161,0.088-0.264,0.206-0.274,0.317c-0.011,0.112,0.078,0.213,0.155,0.277c0.656,0.549,1.334,0.939,2.685,1.187l0.409,0.075	l0.001,0.416c0.002,0.608,0.195,1.251,0.375,1.251c0.893,0,2.751,0,4.608,0.928c1.03,0.515,2.472,0.823,3.271,0.823	s2.241-0.308,3.271-0.823c1.856-0.928,3.715-0.928,4.608-0.928c0.181,0,0.374-0.643,0.375-1.251l0.001-0.416l0.409-0.075	c1.351-0.247,2.029-0.637,2.686-1.187c0.077-0.064,0.166-0.165,0.155-0.277c-0.011-0.111-0.114-0.229-0.274-0.317	c-3.032-1.654-4.636-5.878-4.703-6.057l-0.143-0.382l3.71-2.32c0.347-0.263,0.502-0.759,0.351-1.212	c-0.093-0.281-0.291-0.508-0.556-0.641c-0.264-0.133-0.564-0.153-0.846-0.06l-2.546,1.042V18.1c0-3.636-2.914-6.594-6.496-6.594	c-3.586,0-6.5,2.958-6.5,6.594v3.508l-2.576-1.053C14.828,20.522,14.722,20.505,14.613,20.505z" opacity=".07"></path><path fill="none" stroke="#1d1d1b" stroke-width="2" d="M24,37.011c0.868,0,2.387-0.322,3.494-0.875 c1.751-0.875,3.509-0.875,4.384-0.875c0.875,0,0.875-1.751,0.875-1.751c1.391-0.254,2.156-0.658,2.917-1.295 c0.531-0.445,0.407-1.085-0.201-1.416c-2.903-1.583-4.474-5.793-4.474-5.793l3.364-2.104c0.554-0.415,0.779-1.138,0.561-1.795l0,0 c-0.281-0.843-1.193-1.298-2.035-1.016l-1.887,0.771V18.1c0-3.864-3.132-7.094-6.996-7.094h0h-0.004h0 c-3.864,0-6.996,3.23-6.996,7.094v2.763l-1.887-0.771c-0.843-0.282-1.754,0.173-2.035,1.016l0,0 c-0.219,0.656,0.007,1.379,0.561,1.795l3.364,2.104c0,0-1.57,4.209-4.474,5.793c-0.608,0.331-0.732,0.972-0.201,1.416 c0.76,0.637,1.526,1.041,2.917,1.295c0,0,0,1.751,0.875,1.751c0.875,0,2.633,0,4.384,0.875C21.613,36.689,23.132,37.011,24,37.011" opacity=".05"></path><path fill="none" stroke="#000" d="M24,37.011c0.868,0,2.387-0.322,3.494-0.875 c1.751-0.875,3.509-0.875,4.384-0.875c0.875,0,0.875-1.751,0.875-1.751c1.391-0.254,2.156-0.658,2.917-1.295 c0.531-0.445,0.407-1.085-0.201-1.416c-2.903-1.583-4.474-5.793-4.474-5.793l3.364-2.104c0.554-0.415,0.779-1.138,0.561-1.795l0,0 c-0.281-0.843-1.193-1.298-2.035-1.016l-1.887,0.771V18.1c0-3.864-3.132-7.094-6.996-7.094h0h-0.004h0 c-3.864,0-6.996,3.23-6.996,7.094v2.763l-1.887-0.771c-0.843-0.282-1.754,0.173-2.035,1.016l0,0 c-0.219,0.656,0.007,1.379,0.561,1.795l3.364,2.104c0,0-1.57,4.209-4.474,5.793c-0.608,0.331-0.732,0.972-0.201,1.416 c0.76,0.637,1.526,1.041,2.917,1.295c0,0,0,1.751,0.875,1.751c0.875,0,2.633,0,4.384,0.875C21.613,36.689,23.132,37.011,24,37.011" opacity=".07"></path><path fill="#fff" d="M24,37.011c0.868,0,2.387-0.322,3.494-0.875c1.751-0.875,3.509-0.875,4.384-0.875	c0.875,0,0.875-1.751,0.875-1.751c1.391-0.254,2.156-0.658,2.917-1.295c0.531-0.445,0.407-1.085-0.201-1.416	c-2.903-1.583-4.474-5.793-4.474-5.793l3.364-2.104c0.554-0.415,0.779-1.138,0.561-1.795l0,0c-0.281-0.843-1.193-1.298-2.035-1.016	l-1.887,0.771V18.1c0-3.864-3.132-7.094-6.996-7.094h0h-0.004h0c-3.864,0-6.996,3.23-6.996,7.094v2.763l-1.887-0.771	c-0.843-0.282-1.754,0.173-2.035,1.016l0,0c-0.219,0.656,0.007,1.379,0.561,1.795l3.364,2.104c0,0-1.57,4.209-4.474,5.793	c-0.608,0.331-0.732,0.972-0.201,1.416c0.76,0.637,1.526,1.041,2.917,1.295c0,0,0,1.751,0.875,1.751c0.875,0,2.633,0,4.384,0.875	C21.613,36.689,23.132,37.011,24,37.011"></path>
                        </svg>
                        <p>Share on Snapchat</p>
                    </div>
                    <div class="arow-share">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </div>
                </div>
                <!-- Repite el mismo formato para los otros 6 contenedores -->
            <!-- ... -->
            <div class="custom-item">
            <div class="info">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
            </svg>
                <p>Share on Facebook</p>
            </div>
            <div class="arow-share">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </div>
        </div>
        <!-- Repite el mismo formato para los otros 6 contenedores -->
            <!-- ... -->
            <div class="custom-item">
            <div class="info">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
                <p>Share on LinkedIn</p>
            </div>
            <div class="arow-share">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </div>
        </div>
        <!-- Repite el mismo formato para los otros 6 contenedores -->
            <!-- ... -->
            <div class="custom-item">
            <div class="info">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
                <p>Share on X</p>
            </div>
            <div class="arow-share">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </div>
        </div>
        <!-- Repite el mismo formato para los otros 6 contenedores -->
            <!-- ... -->
            <div class="custom-item">
            <div class="info">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
            </svg>
                <p>Share via Whatsapp</p>
            </div>
            <div class="arow-share">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            </div>
        </div>
        <!-- Repite el mismo formato para los otros 6 contenedores -->
        <!-- ... -->
        <div class="custom-item">
        <div class="info">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#448AFF" d="M24,4C13.5,4,5,12.1,5,22c0,5.2,2.3,9.8,6,13.1V44l7.8-4.7c1.6,0.4,3.4,0.7,5.2,0.7c10.5,0,19-8.1,19-18C43,12.1,34.5,4,24,4z"></path><path fill="#FFF" d="M12 28L22 17 27 22 36 17 26 28 21 23z"></path>
</svg>
            <p>Share via Messenger</p>
        </div>
        <div class="arow-share">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        </div>
    </div>
    <!-- Repite el mismo formato para los otros 6 contenedores -->
    <!-- ... -->
    <div class="custom-item">
    <div class="info">
    <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC cVBMqs"><title data-testid="svgTitle" id="title_0.8752070784713959">email</title><path d="M18.821,20.5H5.179A3.683,3.683,0,0,1,1.5,16.821V7.179A3.683,3.683,0,0,1,5.179,3.5H18.821A3.683,3.683,0,0,1,22.5,7.179v9.642A3.683,3.683,0,0,1,18.821,20.5ZM5.179,4.5A2.682,2.682,0,0,0,2.5,7.179v9.642A2.682,2.682,0,0,0,5.179,19.5H18.821A2.682,2.682,0,0,0,21.5,16.821V7.179A2.682,2.682,0,0,0,18.821,4.5Z"></path><path d="M12,14.209a.5.5,0,0,1-.346-.138L4.286,7.028a.5.5,0,0,1,.691-.723L12,13.018l7.023-6.713a.5.5,0,1,1,.691.723l-7.368,7.043A.5.5,0,0,1,12,14.209Z"></path><path d="M4.7,17.833a.5.5,0,0,1-.347-.86l5.54-5.31a.5.5,0,0,1,.692.722L5.048,17.694A.5.5,0,0,1,4.7,17.833Z"></path><path d="M19.3,17.832a.5.5,0,0,1-.346-.139l-5.538-5.308a.5.5,0,0,1,.692-.722l5.538,5.308a.5.5,0,0,1-.346.861Z"></path></svg>
        <p>Share via Email</p>
    </div>
    <div class="arow-share">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
    </div>
</div>
            </div>
        `;
        Swal.fire({
            html: customContent,
        });
        event.stopPropagation();
    };
    const handleClickLink = (event, link) => {
        event.preventDefault();  // Detener el comportamiento predeterminado del enlace
        window.open(link, '_blank');  // Abrir el enlace en una nueva pestaña
        event.stopPropagation();  // Evitar la propagación del evento si es necesario
    }
    return (
        <ContainerLinks>
            <Header isVisible={scrollDirection === "up"}>
                <ImageUser isVisible={scrollDirection === "up"}>
                    <Image src={'https://my-page-negiupp.s3.amazonaws.com/1704731920864.jpeg'} alt='image profile' width={100} height={100} />
                </ImageUser>
                <User isVisible={scrollDirection === "up"}>
                    @tianking_
                </User>
                <IconPoints isVisible={scrollDirection === "up"} onClick={handleClickPoints} >
                    <Points />
                </IconPoints>
            </Header>
            <Body>
                <ImagePrincipal>
                    <Image src={'https://my-page-negiupp.s3.amazonaws.com/1704731920864.jpeg'} alt='image profile' width={100} height={100} />
                </ImagePrincipal>
                <InfoSummry>
                    <h1>@tianking_</h1>
                    <p>Full Stack Developer, AI & eCommerce Expert. Founder & CEO of negiupp.com <br /> 💻 🛒 🤖</p>
                </InfoSummry>
                <ContainerBoxLinks>
                    <BoxLink onClick={(ev) => handleClickLink(ev, links[0])} target='_blank' >
                        <ImageLink>
                            <Image src={'https://my-page-negiupp.s3.amazonaws.com/1704832048593.png'} alt='image profile' width={100} height={100} />
                        </ImageLink>
                        <TitleBoxLink>Portfolio - SelfBrand</TitleBoxLink>
                        <IconBoxLink onClick={(event) => handleClickPointLink(event)}>
                            <Points />
                        </IconBoxLink>
                    </BoxLink>
                    <BoxLink onClick={(ev) => handleClickLink(ev, links[1])} target='_blank' >
                        <ImageLink>
                            <Image src={'https://my-page-negiupp.s3.amazonaws.com/1704833278800.png'} alt='image profile' width={100} height={100} />
                        </ImageLink>
                        <TitleBoxLink>negiupp - store</TitleBoxLink>
                        <IconBoxLink onClick={(event) => handleClickPointLink(event)}>
                            <Points />
                        </IconBoxLink>
                    </BoxLink>
                    <BoxLink onClick={(ev) => handleClickLink(ev, links[2])} target='_blank' >
                        <ImageLink>
                            <Image src={'https://my-page-negiupp.s3.amazonaws.com/1704832925918.png'} alt='image profile' width={100} height={100} />
                        </ImageLink>
                        <TitleBoxLink>LinkedIn</TitleBoxLink>
                        <IconBoxLink onClick={(event) => handleClickPointLink(event)}>
                            <Points />
                        </IconBoxLink>
                    </BoxLink>
                    <BoxLink onClick={(ev) => handleClickLink(ev, links[3])} target='_blank' >
                        <ImageLink>
                            <Image src={'https://my-page-negiupp.s3.amazonaws.com/1704832866699.png'} alt='image profile' width={100} height={100} />
                        </ImageLink>
                        <TitleBoxLink>GitHub</TitleBoxLink>
                        <IconBoxLink onClick={(event) => handleClickPointLink(event)}>
                            <Points />
                        </IconBoxLink>
                    </BoxLink>
                </ContainerBoxLinks>
                <ContainerIconsLinks >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
                    >
                        <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
                    >
                        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"
                    >
                        <path d="M 25 2 C 12.311335 2 2 12.311335 2 25 C 2 37.688665 12.311335 48 25 48 C 37.688665 48 48 37.688665 48 25 C 48 12.311335 37.688665 2 25 2 z M 25 4 C 36.607335 4 46 13.392665 46 25 C 46 25.071371 45.994849 25.141688 45.994141 25.212891 C 45.354527 25.153853 44.615508 25.097776 43.675781 25.064453 C 42.347063 25.017336 40.672259 25.030987 38.773438 25.125 C 38.843852 24.634651 38.893205 24.137377 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.111237 10.947969 24.610071 11.017578 25.101562 C 9.2118173 25.017808 7.6020996 25.001668 6.3242188 25.046875 C 5.3845143 25.080118 4.6454422 25.135713 4.0058594 25.195312 C 4.0052628 25.129972 4 25.065482 4 25 C 4 13.392665 13.392665 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8847656 26.021484 C 9.5914575 26.03051 10.40146 26.068656 11.212891 26.109375 C 11.290419 26.421172 11.378822 26.727898 11.486328 27.027344 C 8.178972 27.097092 5.7047309 27.429674 4.1796875 27.714844 C 4.1152068 27.214494 4.0638483 26.710021 4.0351562 26.199219 C 5.1622058 26.092262 6.7509972 25.994233 8.8847656 26.021484 z M 41.115234 26.037109 C 43.247527 26.010033 44.835728 26.108156 45.962891 26.214844 C 45.934234 26.718328 45.883749 27.215664 45.820312 27.708984 C 44.24077 27.41921 41.699674 27.086688 38.306641 27.033203 C 38.411945 26.739677 38.499627 26.438219 38.576172 26.132812 C 39.471291 26.084833 40.344564 26.046896 41.115234 26.037109 z M 11.912109 28.019531 C 12.508849 29.215327 13.361516 30.283019 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.802734 C 10.967811 42.320535 5.6646795 36.204613 4.3320312 28.703125 C 5.8629338 28.414776 8.4265387 28.068108 11.912109 28.019531 z M 37.882812 28.027344 C 41.445538 28.05784 44.08105 28.404061 45.669922 28.697266 C 44.339047 36.201504 39.034072 42.31987 32 44.802734 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.436824 30.284907 37.287588 29.220424 37.882812 28.027344 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.398438 C 28.397408 45.789234 26.72379 46 25 46 C 23.27621 46 21.602592 45.789234 20 45.398438 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"></path>
                    </svg>
                    <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC cVBMqs"><title data-testid="svgTitle" id="title_0.8752070784713959">email</title><path d="M18.821,20.5H5.179A3.683,3.683,0,0,1,1.5,16.821V7.179A3.683,3.683,0,0,1,5.179,3.5H18.821A3.683,3.683,0,0,1,22.5,7.179v9.642A3.683,3.683,0,0,1,18.821,20.5ZM5.179,4.5A2.682,2.682,0,0,0,2.5,7.179v9.642A2.682,2.682,0,0,0,5.179,19.5H18.821A2.682,2.682,0,0,0,21.5,16.821V7.179A2.682,2.682,0,0,0,18.821,4.5Z"></path><path d="M12,14.209a.5.5,0,0,1-.346-.138L4.286,7.028a.5.5,0,0,1,.691-.723L12,13.018l7.023-6.713a.5.5,0,1,1,.691.723l-7.368,7.043A.5.5,0,0,1,12,14.209Z"></path><path d="M4.7,17.833a.5.5,0,0,1-.347-.86l5.54-5.31a.5.5,0,0,1,.692.722L5.048,17.694A.5.5,0,0,1,4.7,17.833Z"></path><path d="M19.3,17.832a.5.5,0,0,1-.346-.139l-5.538-5.308a.5.5,0,0,1,.692-.722l5.538,5.308a.5.5,0,0,1-.346.861Z"></path></svg>
                </ContainerIconsLinks>
            </Body>
        </ContainerLinks>
    )
}

export default LinksPage;
