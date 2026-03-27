import { Link } from 'react-router-dom';

import { Nav } from '../../types/types';
import styles from './nav-menu.module.scss';

type NavMenuProps = {
	navs: Nav[];
	linkClassName: string;
};

const NavMenu = ({ navs, linkClassName }: NavMenuProps) => {
	return (
		<nav>
			<ul>
				{navs.map(nav => (
					<li key={nav.title}>
						<Link className={linkClassName} to={nav.path}>
							<span>{nav.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavMenu;
