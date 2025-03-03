# iOS App Download Link Extractor（iOS 应用下载链接提取器）

## 概述
**iOS App Download Link Extractor** 是一个油猴脚本，旨在从网页中的 `itms-services` 链接中提取 iOS 应用的 IPA 下载直链，并将其显示在原始按钮旁边，方便 IPA 文件的下载。

## 功能特点
- **自动检测链接**：扫描页面中的 `<a>` 标签，识别以 `itms-services://?action=download-manifest&url=` 开头的链接（根据使用情况调整规则）。
- **提取 IPA 下载直链**：从 `plist` 文件中解析并提取 IPA 文件的直接下载地址。
- **显示下载链接或错误提示**：在原始链接右侧添加“下载 IPA”链接（成功时）或红色错误提示（失败时）。
- **支持动态内容**：使用 MutationObserver 监听页面变化，确保新加载的链接也能被处理。

## 安装方法
1. **安装用户脚本管理器**：
   - 如果您尚未安装用户脚本管理器，请先安装以下之一：
     - [Tampermonkey](https://www.tampermonkey.net/)
     - [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

2. **添加脚本**：


## 使用说明
1. 安装脚本后，访问包含 `itms-services://?action=download-manifest&url=` 链接的网页。
2. 脚本会自动运行并处理符合条件的链接：
   - **成功时**：在原始链接旁边显示“Download IPA”链接，点击即可在新窗口下载 IPA 文件。
   - **失败时**：在原始链接旁边显示红色错误提示，例如“请求失败: 404”或“网络错误”。
3. 对于动态加载的页面内容，脚本会持续监听并处理新出现的链接。

## 注意事项
- **适用范围**：脚本仅适用于包含 `itms-services://?action=download-manifest&url=` 格式链接的网页。
- **依赖性**：需要浏览器支持用户脚本管理器（如 Tampermonkey 或 Greasemonkey）并启用 `GM.xmlHttpRequest` 权限（解析plist内容）。
- **限制**：如果 `plist` 文件无法访问或解析失败，将显示错误提示，用户需检查网络或链接有效性。
- **样式**：下载链接和错误提示默认在原始链接旁，错误提示为红色且不可点击。

## 反馈
- 如果您在使用过程中遇到问题或有改进建议，请前往 [GitHub Issues](https://github.com/WangONC/ios-app-download-link-extractor/issues) 提交反馈（但不一定修复）。

## 更新日志
- **v0.7**
 - 初始版本：基本功能完成
 - 添加页面动态监控
 - 添加基本错误显示，优化错误显示格式

---

**作者**：WangONC  
**GitHub**：https://github.com/WangONC/ios-app-download-link-extractor
