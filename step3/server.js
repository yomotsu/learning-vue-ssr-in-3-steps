const fs = require('fs');
const server = require( 'express' )();
const Vue = require( 'vue' );

const { createBundleRenderer } = require('vue-server-renderer')

const serverBundle = require( './dist/vue-ssr-server-bundle.json' )
const renderer = createBundleRenderer( serverBundle, {
  inject: false,
  template: 
    `<!DOCTYPE html>
      <html>
        <head>
          <!-- HTML でエスケープされない展開 (interpolation) のための mustache を使う -->
          {{{ renderResourceHints() }}}
          {{{ renderStyles() }}}
        </head>
        <body>
          <!--vue-ssr-outlet-->
          {{{ renderState() }}}
          {{{ renderScripts() }}}
        </body>
      </html>`,
  // clientManifest: require('./dist/vue-ssr-client-manifest.json'),
  runInNewContext: false,
})

server.get( '*', ( req, res ) => {

  const context = { url: req.url }
  // バンドルを実行することで自動作成されるため、ここでアプリケーションを渡す必要はありません
  // 今、私たちのサーバーはVueアプリから切り離されています！
  renderer.renderToString(context, (err, html) => {

    if ( err ) {

      res.status( 500 ).end( 'Internal Server Error' );
      return;

    }

    res.setHeader( 'Content-Type', 'text/html' );
    res.end( html );

  })

} );

server.listen( 8080 );
