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

const EditMovie = ({method}: any) => {

	const [movieID, setMovieID] = useState("");
	const [movieName, setMovieName] = useState("");
	const [message, setMessage] = useState("");

	return (
		<IonCard className="edit-movie-card">
			<IonCardHeader>
				<IonCardTitle>Edit Movie</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<IonItem>
					<IonLabel position="stacked">Movie ID</IonLabel>
					<IonInput
						type="number"
						placeholder="ID"
						value={movieID}
						onIonChange={(e) => setMovieID(e.detail.value!)}
					/>
				</IonItem>
				<IonItem>
					<IonLabel position="stacked">New Movie Name</IonLabel>
					<IonInput
						type="text"
						placeholder="Name"
						value={movieName}
						onIonChange={(e) => setMovieName(e.detail.value!)}
					/>
				</IonItem>

				<IonItem>
					<IonButton
						color="warning"
						onClick={() => {
							method({name: movieName}, movieID);
							setMessage("Movie modified!");
						}}
					>
						Edit
					</IonButton>
				</IonItem>

        {message!=="" ? <IonItem><IonLabel>{message}</IonLabel></IonItem> : null}

			</IonCardContent>
		</IonCard>
	);
};

export default EditMovie;
