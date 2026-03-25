import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './app.scss';
import Sandbox from './components/sandbox/sandbox';

function App() {
	return (
		<Routes>
			<Route path={'/'} element={<Sandbox />} />
		</Routes>
	);
}

export default App;
