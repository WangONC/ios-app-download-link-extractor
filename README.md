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

## Usage
- Visit a page with `itms-services` links.
- The script will add a "Download IPA" link or an error message next to each link.

## Notes
- Only works on pages with specific `itms-services` links.
- Needs a user script manager with `GM.xmlHttpRequest` enabled.

## Feedback
Submit issues or suggestions on [GitHub Issues](https://github.com/WangONC/ios-app-download-link-extractor/issues).

---

**Author**: WangONC  
**GitHub**: https://github.com/WangONC/ios-app-download-link-extractor
