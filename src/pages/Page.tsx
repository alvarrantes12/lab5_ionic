import {
	IonButtons,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import Home from "./Home";
import "./Page.css";

const Page: React.FC = () => {
	const { name } = useParams<{ name: string }>();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{name}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<Home />
		</IonPage>
	);
};

export default Page;
