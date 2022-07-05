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
import "./Global.css"

const EditMovie = ({method}: any) => {

	const [movieID, setMovieID] = useState("");
	const [movieName, setMovieName] = useState("");
	const [message, setMessage] = useState("");

	return (
		<IonCard className="Title__Card__Color">
			<IonCardHeader>
				<IonCardTitle className="Card__Letter__Color">Edit Movie</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<IonItem className="List__Card">
					<IonLabel position="stacked">Movie ID</IonLabel>
					<br />
					<IonInput
						className="Input__Color"
						type="number"
						placeholder="ID"
						value={movieID}
						onIonChange={(e) => setMovieID(e.detail.value!)}
					/>
				</IonItem>
				<IonItem className="List__Card">
					<IonLabel className="Label__Styles" position="stacked">New Movie Name</IonLabel>
					<br />
					<IonInput
					  className="Input__Color"
						type="text"
						placeholder="Name"
						value={movieName}
						onIonChange={(e) => setMovieName(e.detail.value!)}
					/>
				</IonItem>

				<IonItem className="List__Card">
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
