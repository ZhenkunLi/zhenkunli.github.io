# Zhenkun Li — Academic website

这是一个可独立构建的 Quarto 学术网站。个人资料以用户指定的 `20260929CV_Zhenkun_Li.pdf` 为准；其原件已保存为 `papers/updated_CV.pdf`。论文记录由原网站完整迁入，保留 31 篇期刊论文、22 篇会议论文和 2 篇预印本。

网站源码在本仓库维护，由 GitHub Actions 自动编译并发布到 GitHub Pages。旁边的 `zhenkunli.com` 源目录未改动。

## 本地预览

在本目录打开 PowerShell，运行：

```powershell
.\preview.ps1
```

脚本会生成论文目录、构建全部页面、检查本地链接和图片，然后启动 <http://127.0.0.1:4273/>。按 Ctrl+C 停止。依赖为 Python 3.12 和 Quarto 1.9.38；脚本也能找到本机 RStudio 内置的 Quarto。

其他系统或已安装 Quarto 的终端可运行：

```sh
python scripts/build_publications.py
quarto render
python scripts/check_site.py
quarto preview --host 127.0.0.1 --port 4273 --no-browser --no-render
```

修改论文 JSON 后请重新运行预览脚本，确保目录重新生成。

首次构建必须先运行论文生成脚本，以便建立 Quarto 使用的 include 文件。后续 Quarto 渲染也会通过 pre-render 再生成论文目录。构建输出在 `_site/`，不提交到 Git。

## 逐页检查入口

