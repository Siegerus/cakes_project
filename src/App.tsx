import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './global.module.scss';

import { AppRoute } from './constants';
import MainLayout from './components/layout/main-layout';
import MainPage from './pages/main-page';
import AboutPage from './pages/about-page';
import CatalogPage from './pages/catalog-page';
import DeliveryPage from './pages/delivery-page';
import FaqPage from './pages/faq-page';
import RewievsPage from './pages/rewievs-page';
import ContactsPage from './pages/contacts-page';

function App() {
	return (
		<Routes>
			<Route path={AppRoute.ROOT} element={<MainLayout />}>
				<Route index element={<MainPage />} />
				<Route path={AppRoute.ABOUT} element={<AboutPage />} />
				<Route path={AppRoute.CATALOG} element={<CatalogPage />} />
				<Route path={AppRoute.DELIVERY} element={<DeliveryPage />} />
				<Route path={AppRoute.FAQ} element={<FaqPage />} />
				<Route path={AppRoute.REVIEWS} element={<RewievsPage />} />
				<Route path={AppRoute.CONTACTS} element={<ContactsPage />} />
			</Route>
		</Routes>
	);
}

export default App;
