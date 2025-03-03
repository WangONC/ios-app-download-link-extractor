// ==UserScript==
// @name                iOS App Download Link Extractor
// @name:zh             IPA提取助手
// @name:zh-TW          IPA提取助手
// @namespace
// @copyright           2025, WangONC
// @version             0.7
// @description         Extracts the IPA download link from itms-services URLs or displays an error message, shown next to the original button.
// @description:zh      从 itms-services 链接中提取 IPA 下载直链或显示错误提示，并显示在原始按钮旁边
// @description:zh-TW   從 itms-services 連結中提取 IPA 下載直鍊或顯示錯誤提示，並顯示在原始按鈕旁邊
// @author              WangONC
// @source              https://github.com/WangONC/ios-app-download-link-extractor
// @match               *://*/*
// @grant               GM.xmlHttpRequest
// @license MIT
// @namespace https://greasyfork.org/users/1441770
// ==/UserScript==
 
(function() {
    'use strict';
 
    // 处理页面中的链接
    function processLinks() {
        let links = document.querySelectorAll('a[href^="itms-services://?action=download-manifest&url="]');
        if (links.length === 0) {
            // console.log('No matching links found');
            return;
        }
 
        for (let link of links) {
            // 检查是否已经处理过该链接
            if (link.nextElementSibling && (link.nextElementSibling.classList.contains('download-link') || link.nextElementSibling.classList.contains('error-link'))) {
                continue;
            }
 
            try {
                let href = link.href;
                let query = href.split('?')[1];
                if (!query) throw new Error('Invalid link format');
                let params = new URLSearchParams(query);
                let plistUrl = params.get('url');
                if (!plistUrl) throw new Error('No "url" parameter found');
 
                // 解码 plistUrl 以处理 URL 编码
                plistUrl = decodeURIComponent(plistUrl);
 
                GM.xmlHttpRequest({
                    method: 'GET',
                    url: plistUrl,
                    onload: function(response) {
                        if (response.status === 200) {
                            let xmlText = response.responseText;
                            let parser = new DOMParser();
                            let xmlDoc = parser.parseFromString(xmlText, 'text/xml');
                            let downloadUrl = extractDownloadUrl(xmlDoc);
                            if (downloadUrl) {
                                let downloadLink = document.createElement('a');
                                downloadLink.href = downloadUrl;
                                downloadLink.target = '_blank'; // 新窗口打开，方便下载
                                downloadLink.textContent = 'Download IPA';
                                downloadLink.style.marginLeft = '13px';
                                downloadLink.classList.add('download-link'); // 添加类名以便识别
                                link.insertAdjacentElement('afterend', downloadLink);
                            } else {
                                showError(link, 'Unable to parse plist file');
                            }
                        } else {
                            showError(link, `Request failed: ${response.status}`);
                        }
                    },
                    onerror: function() {
                        showError(link, 'Network Error');
                    }
                });
            } catch (e) {
                showError(link, e.message);
            }
        }
    }
 
    // 提取下载链接的核心函数
    function extractDownloadUrl(xmlDoc) {
        let dict = xmlDoc.querySelector('plist > dict');
        if (!dict) return null;
 
        let keys = Array.from(dict.children).filter(el => el.tagName === 'key');
        let itemsKey = keys.find(key => key.textContent === 'items');
        if (!itemsKey) return null;
 
        let itemsArray = itemsKey.nextElementSibling;
        if (!itemsArray || itemsArray.tagName !== 'array') return null;
 
        let firstItem = itemsArray.querySelector('dict');
        if (!firstItem) return null;
 
        let assetsKey = Array.from(firstItem.children).find(el => el.tagName === 'key' && el.textContent === 'assets');
        if (!assetsKey) return null;
 
        let assetsArray = assetsKey.nextElementSibling;
        if (!assetsArray || assetsArray.tagName !== 'array') return null;
 
        let softwarePackageDict = Array.from(assetsArray.children).find(dict => {
            let kindKey = Array.from(dict.children).find(key => key.tagName === 'key' && key.textContent === 'kind');
            if (kindKey && kindKey.nextElementSibling.textContent === 'software-package') {
                return true;
            }
            return false;
        });
        if (!softwarePackageDict) return null;
 
        let urlKey = Array.from(softwarePackageDict.children).find(el => el.tagName === 'key' && el.textContent === 'url');
        if (!urlKey) return null;
 
        return urlKey.nextElementSibling.textContent;
    }
 
    // 显示错误提示的函数
    function showError(link, message) {
        let errorLink = document.createElement('a');
        errorLink.textContent = message;
        errorLink.style.color = 'red';
        errorLink.style.marginLeft = '13px';
        errorLink.style.pointerEvents = 'none'; // 防止点击
        errorLink.classList.add('error-link'); // 添加类名以便识别
        link.insertAdjacentElement('afterend', errorLink);
    }
 
    // 在 DOM 加载完成后执行
    document.addEventListener('DOMContentLoaded', function() {
        processLinks();
    });
 
    // 监听动态内容加载
    const observer = new MutationObserver(() => {
        processLinks();
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
