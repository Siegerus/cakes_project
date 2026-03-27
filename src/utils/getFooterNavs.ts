import { Nav } from '../types/types';

function getFooterNavs(navs: Nav[]): unknown {
	const result = navs.map(nav =>
		nav.title === 'Каталог' ? { ...nav, title: 'Каталог десертов' } : nav
	);
	const temp = result[0];
	result[0] = result[1];
	result[1] = temp;
	return result;
}

export { getFooterNavs };
