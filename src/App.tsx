import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Sandbox from './components/Sandbox';

function App() {
	return (
		<Routes>
			<Route path={'/'} element={<Sandbox />} />
		</Routes>
	);
}

export default App;