| 页面 | 预览链接 | 对应源文件 |
|:--|:--|:--|
| 首页 | [打开](http://127.0.0.1:4273/) | `index.qmd` |
| 研究分类与论文原图 | [打开](http://127.0.0.1:4273/research/) | `research/index.qmd` |
| 全部论文与筛选 | [打开](http://127.0.0.1:4273/publications/) | `publications/index.qmd`、`data/publications.json` |
| 简介与 CV | [打开](http://127.0.0.1:4273/about/) | `about/index.qmd` |
| 教学 | [打开](http://127.0.0.1:4273/teaching/) | `teaching/index.qmd` |
| 新闻、报告与学术活动 | [打开](http://127.0.0.1:4273/news/) | `news/index.qmd` |
| 指导与合作 | [打开](http://127.0.0.1:4273/research-team/) | `research-team/index.qmd` |
| 资源 | [打开](http://127.0.0.1:4273/downloads/) | `downloads/index.qmd` |
| 相册 | [打开](http://127.0.0.1:4273/gallery.html) | `gallery.qmd` |
| 404 页面 | [打开](http://127.0.0.1:4273/404.html) | `404.qmd` |

建议依次检查个人经历和任职、论文信息、五类研究的命名与描述、图片和图注、教学与指导关系、活动日期，以及手机上的导航和排版。论文中的期刊年份按 CV 整理；在线发表年份和卷期年份不同的条目已注明。CV 中标为 Accepted 的论文保留该状态。原站额外收录的会议论文和预印本也保留。

## 日常维护

- 页面正文在对应 `.qmd` 中编辑；导航、域名和页脚在 `_quarto.yml` 中编辑。
- 论文只需修改 `data/publications.json`。`id` 决定稳定锚点，`year` 是期刊或会议文献年份，`date` 用于排序，`theme` 对应 `data/themes.json`。保留原始 `id` 可避免破坏研究页的链接。`details` 允许简单的 `em` 和 `b` 标签。
- PDF 放在 `papers/`，记录中的 `file` 使用文件名。未提供 PDF 的论文只显示 DOI，不生成空下载链接。
- 15 张研究图按五个方向分组展示，每组 3 张，直接从已有 PDF 提取，未经 AI 重绘。点击图片或 Full size 可查看大图。出处、图号、页码和裁切坐标见 `data/figure-sources.json`。如需重新提取，可安装 `pymupdf pillow` 后运行 `python scripts/extract_figures.py`。常规构建不需要这些第三方包。相册网页使用 `img/gallery/` 中经过方向校正和压缩的 WebP 图片，完整原始照片仍保留在 `img/`。
- 视觉样式在 `theme.scss` 和 `styles.css` 中维护。全站采用“现代学术”字体搭配：标题和站点名称使用 Source Serif 4，正文、导航与表单使用 Source Sans 3。字体通过 `assets/fonts.css` 从本地 `assets/fonts/` 加载，包含常规、斜体和拉丁扩展字符；字体授权文件保留在同目录。不依赖外部字体 CDN、图标工具包或旧站继承的统计与订阅脚本。
- 右上角的“中文 / EN”按钮切换导航和各页说明文字，本地译文在 `assets/site-language.js` 中维护；新增或修改英文正文时，请同步更新对应译文。全站引用的论文与学位论文题目、期刊名、作者信息，以及论文目录的出版信息、备注和摘要保持原文，包括首页精选论文、Research 代表性研究和动态页中的论文链接。中文标题使用 Noto Serif SC，正文使用 Noto Sans SC；两套思源系中文字体均从本地加载，西文字体保持原有搭配。新增中文用字后可运行 `python scripts/build_chinese_fonts.py` 刷新字形子集，常规构建不访问字体服务。
- 月亮 / 太阳按钮切换日间和夜间模式，深色配色在 `theme-dark.scss` 与 `styles.css` 中维护。语言与主题选择保存在访客浏览器中，刷新页面或访问其他页面后会保留。论文原图不反色。

## GitHub 云端自动构建

工作流位于 `.github/workflows/pages.yml`，固定使用 Quarto 1.9.38 和 Python 3.12：

1. 每次推送到 GitHub 时，云端构建全部页面并运行链接检查。
2. pull request 只构建和检查，不部署。
3. 默认分支构建通过后，通过 GitHub Pages artifact 部署网站。
4. 也可以在 GitHub Actions 中手动运行。

仓库 **Settings → Pages → Build and deployment → Source** 使用 **GitHub Actions**。已有 `CNAME` 域名 `zhenkunli.com` 会复制到构建输出。`_site/`、本地检查备份 `.local-review/` 和 `.Rhistory` 不提交；本地检查备份和历史记录也明确排除在发布包之外。

本地 `git commit` 不会触发云端构建；推送（`git push`）到 GitHub 才会触发。请在检查完本地网站后再发布。

参考：[Quarto GitHub Pages 文档](https://quarto.org/docs/publishing/github-pages.html)、[GitHub Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

设计延续 [Rob J Hyndman 的学术网站](https://robjhyndman.com/)简洁、内容优先的思路，并针对结构健康监测研究重建排版。旧版生成的 HTML 和 site_libs 已由 Quarto 源文件及新的 `_site/` 构建输出取代；历史版本仍可在 Git 记录中查看。

## 本次本地验证

- 10 个页面完成构建；55 条论文记录完整显示；15 张论文原图分为五组，都有出处、图号、PDF 页码和 DOI。
- 自动检查本地链接、跨页锚点、图片替代文字、文件名大小写、CSS 资源和自定义域名。
- 1280 px 桌面视图和 390 px 手机视图逐页检查通过；手机导航和二级菜单可用。
- 浏览器实测论文组合筛选、关键词检索、无结果提示、重音字符作者搜索和重置。
- 10 个页面的中英文界面和深色模式在桌面与 390 px 手机视图中通过检查；320 px 窄屏和 900 px 平板视图中的顶部切换按钮保持同排。
- 实测语言与主题跨页和刷新后保留，中文论文筛选与站内搜索提示正常；55 篇论文的题目、作者、出版信息、备注和摘要在语言切换前后完全一致。
- 在不含 `_site/`、`.quarto/` 和已生成 include 的干净副本中完成重建，通过相同检查。
- 云端运行记录可在仓库的 Actions 页面查看；每次推送都会重新编译和检查，默认分支通过后自动部署。
