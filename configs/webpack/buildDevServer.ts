import type { Configuration } from 'webpack'
import type { BuildWebpackOptions } from './types'

export const buildDevServer = (
	options: BuildWebpackOptions
): Configuration['devServer'] =>
	options.mode === 'development'
		? {
				compress: true,
				port: options.port ?? 3000,
				historyApiFallback: true,
				hot: true,
		  }
		: undefined
