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
1. Install [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).
2. Click [![Install/Update](https://img.shields.io/badge/Install%2FUpdate-blue?style=flat)](https://raw.githubusercontent.com/WangONC/ios-app-download-link-extractor/main/ipa.user.js) to add it to Tampermonkey or Greasemonkey.

## Usage
- Visit a page with `itms-services` links.
- The script will add a "Download IPA" link or an error message next to each link.

## Notes
- Only works on pages with specific `itms-services` links.
- Needs a user script manager with `GM.xmlHttpRequest` enabled.

## Feedback
Submit issues or suggestions on [GitHub Issues](https://github.com/WangONC/ios-app-download-link-extractor/issues).

## Changelog
- **v0.7**
  - Initial version: Basic functionality completed.
  - Added dynamic page monitoring.
  - Added basic error display and optimized error display format.

---

**Author**: WangONC  
**GitHub**: https://github.com/WangONC/ios-app-download-link-extractor
