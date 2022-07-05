import { IonContent } from "@ionic/react";
import React from "react";
import CreateMovie from "../components/CreateMovie";
import DeleteMovie from "../components/DeleteMovie";
import EditMovie from "../components/EditMovie";

import MovieList from "../components/MovieList";
import UseApi from "../components/UseApi";

const Home = () => {
	const url = `${process.env.REACT_APP_API_URL}/movies`;
	const { data, postMethod, putMethod, deleteMethod, refetchMethod } = UseApi(url);

	return (
		<IonContent>
			<MovieList data={data} method={refetchMethod}/>
			<CreateMovie method={postMethod}/>
			<EditMovie method={putMethod}/>
			<DeleteMovie method={deleteMethod} url={url}/>
		</IonContent>
	);
};

export default Home;
