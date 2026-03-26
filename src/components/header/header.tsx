import styles from './header.module.scss';
import global from '../../global.module.scss';
import Button from '../ui/button/button';
import Hamburger from '../ui/hamburger/hamburger';
import Logo from '../logo/logo';
import NavMenu from '../nav-menu/nav-menu';

type Props = {};

const Header = (props: Props) => {
	return (
		<header>
			<div className={styles.wrapper}>
				<div className={styles.primary}>
					<Logo />
					<div className={styles.search}>
						<svg
							className={styles.search__icon}
							viewBox="0 0 40 40"
						>
							<use xlinkHref="#search"></use>
						</svg>
						<input
							className={styles.search__input}
							type="search"
							placeholder="Поиск"
						/>
					</div>
				</div>
				<div className={styles.secondary}>
					<Button className={styles.button}>
						<svg
							className={styles.button__icon}
							viewBox="0 0 40 40"
						>
							<use xlinkHref="#cart"></use>
						</svg>
						<span className={styles.button__text}>
							Оформить заказ
						</span>
						<span className={styles.button__price}>6 800 ₽</span>
					</Button>
					<Hamburger />
				</div>
			</div>
			<NavMenu />
		</header>
	);
};

export default Header;
