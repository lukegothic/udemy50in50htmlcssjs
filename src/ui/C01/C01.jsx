import fondo1 from "./assets/fondo1.jpg";
import fondo2 from "./assets/fondo2.jpg";
import fondo3 from "./assets/fondo3.jpg";
import fondo4 from "./assets/fondo4.jpg";
import fondo5 from "./assets/fondo5.jpg";
import { useReducer, useState } from "react";

import { PhotoCarousel, Photo } from "./C01.styled";

const titles = {
  0: "La Galaxia",
  1: "La Montaña",
  2: "El Otoño",
  3: "La Motosierra",
  4: "La Inquietud"
};

// useReducer is usually preferable to useState when you have complex state logic that involves multiple
// sub-values or when the next state depends on the previous one.

// actions
const carouselActions = {
  SETCURRENTPHOTO: 1,
  ADDPHOTO: 2
};

// action manager
const carouselActionManager = (state, action) => {
  switch (action.type) {
    case carouselActions.SETCURRENTPHOTO:
      return {
        photos: [...state.photos],
        current: action.payload
      };
    case carouselActions.ADDPHOTO:
      return {
        photos: [...state.photos, action.payload],
        current: action.payload
      };
    default:
      throw new Error("");
  }
};

// action manager dispatcher wrappers
const setCurrentPhoto = payload => ({
  type: carouselActions.SETCURRENTPHOTO,
  payload
});
const addPhoto = payload => ({ type: carouselActions.ADDPHOTO, payload });

export const C01 = () => {
  // cambio a un usestate complejo para evitar re-render innecesario generado por actualizar secuencialmente (con useEffect) dos estados
  const [carousel, manageCarousel] = useReducer(carouselActionManager, {
    photos: [fondo1, fondo2, fondo3, fondo4],
    current: fondo1
  });
  return (
    <div>
      <PhotoCarousel>
        {carousel.photos.map((f, i) => (
          <Photo
            key={i}
            active={f === carousel.current}
            background={f}
            caption={titles[i]}
            onClick={() => manageCarousel(setCurrentPhoto(f))}
          ></Photo>
        ))}
      </PhotoCarousel>
      <button onClick={() => manageCarousel(addPhoto(fondo5))}>
        add photo
      </button>
    </div>
  );
};

// approach clásico con useState
export const C01State = () => {
  // TODO: reducer
  // cambio a un usestate complejo para evitar re-render innecesario generado por actualizar secuencialmente (con useEffect) dos estados
  const [carouselData, setCarouselData] = useState({
    photos: [fondo1, fondo2, fondo3, fondo4],
    current: fondo1
  });
  /*
  const [photos, setPhotos] = useState([ fondo1, fondo2, fondo3, fondo4 ]);
  const [currentPhoto, setCurrentPhoto] = useState(fondo1);
  */
  // useUpdateEffect(() => setCurrentPhoto(photos[photos.length-1]), [photos.length]);
  return (
    <div>
      <PhotoCarousel>
        {carouselData.photos.map((f, i) => (
          <Photo
            key={i}
            active={f === carouselData.current}
            background={f}
            caption={titles[i]}
            onClick={() =>
              setCarouselData(data => ({ photos: data.photos, current: f }))
            }
          ></Photo>
        ))}
      </PhotoCarousel>
      <button
        onClick={() =>
          setCarouselData(data => ({
            photos: [...data.photos, fondo5],
            current: fondo5
          }))
        }
      >
        add photo
      </button>
    </div>
  );
};
