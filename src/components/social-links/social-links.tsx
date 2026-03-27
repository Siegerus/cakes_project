import { PropsWithChildren, ReactNode } from 'react';
import styles from './social-links.module.scss';

type SocialLinksProps = {
	children: ReactNode[];
};

const SocialLinks = ({ children }: SocialLinksProps) => {
	return (
		<ul className={styles.list}>
			<li>
				<a href="/">{children[0]}</a>
			</li>
			<li>
				<a href="/">{children[1]}</a>
			</li>
			<li>
				<a href="/">{children[2]}</a>
			</li>
		</ul>
	);
};

export default SocialLinks;
