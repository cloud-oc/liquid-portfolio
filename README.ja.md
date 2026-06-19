# Liquid Portfolio

[中文](README.md) | [日本語](README.ja.md) | [English](README.en.md)

Liquid Portfolio は、ビジュアルクリエイター向けの 1 ページポートフォリオテンプレートです。プロフィール、サービス、注目作品、フレンドリンク、問い合わせ導線をまとめて表示できます。デザイナー、3D アーティスト、モーションデザイナー、小規模なクリエイティブスタジオの Web サイトの出発点として使えます。

このテンプレートは Vite、React、TypeScript、Tailwind CSS、Framer Motion、Lucide React で構築されており、GitHub Pages への公開に適しています。主要なテキスト、作品情報、リンク、画像パスは `src/content/portfolio.ts` にまとめられています。ページ構造を書き換えなくても、内容を差し替えるだけで自分用のポートフォリオにできます。

## 技術スタック

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## クイックスタート

依存関係をインストールします：

```bash
npm install
```

ローカル開発サーバーを起動します：

```bash
npm run dev
```

本番用にビルドします：

```bash
npm run build
```

本番ビルドをプレビューします：

```bash
npm run preview
```

## プロフィールを変更する

主な内容は次のファイルで管理します：

```text
src/content/portfolio.ts
```

まずは `profile` を編集してください：

```ts
export const profile = {
  name: "Username",
  title: "Username",
  heroTitle: "Hi, I'm Username",
  heroDescription:
    "a visual creator crafting striking brands, web experiences, motion, and unforgettable digital projects",
  aboutTitle: "About me",
  about: "With more than five years of experience...",
  contactLabel: "Contact Me",
  contactEmail: "username@example.com",
  contactUrl: "#footer-contact",
};
```

よく変更する項目：

- `name`：サイト上に表示する名前
- `heroTitle`：ファーストビューの見出し
- `heroDescription`：ファーストビューの説明文
- `about`：自己紹介文
- `contactEmail`：連絡先メールアドレス
- `contactUrl`：ボタンの遷移先。例：`mailto:your-name@example.com`

## ナビゲーションとリンクを変更する

ナビゲーションは `navLinks` で管理します：

```ts
export const navLinks = [
  { label: "关于我", href: "#about" },
  { label: "商业合作", href: "#services" },
  { label: "艺术作品", href: "#projects" },
  { label: "联系我", href: "#footer-contact" },
];
```

フッターのフレンドリンクは `friendLinks` で管理します：

```ts
export const friendLinks = [
  { label: "Cloud09", href: "https://cloud09.space" },
];
```

## 作品を追加する

作品は `projects` 配列で管理します。既存のオブジェクトをコピーして、必要な項目を差し替えると追加できます：

```ts
export const projects = [
  {
    id: "project-id",
    number: "04",
    name: "Project Name",
    category: "Client",
    liveUrl: "https://example.com",
    images: {
      leftTop: {
        src: "/artworks/project-name/detail-1.webp",
        alt: "Project detail image",
      },
      leftBottom: {
        src: "/artworks/project-name/detail-2.webp",
        alt: "Project second detail image",
      },
      featured: {
        src: "/artworks/project-name/cover.webp",
        alt: "Project featured image",
      },
    },
  },
];
```

作品画像は次の場所に置くのがおすすめです：

```text
public/artworks/project-name/
```

設定ファイルではサイト内パスで参照します：

```ts
src: "/artworks/project-name/cover.webp"
```

推奨画像サイズ：

```text
cover.webp       1600 x 1200 以上
detail-1.webp    1200 x 800
detail-2.webp    1200 x 1200
```

画像形式は `.webp` または圧縮済みの `.jpg` を推奨します。容量の大きい元画像をそのまま配置するのは避けてください。

## サービス内容を変更する

サービスは `services` 配列で管理します：

```ts
export const services = [
  {
    number: "01",
    name: "3D Modeling",
    description: "Creation of detailed objects...",
  },
];
```

追加、削除、並び替えは自由です。ページには配列の内容が自動的に反映されます。

## 音声とビジュアル素材を差し替える

BGM ファイルはこちらです：

```text
public/audio/bgm.mp3
```

作品画像はこちらに置くのがおすすめです：

```text
public/artworks/
```

グローバルなビジュアルスタイルはこちらです：

```text
src/styles.css
```

液体ガラス風の質感、背景、暗色テーマを調整したい場合は、`.site-backdrop`、`.liquid-glass`、`.liquid-glass-strong` を中心に確認してください。

## GitHub Pages にデプロイする

このプロジェクトには GitHub Actions の自動デプロイ設定が含まれています：

```text
.github/workflows/deploy.yml
```

推奨設定：

1. リポジトリのメインブランチを `main` にします。
2. GitHub リポジトリの `Settings > Pages` を開きます。
3. `Build and deployment` で `GitHub Actions` を選択します。
4. `main` に push すると、自動的にビルドされて `dist` が公開されます。

リポジトリ名が `your-name.github.io` の場合、サイトのルートパスは `/` です。デフォルト設定のままで使えます：

```text
VITE_BASE_PATH=/
```

リポジトリ名が `portfolio` のような通常のプロジェクト名の場合、公開 URL は通常次のようになります：

```text
https://your-name.github.io/portfolio/
```

この場合は、GitHub リポジトリに Actions 変数を追加してください：

```text
Settings > Secrets and variables > Actions > Variables
Name: VITE_BASE_PATH
Value: /portfolio/
```

ローカルでは `.env.example` を `.env.local` にコピーして変更できます：

```bash
cp .env.example .env.local
```

```text
VITE_BASE_PATH=/portfolio/
```

## 拡張アイデア

- 作品詳細ページ
- 作品カテゴリーフィルター
- 問い合わせフォーム
- CMS 連携
- 多言語切り替え
- ダーク / ライトテーマ切り替え
- SEO と Open Graph 画像
