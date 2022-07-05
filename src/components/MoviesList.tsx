import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonText,
} from "@ionic/react";
import "./MoviesList.css";
type Props = {
  data: any;
};

const MoviesList = ({ data }: Props) => {

  if (!data) return <h1> Cargando...</h1>;
  return (
    <>
      {data?.map((movie: any) => {
        return (
          <IonCard class="movie-card" key={`${movie?.id}${movie?.name}`}>
            <IonCardHeader>
              <IonCardSubtitle class="movie-director">
                Director: {movie?.director.firstname} {movie?.director.lastname}
              </IonCardSubtitle>
              <IonCardTitle class="movie-name">{movie?.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent >
              <IonText class="movie-premiere">{movie?.premiere_date}</IonText>
              <IonCardSubtitle class="movie-id"> {movie?.id}</IonCardSubtitle>
            </IonCardContent>
          </IonCard>
        );
      })}
    </>
  );
};

export default MoviesList;