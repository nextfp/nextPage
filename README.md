# NextPage
新潟大学Next. Formula Projectのホームページのリポジトリです。
NEXT.js と tailwind cssを用いて開発されています。

# 実際のページにアクセス

https://next-fp-dev.vercel.app/

# figmaのデザインページ
全てのページとコンポーネントではありませんが、figmaにてデザインを考えました。
https://www.figma.com/file/qcc5C7VvO4PNiLylDK05AW/NewHomePage?type=design&t=FwL08ISscp31Arbk-6
nextのgoogleアカウントでログインすると、編集することが可能です。

# 使用可能なコマンド
以下のコマンドが使用可能です。
- リンタの実行
  eslintを使用して、tailwindcssのクラス名の順番などの警告を出してくれます。
  ```bash
  yarn lint
  ```
- リンタの警告箇所の自動修正
  `yarn lint`で出た警告箇所をある程度(クラス名の順番)を自動的に修正してくれます
  ```bash
  yarn fix:lint
  ```

# コミット時のルール
このリポジトリは途中からですが、セマンティックコミットメッセージに従っています。
- feat: 機能の追加や変更
- docs: ドキュメントの更新
- fix: バグ修正
- refactor: リファクタリング
- test: テストコードの追加や修正
- chore: ビルドツールの導入や依存関係を更新など

コミットメッセージを書く際は、必ず上記の接頭辞を付けてコミットしてください。

# 環境の利用方法とスポンサーの追加方法

[ドキュメント](/docs/)