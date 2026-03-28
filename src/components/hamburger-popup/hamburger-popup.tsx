import NavMenu from '../nav-menu/nav-menu';
import Button from '../ui/button/button';
import SocialLinks from '../social-links/social-links';
import Hamburger from '../ui/hamburger/hamburger';
import { NAVS } from '../../constants';
import { getSecondaryNavs } from '../../utils/getSecondaryNavs';
import { Nav } from '../../types/types';
import styles from './hamburger-popup.module.scss';

type Props = {};

const HamburgerPopup = (props: Props) => {
	return (
		<div className={styles.wrapper}>
			<div>
				<Hamburger isPopup />
				<NavMenu
					navs={getSecondaryNavs(NAVS, true) as Nav[]}
					linkClassName={styles.link}
				/>
				<Button className={`button button_secondary ${styles.button}`}>
					<span>Написать в Telegram</span>
					<svg className={styles.button__icon} viewBox="0 0 15 13">
						<use xlinkHref="#tg-sm"></use>
					</svg>
				</Button>
				<SocialLinks>
					<a className={styles.icon} href="/">
						<img
							src="../../../images/tg-colored.svg"
							alt="tg-icon"
						/>
					</a>
					<a className={styles.icon} href="/">
						<img
							src="../../../images/vk-colored.svg"
							alt="vk-icon"
						/>
					</a>
					<a className={styles.icon} href="/">
						<img
							src="../../../images/inst-colored.svg"
							alt="inst-icon"
						/>
					</a>
				</SocialLinks>
			</div>
		</div>
	);
};

export default HamburgerPopup;
