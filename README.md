# DotYouTube
Block (Some) YouTube Pre-Roll Video Ads

// DotYouTube
// https://github.com/KyleBenzle/DotYouTube
// Created by Kyle Benzle 2020
// KyleBenzle.com
// kbe@mm.st


//Block some pre-roll YouTube video ads by appending a dot after youtube.com


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === "loading" && /youtube.com/.test(changeInfo.url)) {
        let url = new URL(tab.url);
        if (!url.hostname.endsWith(".")) {
            url.hostname = url.hostname + ".";
            chrome.tabs.update(tabId, { url: url.href });
        }
    }
})

