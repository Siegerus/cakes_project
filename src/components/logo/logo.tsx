import styles from './logo.module.scss';

type Props = {};

const Logo = (props: Props) => {
	return (
		<a className={styles.link} href="/">
			<img
				className={styles.image}
				src=""
				alt="logo-image"
				width="98"
				height="56px"
			/>
		</a>
	);
};

export default Logo;
