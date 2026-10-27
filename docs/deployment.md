# GitHubとCloudflare Pagesでの運用

## GitHub

リポジトリ名は `openlab2026`。初期作成先は `ryutousami` の個人アカウント、公開範囲はPrivateを想定します。研究室管理にするには、運用に合わせて研究室Organizationへ移管するか、研究室の管理担当者を共同管理者として追加してください。個人アカウントに作成しただけでは研究室による管理体制は完成しません。

## Cloudflare Pagesへの初回接続

1. 研究室で管理するCloudflareアカウントの「Workers & Pages」からPagesのGit連携を作成。
2. GitHubの `openlab2026` リポジトリを接続。非公開リポジトリの場合はCloudflareのGitHub連携に対象リポジトリへのアクセスを許可。
3. 下記を設定してデプロイ。

| 項目 | 値 |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Build command | `exit 0` |
| Build output directory | `public` |
| Root directory | 空欄（リポジトリルート） |
| Environment variables | 不要 |

初回公開後、Cloudflareが割り当てた `https://<プロジェクト名>.pages.dev` を確認します。希望名が空いていない場合は別のプロジェクト名になります。

このサイトは静的配信のみで、Workers・Functions・データベースを使用しません。無料枠での運用を想定しています。利用枠の最新条件はCloudflare側で確認してください。

## 研究室のサブドメイン

1. 研究室のDNS管理者と、使用するサブドメインを決める。
2. Pagesプロジェクトの「Custom domains」にそのサブドメインを追加。
3. 案内に従い、DNSでサブドメインのCNAMEを `<プロジェクト名>.pages.dev` に向ける。
4. HTTPS証明書の有効化と画面表示を確認し、研究室HPからリンクする。

Pages側へのドメイン登録を先に行ってください。DNSのCNAME追加だけでは設定は完了しません。研究室ドメインがCloudflare以外で管理されていても、サブドメインのCNAME設定で利用できる構成があります。

## 公開前の確認

- 仮の文章・準備中の表示を確認し、確定情報に更新する。
- スマートフォン・PCの表示とページ内リンクを確認する。
- フォームの受付状態、共有範囲、主催者による個人情報の取り扱い説明を確認する。
- 公式HPリンクと問い合わせ先を設定する。
- PagesのプレビューURLはPrivateリポジトリでも自動的に非公開になるとは限りません。プレビューにも機密情報を掲載しないでください。

## 参考（Cloudflare公式）

- [Static HTML](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/)
- [Custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)

※ この文書は設定手順です。Cloudflareへの接続・公開・DNS変更を実施済みという意味ではありません。
