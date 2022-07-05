import React from "react";
import {
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonCardSubtitle,
	IonCardContent,
	IonLabel,
	IonButton,
} from "@ionic/react";

const MovieList = ({ data, method }: any) => {
	if (!data) {
		return (
			<IonCard>
				<IonLabel>Cargando...</IonLabel>
				<IonButton onClick={method}>Refresh</IonButton>
			</IonCard>
		);
	} else {
		return (
			<IonCard className="Title__Card__Color">
				<IonCardContent>
					{data?.map((movie: any) => {
						return (
							<IonCard className="List__Card" key={movie.id}>
								<IonCardHeader>
									<IonCardTitle className="Card__Title">
										{movie.name}
									</IonCardTitle>
									<IonCardSubtitle className="Card__Subtitle">
										{"Director: " +
											movie?.director?.first_name +
											" " +
											movie?.director?.last_name +
											". Director ID: " +
											movie?.director?.id}
									</IonCardSubtitle>
								</IonCardHeader>
								<IonCardContent>
									{"Movie ID: " + movie.id}
									<br />
									{"Release date: " + movie.age}
								</IonCardContent>
							</IonCard>
						);
					})}
					<IonButton onClick={method}>Refresh</IonButton>
				</IonCardContent>
			</IonCard>
		);
	}
};

export default MovieList;
