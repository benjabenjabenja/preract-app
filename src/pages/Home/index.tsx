import { useEffect, useState } from 'preact/hooks';
//Components:
import Card from '../../components/Card/Card';
//Styles:
import './style.css';
//Utils:
import {
	HREF_PREACT,
	HREF_REACT,
	HREF_VITE,
	LOGOS_OBJECT,
	FAKE_DATA_CARDS,
} from '../../utils/Constants';


interface Cards {
	title: string;
	description: string;
}

export function Home() {
	const [data, setData] = useState<Cards[]>([]);

	useEffect(() => {
		setData(FAKE_DATA_CARDS);
	}, []);


	return (
		<div class="home">
			<a href={HREF_PREACT} target="_blank">
				<img class="img" src={LOGOS_OBJECT.PREACT.logo} alt={LOGOS_OBJECT.PREACT.alt} height={LOGOS_OBJECT.PREACT.height} width={LOGOS_OBJECT.PREACT.width} />
			</a>
			<a href={HREF_REACT} target="_blank">
				<img class="img react__icon" src={LOGOS_OBJECT.REACT.logo} alt={LOGOS_OBJECT.REACT.alt} height={LOGOS_OBJECT.REACT.height} width={LOGOS_OBJECT.REACT.width} />
			</a>
			<a href={HREF_VITE} target="_blank">
				<img class="img vite__icon" src={LOGOS_OBJECT.VITE.logo} alt={LOGOS_OBJECT.VITE.alt} height={LOGOS_OBJECT.VITE.height} width={LOGOS_OBJECT.VITE.width} />
			</a>

			<h1>Get Started building Vite-powered Preact Apps </h1>

			<section>
				{data.map((item) => (
					<Card
						title={item.title}
						description={item.description}
					/>
				))}
			</section>
		</div>
	);
}
