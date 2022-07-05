import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
} from "@ionic/react";
import UseApi from "../components/useApi";
import "./Home.css";
import PostForm from "../components/PostForm";
import RemoveForm from "../components/RemoveForm";
import MoviesList from "../components/MoviesList";
import PutForm from '../components/PutForm';

const Home: React.FC = () => {
  const url = process.env.REACT_APP_API_URL;
  const { data, post, remove, put } = UseApi(`${url}/movies`);

  if (!data) return <h1> Cargando...</h1>;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lab 5 Ionic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <PostForm post={post} />
        <RemoveForm remove={remove} />
        <PutForm put={put} />
        <MoviesList data={data} />
      </IonContent>
    </IonPage>
  );
};

export default Home;