import { createApp } from './app'
// クライアント固有の初期化ロジック
const { app } = createApp( {} )
// これは App.vue テンプレートのルート要素が id="app" だからです。
app.$mount('#app')
