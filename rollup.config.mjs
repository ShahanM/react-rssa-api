import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.js',
			format: 'cjs',
		},
		{
			file: 'dist/index.es.js',
			format: 'esm',
		}
	],
	plugins: [peerDepsExternal(), resolve(), commonjs(), 
		typescript({ 
			tsconfig: './tsconfig.json',
			declaration: true,
			rootDir: 'src',
		})],
};