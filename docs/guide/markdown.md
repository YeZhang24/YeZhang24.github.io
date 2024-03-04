---
title: Markdown 展示
icon: markdown
order: 2
article: false
category:
  - 使用指南
tag:
  - Markdown
---

VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。

你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。

<!-- more -->

## Markdown 介绍

如果你是一个新手，还不会编写 Markdown，请先阅读 [Markdown 介绍](https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/) 和 [Markdown 演示](https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/demo.html)。

## Markdown 配置

VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。

::: info

Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 [Frontmatter 介绍](https://vuepress-theme-hope.github.io/v2/zh/cookbook/vuepress/page.html#front-matter)。

:::

## Markdown 扩展

VuePress 会使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 [语法扩展](https://github.com/markdown-it/markdown-it#syntax-extensions) 。

### VuePress 扩展

为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。

关于这些扩展，请阅读 [VuePress 中的 Markdown 扩展](https://vuepress-theme-hope.github.io/v2/zh/cookbook/vuepress/markdown.html)。

### 主题扩展

通过 [`vuepress-plugin-md-enhance`][md-enhance]，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。

:::: tip 一键启用

你可以设置在主题选项中设置 `plugins.mdEnhance.enableAll: true` 启用 [md-enhance][md-enhance] 插件的所有功能。

::: code-tabs#language

@tab TS

```ts
import { hopeTheme } from "vuepress-theme-hope";

export default {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        enableAll: true,
      },
    },
  }),
};
```

@tab JS

```js
const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        enableAll: true,
      },
    },
  }),
};
```

:::

::::

#### 自定义容器

::: v-pre

安全的在 Markdown 中使用 {{ variable }}。

:::

::: info 自定义标题

信息容器，包含 `代码` 与 [链接](#markdown)。

```js
const a = 1;
```

:::

::: tip 自定义标题

提示容器

:::

::: warning 自定义标题

警告容器

:::

::: danger 自定义标题

危险容器

:::

::: details 自定义标题

详情容器

:::

:::: details 代码

```md
::: v-pre

安全的在 Markdown 中使用 {{ variable }}。

:::

::: info 自定义标题

信息容器

:::

::: tip 自定义标题

提示容器

:::

::: warning 自定义标题

警告容器

:::

::: danger 自定义标题

危险容器

:::

::: details 自定义标题

详情容器

:::
```

::::

- [查看详情](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/container.html)

#### 代码块

::: code-tabs

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::

- [查看详情](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/code-tabs.html)

#### 自定义对齐

::: center

我是居中的

:::

::: right

我在右对齐

:::

- [查看详情](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/align.html)

#### 上下角标

19^th^ H~2~O

- [查看详情](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/sup-sub.html)

#### 脚注

此文字有脚注[^first].

[^first]: 这是脚注内容

- [查看详情](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/footnote.html)

#### 标记

你可以标记 ==重要的内容== 。

- [查看详情](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/mark.html)

#### 任务列表

- [x] 计划 1
- [ ] 计划 2

- [查看详情](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/tasklist.html)