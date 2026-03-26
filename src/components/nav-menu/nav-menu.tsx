import { Link } from 'react-router-dom';

import { NAVS } from '../../constants';
import styles from './nav-menu.module.scss';

type Props = {};

const NavMenu = (props: Props) => {
	return (
		<nav>
			{NAVS.map(nav => (
				<Link className={styles.link} to={nav.path} key={nav.title}>
					<span>{nav.title}</span>
				</Link>
			))}
		</nav>
	);
};

export default NavMenu;
