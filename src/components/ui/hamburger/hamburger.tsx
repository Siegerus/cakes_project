import styles from './hamburger.module.scss';

type Props = {};

const Hamburger = (props: Props) => {
	return (
		<button className={styles.wrapper}>
			<div className={styles.item}></div>
			<div className={styles.item}></div>
			<div className={styles.item}></div>
		</button>
	);
};

export default Hamburger;
