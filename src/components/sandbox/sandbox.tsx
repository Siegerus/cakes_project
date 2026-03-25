import React from 'react';
import global from '../../global.module.scss';

// import {VITE_TEST_CONST} from '../../../.env'

function Sandbox() {
	const globenv = import.meta.env.VITE_TEST_CONST;
	return (
		<>
			<svg className={global.icon} viewBox="0 0 40 40">
				<use xlinkHref="#vk-colored"></use>
			</svg>
			<p>{globenv}</p>
		</>
	);
}

export default Sandbox;
