import styles from './hamburger.module.scss';

type HamburgerProps = {
	isPopup?: boolean;
};

const Hamburger = ({ isPopup }: HamburgerProps) => {
	return (
		<button
			className={
				isPopup
					? `${styles.wrapper} ${styles.wrapper_asEnd}`
					: styles.wrapper
			}
		>
			<div className={styles.item}></div>
			<div className={styles.item}></div>
			<div className={styles.item}></div>
		</button>
	);
};

export default Hamburger;
