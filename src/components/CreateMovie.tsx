/* eslint-disable no-lone-blocks */
import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonInput,
	IonItem,
	IonLabel,
} from "@ionic/react";
import React, { useState } from "react";
import UseApi from "./UseApi";

const CreateMovie = ({method}: any) => {
	const url = `${process.env.REACT_APP_API_URL}/movies`;
	const { postMethod } = UseApi(url);

	const [movieName, setName] = useState("");
	const [movieAge, setAge] = useState("");
	const [directorId, setDirectorId] = useState("");
	const [message, setMessage] = useState("");

	return (
		<IonCard className="create-movie-card">
			<IonCardHeader>
				<IonCardTitle>Create New Movie</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<IonItem>
					<IonLabel position="stacked">Movie Name</IonLabel>
					<IonInput
						type="text"
						placeholder="Name"
						value={movieName}
						onIonChange={(e) => setName(e.detail.value!)}
					/>
				</IonItem>
				<IonItem>
					<IonLabel position="stacked">Release Date</IonLabel>
					<IonInput
						type="text"
						placeholder="Year"
						value={movieAge}
						onIonChange={(e) => setAge(e.detail.value!)}
					/>
				</IonItem>
				<IonItem>
					<IonLabel position="stacked">Director ID</IonLabel>
					<IonInput
						type="text"
						placeholder="Director ID"
						value={directorId}
						onIonChange={(e) => setDirectorId(e.detail.value!)}
					/>
				</IonItem>

				<IonItem>
					<IonButton
						color="success"
						onClick={() => {
							postMethod({
								name: movieName,
								age: movieAge,
								director_id: directorId,
							});
							setName("");
							setAge("");
							setDirectorId("");
							setMessage("Movie created!");
						}}
					>
						Create
					</IonButton>
				</IonItem>

        {message!=="" ? <IonItem><IonLabel>{message}</IonLabel></IonItem> : null}

			</IonCardContent>
		</IonCard>
	);
};

export default CreateMovie;
