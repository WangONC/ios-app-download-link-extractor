# iOS App Download Link Extractor（IPA提取助手）

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
   - 选择以下的方式之一安装    
      - 点击[![Install/Update](https://img.shields.io/badge/Install%2FUpdate-blue?style=flat)](https://raw.githubusercontent.com/WangONC/ios-app-download-link-extractor/main/ipa.user.js)安装或者更新脚本
      - 从[Greasy Fork](https://greasyfork.org/zh-CN/scripts/528616-ios-app-download-link-extractor)进行安装



## 使用说明
- 访问包含 itms-services 链接的页面。
- 脚本会在每个链接旁边添加“Download IPA”下载直链或错误提示。

## 注意事项
- 需要用户脚本管理器并启用 `GM.xmlHttpRequest` 权限（用于访问并解析plist内容）。

## 反馈
- 如果您在使用过程中遇到问题或有改进建议，请前往 [GitHub Issues](https://github.com/WangONC/ios-app-download-link-extractor/issues) 提交反馈（但不一定修复）。

## 更新日志
- **v0.7.\***
   - 初始版本：基本功能完成
   - 添加页面动态监控
   - 添加基本错误显示，优化错误显示格式
- **v0.8.0**
   - 修改原有的新连接class，防止混淆
   - 修复因为dom监听导致的重复添加链接的问题
- **v0.9.0**
   - 添加plist请求的超时以及重试机制，当前默认超时时间5秒，重试3次，重试间隔1秒，不可修改
   - 新增window的load事件监听，提高稳定性
   - DOM元素监听新增属性变化

---

**作者**：WangONC  
**GitHub**：https://github.com/WangONC/ios-app-download-link-extractor
