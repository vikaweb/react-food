import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

interface CardProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strInstructions: string;
  strYoutube?: string;
}

function Card() {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<CardProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getMealById(id).then((data) => setCard((data.meals?.[0] as CardProps) ?? null));
    }
  }, [id]);

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div>
        {!card ? (
          <Preloader />
        ) : (
          <div className="resepi">
            <img src={card.strMealThumb} alt={card.strMeal} />
            <h1>{card.strMeal}</h1>
            <h6>{card.strCategory}</h6>
            <p>{card.strInstructions}</p>
            {card.strYoutube && (
              <div>
                <iframe
                  width="887"
                  height="499"
                  src={`https://www.youtube.com/embed/${card.strYoutube.slice(-11)}`}
                  title={card.strMeal}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export { Card };
