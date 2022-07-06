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

const DeleteMovie = ({method, url}: any) => {

	const [movieID, setMovieID] = useState("");
	const [message, setMessage] = useState("");

	return (
		<IonCard className="Title__Card__Color">
			<IonCardHeader>
				<IonCardTitle className="Card__Letter__Color">
					Delete Movie By ID
				</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<IonItem className="List__Card">
					<IonLabel className="Label__Styles" >Movie ID:</IonLabel>
					<br />
					<IonInput
						className="Input__Color"
						type="text"
						placeholder="ID"
						value={movieID}
						onIonChange={(e) => setMovieID(e.detail.value!)}
					></IonInput>
				</IonItem>
				<IonItem className="List__Card">
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
