//Styles:
import styles from './Card.module.css';
//Utils:
import { SIMBOLS } from '../../utils/Enums';

interface CardProps {
	title: string;
	description: string;
}

const Card = (props: CardProps) => {
	const { title, description } = props;

	return (
		<div class={styles.resource}>
			<h2>{title || SIMBOLS.MINUS}</h2>
			<p>{description || SIMBOLS.MINUS}</p>
		</div>
	);
}	

export default Card;