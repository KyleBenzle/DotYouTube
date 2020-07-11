chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === "loading" && /youtube.com/.test(changeInfo.url)) {
        let url = new URL(tab.url);
        if (!url.hostname.endsWith(".")) {
            url.hostname = url.hostname + ".";
            chrome.tabs.update(tabId, { url: url.href });
        }
    }
})