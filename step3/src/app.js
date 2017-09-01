import Vue from 'vue'
import App from './App.vue'
// 新しいアプリケーション、ルータ、ストアを作成するためのファクトリ関数をエクスポートします
// インスタンス
export function createApp ( context ) {
  const app = new Vue({
    // ルートインスタンスは単に App コンポーネントを描画します
    render: h => h(App)
  })
  return { app }
}
