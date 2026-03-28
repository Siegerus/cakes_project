import { PropsWithChildren } from 'react';

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
