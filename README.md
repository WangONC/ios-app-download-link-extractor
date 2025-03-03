# iOS App Download Link Extractor

## Overview
**iOS App Download Link Extractor** is a Tampermonkey script that extracts direct IPA download links from `itms-services` URLs on web pages and displays them next to the original button. It makes downloading IPA files for iOS apps easier.

For more details, check the [中文 README](https://github.com/WangONC/ios-app-download-link-extractor/blob/main/README-zh.md).

## Features
- Automatically detects `itms-services` links.
- Extracts and shows the IPA download link.
- Displays error messages if something goes wrong.
- Works with dynamically loaded content.

## Installation
1. **Install a User Script Manager**:
   - If you haven’t installed a user script manager yet, please install one of the following:
     - [Tampermonkey](https://www.tampermonkey.net/)
     - [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

2. **Add the Script**:
   - Choose one of the following methods to install:
     - Click [![Install/Update](https://img.shields.io/badge/Install%2FUpdate-blue?style=flat)](https://raw.githubusercontent.com/WangONC/ios-app-download-link-extractor/main/ipa.user.js) to install or update the script.
     - Install from [Greasy Fork](https://greasyfork.org/zh-CN/scripts/528616-ios-app-download-link-extractor).

## Usage
- Visit a page with `itms-services` links.
- The script will add a "Download IPA" link or an error message next to each link.

## Notes
- Requires a user script manager with `GM.xmlHttpRequest` permission enabled (used to access and parse plist content).

## Feedback
Submit issues or suggestions on [GitHub Issues](https://github.com/WangONC/ios-app-download-link-extractor/issues).

## Changelog
- **v0.7**
  - Initial version: Basic functionality completed.
  - Added dynamic page monitoring.
  - Added basic error display and optimized error display format.
- **​v0.8.0**
  - Modified the existing new connection class to prevent confusion
  - Fixed the issue of duplicate link additions caused by DOM monitoring

---

**Author**: WangONC  
**GitHub**: https://github.com/WangONC/ios-app-download-link-extractor
