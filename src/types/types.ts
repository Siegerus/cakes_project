import { AppRoute } from '../constants';

export type Nav = {
	title:
		| 'О нас'
		| 'Каталог'
		| 'Доставка и оплата'
		| 'Частые вопросы'
		| 'Отзывы'
		| 'Контакты';
	image: string;
	path: (typeof AppRoute)[keyof typeof AppRoute];
};
