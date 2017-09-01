const Vue = require( 'vue' );
const server = require( 'express' )();
const renderer = require('vue-server-renderer').createRenderer();
const createApp = require( './dist/server-bundle.js' ).default;

server.get( '*', ( req, res ) => {

  const context = { url: req.url }
  const app = createApp(context);

  renderer.renderToString( app, ( err, html ) => {

    if ( err ) {

      res.status( 500 ).end( 'Internal Server Error' );
      return;

    }

    res.setHeader( 'Content-Type', 'text/html' );
    res.end( `
      <!DOCTYPE html>
      <html lang="ja">
        <head><title>Hello</title></head>
        <body>
          <div id="app">${html}</div>
        </body>
      </html>
    ` );

  } );

} );

server.listen( 8080 );
