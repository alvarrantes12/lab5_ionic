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

const DeleteMovie = ({method, url}: any) => {

	const [movieID, setMovieID] = useState("");
	const [message, setMessage] = useState("");

	return (
		<IonCard className="delete-movie-card">
			<IonCardHeader>
				<IonCardTitle className="delete-movie-card-title">
					Delete Movie By ID
				</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<IonItem>
					<IonLabel>Movie ID</IonLabel>
					<IonInput
						type="text"
						placeholder="ID"
						value={movieID}
						onIonChange={(e) => setMovieID(e.detail.value!)}
					></IonInput>
				</IonItem>
				<IonItem>
					<IonButton
					color="danger"
						onClick={() => {
							method(`${url}/${movieID}`);
							setMessage("Movie deleted!");
						}}
					>
						Delete
					</IonButton>
				</IonItem>

        {message!=="" ? <IonItem><IonLabel>{message}</IonLabel></IonItem> : null}

			</IonCardContent>
		</IonCard>
	);
};

export default DeleteMovie;
