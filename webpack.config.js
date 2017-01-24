var config = {
   entry: './main.js',
	 
   output: {
      path:'./',
      filename: 'bundle.js',
   },
	
   devServer: {
      inline: true,
      port: 8990
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;