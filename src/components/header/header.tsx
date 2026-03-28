import Button from '../ui/button/button';
import Hamburger from '../ui/hamburger/hamburger';
import Logo from '../logo/logo';
import NavMenu from '../nav-menu/nav-menu';
import HamburgerPopup from '../hamburger-popup/hamburger-popup';
import { NAVS } from '../../constants';
import styles from './header.module.scss';

type Props = {};

const Header = (props: Props) => {
	return (
		<>
			<header className={styles.header}>
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
						<Button
							className={`button button_primary ${styles.button}`}
						>
							<svg
								className={styles.button__icon}
								viewBox="0 0 40 40"
							>
								<use xlinkHref="#cart"></use>
							</svg>
							<span className={styles.button__text}>
								Оформить заказ
							</span>
							<span className={styles.button__price}>
								6 800 ₽
							</span>
						</Button>
						<Hamburger />
					</div>
				</div>
				<NavMenu navs={NAVS} linkClassName={styles.link} />
			</header>

			<HamburgerPopup />
		</>
	);
};

export default Header;
