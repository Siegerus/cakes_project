import { PropsWithChildren } from 'react';

import styles from './button.module.scss';
import global from '../../../global.module.scss';

type ButtonProps = PropsWithChildren<{
	className: string;
}>;

const Button = ({ children, className }: ButtonProps) => {
	return (
		<button className={`${global.button} ${className}`} type="button">
			{children}
		</button>
	);
};

export default Button;
