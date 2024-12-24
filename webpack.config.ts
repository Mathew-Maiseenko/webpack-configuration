import path from 'path'
import { BuildPaths } from './configs/webpack/types'
import { buildWebpack } from './configs/webpack/buildWebpack'

type Mode = 'development' | 'production'

interface EnvironmentVariables {
	mode: Mode
	port?: number
	analyzer?: boolean
	device?: 'desktop' | 'mobile'
}

export default (env: EnvironmentVariables) => {
	console.log(env)

	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'template.html'),
		src: path.resolve(__dirname, 'src'),
		public: path.resolve(__dirname, 'public'),
	}

	// const isDev = env.mode === 'development' // флажек режима разработки
	// const config: webpack.Configuration = {
	// 	mode: env.mode ?? 'development', // режим разработки
	// 	entry: path.resolve(__dirname, 'src', 'index.tsx'), // путь до точки входа в приложение
	// 	output: {
	// 		clean: true, //очищать ли папку после ребилада
	// 		path: path.resolve(__dirname, 'build'), // папка хранения бандла
	// 		filename: 'bundle.[contenthash].js', // имя бандл файла
	// 	},
	// 	module: {
	// 		rules: [
	// 			{
	// 				test: /\.tsx?$/, //подключение обработки ts/tsx файлов (ts-loader)-ом
	// 				use: 'ts-loader',
	// 				exclude: /node_modules/, //исключение из обработки
	// 			},
	// 			{
	// 				test: /\.s[ac]ss$/i, // css and scss
	// 				use: [
	// 					//с конца в начало массива
	// 					// Creates `style` nodes from JS strings
	// 					MiniCssExtractPlugin.loader,
	// 					// Translates CSS into CommonJS
	// 					'css-loader',
	// 					// Compiles Sass to CSS
	// 					'sass-loader',
	// 				],
	// 			},
	// 		],
	// 	},
	// 	resolve: {
	// 		extensions: ['.tsx', '.ts', '.js'], //какие расширения обрабатывать
	// 	},
	// 	plugins: [
	// 		new HtmlWebpackPlugin({
	// 			template: path.resolve(__dirname, 'public', 'template.html'),
	// 			// путь входного html, который будут преобразовыватьл в бандл
	// 		}),
	// 		isDev && new webpack.ProvidePlugin({}), //плагин показывабщий прогресс сборки проекта (медлителен при продакшене)
	// 		isDev && new MiniCssExtractPlugin(),
	// 	].filter(Boolean), // фильтрайция по истинности

	// 	devtool: isDev ? 'inline-source-map' : undefined, // sourse-map для отловления ошибок в режиме разработки
	// 	devServer: isDev
	// 		? {
	// 				compress: true,
	// 				port: env.port ?? 3000, //подключение порта
	// 		  }
	// 		: undefined,
	// }

	return buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? 'development',
		device: env.device ?? 'desktop',
		analyzer: env.analyzer,
		paths,
	})
}
