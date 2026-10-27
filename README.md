# 河口研究室 Open Lab 2026

イベント特設サイトの初期土台です。HTML・CSSのみの静的サイトで、ビルドや依存パッケージは不要です。開催内容とデザインは今後更新します。

## ファイル

| ファイル | 編集内容 |
| --- | --- |
| `public/index.html` | 本文、日時、会場、プログラム、申込先、公式HPへのリンク |
| `public/style.css` | 配色、レイアウト、スマートフォン表示 |
| `public/favicon.svg` | タブのアイコン |
| `public/404.html` | 存在しないページの案内 |
| `public/_headers` | Cloudflare Pagesのレスポンスヘッダー |
| `docs/deployment.md` | GitHub・Cloudflare Pages・ドメインの設定手順 |

## ローカルで確認

リポジトリのフォルダで実行します（Python 3が必要）。

```sh
python3 -m http.server 8000 --directory public --bind 127.0.0.1
```

ブラウザで http://127.0.0.1:8000 を開きます。停止は Ctrl+C。

## GitHubで編集

1. 編集したいファイルを開き、鉛筆アイコンを選択。
2. 編集後、ブランチを作成して変更をコミット。
3. Pull Requestで研究室メンバーが確認し、`main`へマージ。
4. Cloudflare Pages連携後は、`main`の変更が自動的に本番サイトへ反映されます。

## 参加登録の追加

Googleフォーム等は別途作成します。`public/index.html`の `class="pending"` の要素を、実際のフォームURLを指定したリンクに置き換えてください。

```html
<a class="button" href="ここに実際のHTTPSフォームURL">参加登録フォームへ ↗</a>
```

受付開始の説明文も合わせて更新してください。フォームへの外部リンクのみを設置し、回答データ・参加者一覧・認証情報はこのリポジトリに含めません。現在、JavaScript・Cookie・アクセス解析・入力フォームはありません。

## 次に決める情報

- 開催日・開始終了時刻、会場、住所と交通案内
- プログラム、参加費、定員、申込締切
- GoogleフォームURL、問い合わせ先、研究室公式HPのURL
- 写真やロゴの使用許可、デザイン方針

研究室公式HPのNews・イベント一覧には、公開後の特設サイトURLを掲載します。現在のページ内の未確定事項はすべて「準備中」としています。
