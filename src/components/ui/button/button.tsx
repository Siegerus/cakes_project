import { PropsWithChildren } from 'react';

import styles from './button.module.scss';

type ButtonProps = PropsWithChildren<{
	className: string;
}>;

const Button = ({ children, className }: ButtonProps) => {
	return (
		<button className={`${className}`} type="button">
			{children}
		</button>
	);
};

export default Button;
