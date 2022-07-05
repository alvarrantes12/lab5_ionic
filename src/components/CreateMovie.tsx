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

const CreateMovie = ({ method }: any) => {
	const url = `${process.env.REACT_APP_API_URL}/movies`;
	const { postMethod } = UseApi(url);

	const [movieName, setName] = useState("");
	const [movieAge, setAge] = useState("");
	const [directorId, setDirectorId] = useState("");
	const [message, setMessage] = useState("");

	return (
		<IonCard className="Title__Card__Color">
			<IonCardHeader>
				<IonCardTitle className="Card__Letter__Color">
					Create New Movie
				</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<IonItem className="List__Card">
					<IonLabel className="Label__Styles" position="stacked">Movie Name: </IonLabel>
					<br />
					<IonInput
						className="Input__Color"
						type="text"
						placeholder="Name"
						value={movieName}
						onIonChange={(e) => setName(e.detail.value!)}
					/>
				</IonItem>
				<IonItem className="List__Card">
					<IonLabel position="stacked">Release Date</IonLabel>
					<br />
					<IonInput
						className="Input__Color"
						type="text"
						placeholder="Year"
						value={movieAge}
						onIonChange={(e) => setAge(e.detail.value!)}
					/>
				</IonItem>
				<IonItem className="List__Card">
					<IonLabel position="stacked">Director ID</IonLabel>
					<br />
					<IonInput
						className="Input__Color"
						type="text"
						placeholder="Director ID"
						value={directorId}
						onIonChange={(e) => setDirectorId(e.detail.value!)}
					/>
				</IonItem>

				<IonItem className="List__Card">
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

				{message !== "" ? (
					<IonItem>
						<IonLabel>{message}</IonLabel>
					</IonItem>
				) : null}
			</IonCardContent>
		</IonCard>
	);
};

export default CreateMovie;
