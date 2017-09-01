const Vue = require( 'vue' );
const server = require( 'express' )();
const renderer = require('vue-server-renderer').createRenderer();

server.get( '*', ( req, res ) => {

  const app = new Vue( {
    data () {
      return {
        url: req.url
      }
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  } );

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
        <body>${html}</body>
      </html>
    ` );

  } );

} );

server.listen( 8080 );
