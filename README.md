# Liquid Portfolio

[中文](README.md) | [日本語](README.ja.md) | [English](README.en.md)

Liquid Portfolio 是一个面向视觉创作者的单页作品集模板。它适合用来展示个人简介、服务项目、精选作品、友情链接和联系方式，也适合作为设计师、3D 艺术家、动态设计师或小型创意工作室的官网起点。

模板使用 Vite、React、TypeScript、Tailwind CSS、Framer Motion 和 Lucide React 构建，适合部署到 GitHub Pages。主要内容集中维护在 `src/content/portfolio.ts` 中，通常只需要替换文字、作品图片和链接，就能快速生成一个属于自己的作品集网站。

## 技术栈

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## 快速开始

安装依赖：

```bash
npm install
```

启动本地开发服务：

```bash
npm run dev
```

构建生产版本：

```bash
npm run build
```

预览生产构建：

```bash
npm run preview
```

## 自定义个人信息

主要内容在：

```text
src/content/portfolio.ts
```

你可以先修改 `profile`：

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

常用修改项包括：

- `name`：网站中的名称
- `heroTitle`：首屏标题
- `heroDescription`：首屏简介
- `about`：关于我正文
- `contactEmail`：联系邮箱
- `contactUrl`：按钮跳转地址，例如 `mailto:your-name@example.com`

## 自定义导航与友情链接

导航配置在 `navLinks` 中：

```ts
export const navLinks = [
  { label: "关于我", href: "#about" },
  { label: "商业合作", href: "#services" },
  { label: "艺术作品", href: "#projects" },
  { label: "联系我", href: "#footer-contact" },
];
```

页脚友情链接配置在 `friendLinks` 中：

```ts
export const friendLinks = [
  { label: "Cloud09", href: "https://cloud09.space" },
];
```

## 添加作品

作品内容在 `projects` 数组中。复制一个项目对象并替换字段即可新增作品：

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

推荐把作品图片放在：

```text
public/artworks/project-name/
```

然后使用站内路径引用：

```ts
src: "/artworks/project-name/cover.webp"
```

推荐图片尺寸：

```text
cover.webp       1600 x 1200 或更高
detail-1.webp    1200 x 800
detail-2.webp    1200 x 1200
```

建议使用 `.webp` 或压缩后的 `.jpg`，避免直接上传体积过大的原始图片。

## 修改服务项目

服务项目在 `services` 数组中：

```ts
export const services = [
  {
    number: "01",
    name: "3D Modeling",
    description: "Creation of detailed objects...",
  },
];
```

你可以自由新增、删除或重新排序，页面会自动按照数组内容渲染。

## 替换音频与视觉素材

背景音乐文件位于：

```text
public/audio/bgm.mp3
```

作品图片建议放在：

```text
public/artworks/
```

全局视觉样式位于：

```text
src/styles.css
```

如果要调整液态玻璃、背景质感或整体暗色主题，可以优先查看 `.site-backdrop`、`.liquid-glass` 和 `.liquid-glass-strong`。

## GitHub Pages 部署

项目已经包含 GitHub Actions 自动部署工作流：

```text
.github/workflows/deploy.yml
```

推荐设置：

1. 使用 `main` 作为仓库主分支。
2. 打开仓库的 `Settings > Pages`。
3. 在 `Build and deployment` 中选择 `GitHub Actions`。
4. 推送代码到 `main` 后，工作流会自动构建并发布 `dist`。

如果仓库名是 `你的用户名.github.io`，站点根路径为 `/`，保持默认配置即可：

```text
VITE_BASE_PATH=/
```

如果仓库名类似 `portfolio`，访问地址通常是：

```text
https://你的用户名.github.io/portfolio/
```

这时需要在 GitHub 仓库中添加 Actions 变量：

```text
Settings > Secrets and variables > Actions > Variables
Name: VITE_BASE_PATH
Value: /portfolio/
```

本地也可以复制 `.env.example` 为 `.env.local` 后修改：

```bash
cp .env.example .env.local
```

```text
VITE_BASE_PATH=/portfolio/
```

## 推荐扩展

- 作品详情页
- 作品分类筛选
- 联系表单
- CMS 内容管理
- 多语言切换
- 暗色 / 亮色主题切换
- SEO 与 Open Graph 图片
