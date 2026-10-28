# GitHub Pagesでの運用

## 公開先

- リポジトリ: https://github.com/ryutousami/openlab2026
- 有効化後の公開URL: https://ryutousami.github.io/openlab2026/
- 配信対象: `public/` のみ。ビルドや依存パッケージは不要です。

## 初回設定

現在のアカウントでは、PrivateリポジトリのPages利用にアップグレードが必要です。無料で利用する場合は、所有者がコードと変更履歴の公開を了承したうえでリポジトリをPublicへ変更します。

1. Settings → Pages を開きます。
2. Build and deployment の Source を **GitHub Actions** に設定します。
3. Actions → Deploy GitHub Pages → Run workflow で `main` を選んで実行します。
4. 成功後、公開URLを開いて表示を確認します。

以後は `public/` または公開ワークフローの変更を `main` にpushすると自動公開されます。手動実行も可能です。Pull Requestからは公開しません。失敗時はActionsのログを確認してください。

## 研究室のサブドメイン（任意）

1. 研究室のDNS管理者と使用するサブドメインを決めます。
2. GitHub Pages設定のCustom domainに登録します。
3. DNSのCNAMEを `ryutousami.github.io` に向けます（`/openlab2026/` は付けません）。
4. DNS確認後にEnforce HTTPSを有効化します。
5. `public/404.html` の `/openlab2026/style.css` と `/openlab2026/` を、それぞれ `/style.css` と `/` に更新します。

## 共同管理と編集

所有者は `ryutousami` です。研究室で管理するには共同管理者の追加、または研究室Organizationへの移管を別途行います。移管・リポジトリ名変更時は公開URLと404ページのパスも見直してください。

`public/index.html` で本文、`public/style.css` でデザインを編集します。参加登録には外部フォームのリンクを使用し、参加者情報はリポジトリに保存しません。公式HPのNews・イベント一覧から公開URLへ誘導します。

GitHub PagesはCloudflareの `_headers` 設定を適用しないため、そのファイルは削除しました。独自のHTTPレスポンスヘッダー設定は含めていません。

## 公開前の確認

- 未確定情報、フォームの受付状態、公式HPと問い合わせ先を確認。
- PC・スマートフォン表示、ページ内リンク、存在しないURLの404画面を確認。
- リポジトリがPrivateでも、通常のGitHub Pagesサイトはインターネット上に公開されます。

## 公式資料

- [公開元の設定・利用プラン](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Actionsによる公開](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

この文書とワークフローの追加だけでは公開は有効になりません。上記の初回設定が必要です。
