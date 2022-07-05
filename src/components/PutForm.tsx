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
import "./PutForm.css";
type Props = {
  put: any;
};

const PutForm = ({ put }: Props) => {
  const [movieName, setMovieName] = useState("");
  const [movieToEditId, setMovieToEditId] = useState(0);
  const [presentAlert] = useIonAlert();
  return (
    <IonCard class="movie-create-form">
      <IonCardHeader>
        <IonCardTitle color="light">Editar una pelicula:</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonLabel color="light">Ingrese el id de la pelicula:</IonLabel>
        <IonInput
          color="light"
          value={movieToEditId}
          type="number"
          onIonChange={(e) => {
            setMovieToEditId(Number(e.detail.value!));
          }}
          required
        ></IonInput>
        <IonInput
          color="light"
          value={movieName}
          placeholder="Ingrese el nombre de la pelicula"
          onIonChange={(e) => {
            setMovieName(e.detail.value!);
          }}
          required
        ></IonInput>
        <IonButton
          color="primary"
          expand="block"
          class="movie-refresh"
          onClick={() => {
            if (movieToEditId === 0 || movieName === "") {
              presentAlert({
                header: "Alerta",
                message: "Inserte un id de pelicula y nombre de pelicula",
                buttons: ["OK"],
              });
              return;
            }
            put(movieToEditId, { name: movieName });
            setMovieToEditId(0);
            setMovieName("");
          }}
        >
          Put
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default PutForm;