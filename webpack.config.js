module.exports = {
  //instruct webpack on how to compile the application
  entry: "./src/app.ts", // where the typescript files are to be compiled  - basically the entry file
  output: {
    // destination to which the compiled code is to be stored in
    filename: "app.js", // the file searched for by index.html
    path: __dirname + "./dist" //path of the directory under which app.js will be created  - dirname--> known as directory name - a global variable name supplied by node when we run our webpack configuration --> the dist folder here will be a virtual dist folder which is created by webpack
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      // here we supply loaders to test against different file extensions
      // --> here in this module we are testing against ts files
      // -- we supply a loader which will compile those ts files
      // -- and thus using webpack. we get the benefit of it being a bundler
      // --> being a bundler, it takes care of all the import and export statements which will not
      // be recognised by the browser which is where our webpack comes in acting as our module bundler
      {
        test: /\.ts$/,
        use: "awesome-typescript-loader"
      }
      // 1st property denotes that we want to test --> inside it, a regExp to search for ts --? '$' denoting end of file name or the string that we are testing against
      // 2nd property is where we supply our loaders -- awesome-typescript-loader(detects changes in our ts files) which is already mentioned in our package.json -- it is the ts loader for webpack --meaning we need not use tsc directly and picks up the specs specified in tsconfig.js
    ]
  },
  devServer: {
    //supply the development server
    port: 3000
  }
};
