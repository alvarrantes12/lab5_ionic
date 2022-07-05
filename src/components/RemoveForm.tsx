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
  remove: any;
};

const RemoveForm = ({ remove }: Props) => {
  const [movieToDeleteId, setMovieToDeleteId] = useState(0);
  const [presentAlert] = useIonAlert();
  return (
    <IonCard class="movie-create-form">
      <IonCardHeader>
        <IonCardTitle color="light">Eliminar una pelicula:</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonLabel color="light">Ingrese el id de la pelicula:</IonLabel>
        <IonInput
          color="light"
          value={movieToDeleteId}
          type="number"
          onIonChange={(e) => {
            setMovieToDeleteId(Number(e.detail.value!));
          }}
          required
        ></IonInput>
        <IonButton
          color="danger"
          expand="block"
          class="movie-refresh"
          onClick={() => {
            if (movieToDeleteId === 0) {
              presentAlert({
                header: 'Alerta',
                message: 'Inserte un id de pelicula',
                buttons: ['OK'],
              })
              return;
            }
            remove(movieToDeleteId);
            setMovieToDeleteId(0);
          }}
        >
          Delete
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default RemoveForm;