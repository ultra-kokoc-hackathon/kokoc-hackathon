import styles from "./button.module.scss";

type ButtonProps = {
	text: string;
	callback?: () => void;
	classname: string;
};

export const Button = ({ text, callback, classname }: ButtonProps) => {
	return (
		<button
			className={[styles.button, styles[classname]].join(" ")}
			onClick={callback}
		>
			{text}
		</button>
	);
};
