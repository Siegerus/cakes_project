import { Outlet } from 'react-router-dom';
import Header from '../header/header';

type Props = {};

const MainLayout = (props: Props) => {
	return (
		<div className="container">
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;
