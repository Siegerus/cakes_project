const BACKEND_URL =
	(globalThis as any).importMeta?.env?.VITE_BACKEND_URL ||
	'http://localhost:4000';

export default BACKEND_URL;
