# ⚫ DotYouTube
A Tiny Extension to Block (Some) YouTube Pre-Roll Video Ads



https://github.com/KyleBenzle/DotYouTube ⚫ Created by Kyle Benzle 2020 ⚫ KyleBenzle.com ⚫ kbe@mm.st


//Block some pre-roll YouTube video ads by appending a dot after youtube.com


To run/try on your PC:

1. Unzip the dot-youtube.rar
2. Open chrome and visit chrome://extensions
3. Turn on developer mode at the top-right corner
4. Select load unpacked from the top-left corner
5. Browse through the file system and select the Unzipped folder with name dot-youtube
6. The extension is loaded.
7. Now see it working


        
        chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if (changeInfo.status === "loading" && /youtube.com/.test(changeInfo.url)) {
    
            let url = new URL(tab.url);
            if (!url.hostname.endsWith(".")) {
        
                url.hostname = url.hostname + ".";
                chrome.tabs.update(tabId, { url: url.href });
        }}})

