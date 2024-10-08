import styles from "./button.module.scss";

type ButtonProps = {
	text: string;
	callback?: () => void;
};

export const Button = ({ text, callback }: ButtonProps) => {
	return (
		<button className={styles.button} onClick={callback}>
			{text}
		</button>
	);
};
