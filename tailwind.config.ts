import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'], theme: { extend: { colors: { shed: { black:'#121212', mint:'#00FFCC' } }, boxShadow: { mint:'0 0 35px rgba(0,255,204,.12)' } } }, plugins: [] };
export default config;
