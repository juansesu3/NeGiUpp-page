import styled from "styled-components";
import StartSolid from "./icons/StarsSolid";
import StartOutLine from "./icons/StarsOutLine";
import StarsRatting from "./StarsRatting";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./icons/Spinner";
import { format } from 'date-fns';
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

const PrincipalContainerReviews = styled.div`
  border-radius: 1rem;
  background-image: linear-gradient(to bottom right, #000000, #131313);
  border: 1px solid #2b2b2b0f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  padding: 1rem;
  margin: auto.5rem;
`;

const RevTit = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin: 1rem 0;
  color: #4d61fc;
`;

const SecondaryContainerReviews = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const FormAddReviews = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-image: linear-gradient(to bottom right, #000000, #131313);
  border: 1px solid #2b2b2b0f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: fit-content;
  h4 {
    color: white;
    margin: 0.5rem 0.3rem;
    font-size: 1.15rem;
  }
  input {
    width: 100%;
    font-size: 1rem;
    border: 0;
    border-radius: 0.6rem;
    padding: 1rem;
    @media screen and (min-width: 768px) {
      padding: 1rem;
    }
    color: #fff;
    background: linear-gradient(
      100deg,
      rgb(189 189 189 / 7%),
      rgba(255, 255, 255, 0)
    );
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
      /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
      /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
      /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  }
  textarea {
    color: #fff;
    width: 100%;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    border: 0;
    border-radius: 0.6rem;
    padding: 1rem 0.8rem;
    background: linear-gradient(
      100deg,
      rgb(189 189 189 / 7%),
      rgba(255, 255, 255, 0)
    );
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
      /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
      /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
      /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
const SubmitButton = styled.button`
 background-color: #4d61fc;
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    color: white;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
      /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
      /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
      /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
`
const AddStars = styled.div`
  svg {
    width: 1.5rem;
    color: #4d61fc;
    cursor: pointer;
    path,
    circle,
    rect,
    polyline,
    line,
    polygon {
      stroke: #5569ff; // Color del borde
      stroke-width: 0.8; // Ancho del borde
    }
  }
`;

const AllReviews = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-image: linear-gradient(to bottom right, #000000, #131313);
  border: 1px solid #2b2b2b0f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
    /* Sombra superior */ 0 8px 16px rgba(0, 0, 0, 0.4),
    /* Sombra inferior */ 4px 0 4px rgba(0, 0, 0, 0.1),
    /* Sombra derecha */ -4px 0 4px rgba(0, 0, 0, 0.1); /* Sombra izquierda */
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h4 {
    color: white;
    margin: 0.5rem 0.3rem;
    font-size: 1.15rem;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const ShowStars = styled.div`
  svg {
    width: 1rem;
    color: #4d61fc;
    cursor: pointer;
    path,
    circle,
    rect,
    polyline,
    line,
    polygon {
      stroke: #5569ff; // Color del borde
      stroke-width: 0.8; // Ancho del borde
    }
  }
`;

const ReviewCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid white;
  margin: 0.5rem 0.5rem;
`;
const DetailsReview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;
const DateReview = styled.div`
  p {
    color: white;
    margin: 0;
    opacity: 0.6;
    font-weight: 100;
  }
`;
const ReviewText = styled.div`
  h4 {
    font-weight: 400;
    margin: 0.5rem 0.3rem;
  }
  p {
    color: white;
    margin: 0.5rem 0.3rem;
    opacity: 0.6;
    font-weight: 200;
  }
`;
const NoReviews = styled.p`
color: white;
padding: 0 1rem;
opacity: 0.5;
`;

const ProfileCreator = styled.div`
color: white;
display: flex;
flex-direction: row;
gap: 0.5rem;
img{
border-radius: 50%;
opacity: inherit;
width: 3rem;
height: 3rem;
}
p{
  opacity: 0.3;
}

`;

const ReviewArticles = ({ articleId }) => {
  const [stars, setStars] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setRiviewsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { data: session } = useSession();
  const [creatorId, setCreatorId] = useState({});
  const [reviewCreator, setReviewCreator] = useState({})
  const filterEmail = session?.user?.email;
  const router = useRouter();
  const { id } = router.query;
  console.log("Review problema",id)

  const getUserByEmail = async () => {
    await axios.get("/api/users?email=" + filterEmail).then((response) => {
      //console.log(response.data);
      setCreatorId(response.data)
    })
  }

  useEffect(() => {
    getUserByEmail();
    getUserById();
  }, [])

  const data = {
    user: creatorId?._id,
    article: articleId,
    stars,
    title,
    content,
  }

  const createReview = async () => {
    await axios.post("/api/review", data).then((res) => {
      setTitle("");
      setContent("");
      setStars(0);
      loadReviews();
    })
  }

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    console.log("Data id  from client side >>>", articleId)
    setRiviewsLoading(true);
    await axios.get("/api/review?article=" + id).then((res) => {
      setReviews(res.data);
      //console.log("Data from cliente side >>>> ", res);
      setRiviewsLoading(false);
    });
  };

  const getUserById = async () => {
    //console.log(reviews)
    for (const review of reviews) {
      //console.log(review)
      await axios.get("/api/users?id=" + review.user).then((response) => {
        //console.log("Data for review >>>", response.data);
        setReviewCreator(response.data)

      });
    }
  }

  const formatDate = (dat) => {
    const fechaHora = new Date(dat);
    const nuevaFechaHora = format(fechaHora, 'MM/dd/yyyy');
    return nuevaFechaHora

  }

  return (
    <PrincipalContainerReviews>
      <RevTit>Reviews</RevTit>
      <SecondaryContainerReviews>
        <FormAddReviews>
          <h4>Add review</h4>
          <StarsRatting onChange={setStars} />
          <div>
            <input
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              type="text"
              placeholder="Title" />
          </div>
          <div>
            <textarea
              value={content}
              onChange={(ev) => setContent(ev.target.value)}
              placeholder="Share Your Perspective" />
          </div>
          <div>
            <SubmitButton type="button" onClick={createReview}>Submit Your Perspective</SubmitButton>
          </div>
        </FormAddReviews>

        <AllReviews>
          <h4>All reviews</h4>
          {reviewsLoading && <Spinner fullWidth={true} />}
          {reviews.length === 0 && <NoReviews>No reviews :( </NoReviews>}
          {reviews.length > 0 && reviews.map((review) => (
            <ReviewCont key={review._id}>


              <DetailsReview>
                <ShowStars>
                  <StarsRatting
                    size="sm"
                    disabled={true}
                    defaultHowMany={review.stars}
                  />
                </ShowStars>
                <DateReview>
                  <p>{formatDate(review.createdAt.split(" ").shift())}</p>
                </DateReview>
              </DetailsReview>

              <ReviewText>
                <h4>{review.title}!</h4>
                <p>
                  {review.content}
                </p>
              </ReviewText>
              {reviewCreator && (
                <ProfileCreator>
                  <div>
                    <Image src={reviewCreator.image} alt="review creator profile" width={100} height={100} />
                  </div>
                  <div>
                    <p>{reviewCreator.name}</p>
                  </div>
                </ProfileCreator>
              )}
            </ReviewCont>
          ))}
        </AllReviews>
      </SecondaryContainerReviews>
    </PrincipalContainerReviews>
  );
};

export default ReviewArticles;
