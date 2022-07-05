import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonInput,
  IonLabel,
  useIonAlert,
} from "@ionic/react";
import "./PostForm.css";
type Props = {
  post: any;
};

const PostForm = ({ post }: Props) => {
  const [movie, setMovie] = useState({
    name: "",
    premiere_date: 2022,
    director_id: 0,
  });
  const [presentAlert] = useIonAlert();
  return (
    <IonCard class="movie-create-form">
      <IonCardHeader>
        <IonCardTitle color="light">Crear una pelicula:</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonInput
          color="light"
          value={movie.name}
          placeholder="Ingrese el nombre de la pelicula"
          onIonChange={(e) => {
            movie.name = e.detail.value!;
            setMovie(movie);
          }}
          required
        ></IonInput>
        <IonLabel color="light">Ingrese el año de estreno:</IonLabel>
        <IonInput
          color="light"
          value={movie.premiere_date}
          type="number"
          onIonChange={(e) => {
            movie.premiere_date = parseInt(e.detail.value!, 10);
            setMovie(movie);
          }}
        ></IonInput>
        <IonLabel color="light">Ingrese el id del director:</IonLabel>
        <IonInput
          color="light"
          value={movie.director_id}
          type="number"
          placeholder="Ingrese el id del director"
          onIonChange={(e) => {
            movie.director_id = parseInt(e.detail.value!, 10);
            setMovie(movie);
          }}
          required
        ></IonInput>
        <IonButton
          color="success"
          expand="block"
          class="movie-refresh"
          onClick={() => {
            if (movie.name === "" || movie.director_id === 0) {
              presentAlert({
                header: 'Alerta',
                message: 'Inserte un nombre y id de director',
                buttons: ['OK'],
              })
              return;
            }
            post(movie);
            setMovie({
              name: "",
              premiere_date: 2022,
              director_id: 0,
            });
          }}
        >
          Post
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default PostForm;