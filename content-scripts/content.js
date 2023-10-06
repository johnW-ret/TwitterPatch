const setAndUpdateCards = function () {
    const anchorTags = document.querySelectorAll('a[href^="https://t.co/"]');
    anchorTags.forEach((anchorTag) => {
        const ariaLabel = anchorTag.getAttribute("aria-label");

        if (ariaLabel && !anchorTag.nextElementSibling?.classList.contains("custom-element-added")) {
            const domain = ariaLabel.split(" ")[0];
            const desc = ariaLabel.substring(ariaLabel.indexOf(" ") + 1);

            const div1 = document.createElement("div");
            div1.classList.add("css-1dbjc4n", "r-16y2uox", "r-1wbh5a2", "r-z5qs1h", "r-1777fci", "r-kzbkwu", "r-1e081e0", "r-ttdzmv");
            div1.setAttribute("data-testid", "card.layoutLarge.detail");

            const div2 = document.createElement("div");
            div2.setAttribute("dir", "auto");
            div2.classList.add("css-901oao", "css-1hf3ou5", "r-14j79pv", "r-37j5jr", "r-a023e6", "r-16dba41", "r-rjixqe", "r-bcqeeo", "r-qvutc0");
            const span1 = document.createElement("span");
            span1.classList.add("css-901oao", "css-16my406", "r-poiln3", "r-bcqeeo", "r-qvutc0");
            span1.innerText = domain;
            div2.appendChild(span1);
            div1.appendChild(div2);

            const div3 = document.createElement("div");
            div3.setAttribute("dir", "auto");
            div3.classList.add("css-901oao", "css-1hf3ou5", "r-18jsvk2", "r-37j5jr", "r-a023e6", "r-16dba41", "r-rjixqe", "r-bcqeeo", "r-qvutc0");
            const span2 = document.createElement("span");
            span2.classList.add("css-901oao", "css-16my406", "r-poiln3", "r-bcqeeo", "r-qvutc0");
            span2.innerText = desc;
            div3.appendChild(span2);
            div1.appendChild(div3);

            div1.classList.add("custom-element-added");
            anchorTag.parentNode.insertBefore(div1, anchorTag.nextSibling);
        }
    });
}
setInterval(setAndUpdateCards, 1500);

const setAndUpdateCardsWithTimeout = () => setTimeout(setAndUpdateCards, 4000);

setAndUpdateCardsWithTimeout();
navigation.addEventListener("navigate", (event) => {
    setAndUpdateCardsWithTimeout();
});