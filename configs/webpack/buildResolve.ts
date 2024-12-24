import { Configuration } from 'webpack'
import { BuildWebpackOptions } from './types'

export function buildResolve(
	options: BuildWebpackOptions
): Configuration['resolve'] {
	return {
		extensions: ['.tsx', '.ts', '.js'], //какие расширения обрабатывать
		alias: {
			'@': options.paths.src,
		},
	}
}
