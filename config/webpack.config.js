const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const settings = {
	mode: 'development',
	entry: {
		main: './src/js/app.js',
	},

	output: {
		filename: 'js/[name]-[contenthash:6].js',
		path: path.join(__dirname, '../build'),
		assetModuleFilename: 'images/[hash][ext][query]',
	},

	module: {
		rules: [
			{
				test: /\.(css|sass|scss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},

			{
				test: /\.(png|jpe?g|gif|webp|avif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
						
							context: 'public',
							name: '/images/[name]-[hash].[ext]',
							publicPath: 'images',
						},
					},
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'nowa aplikacja',
			template: './src/template/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name]-[contenthash:6].css',
		}),
	],
}

module.exports = settings
