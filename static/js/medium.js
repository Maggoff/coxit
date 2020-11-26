$(document).ready(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@iryna-mykytyn')
        .then(res => res.json())
        .then(data => {
            const containers = document.getElementsByClassName('medium-widget-article__item');
            const mobileContainers = document.getElementsByClassName('medium-mobile-blog');

            // GETTING FIRST THREE ARTICLES
            data.items.slice(0, 3).forEach((article, index) => {
                // SETTING ARTICLE LINKS
                containers[index].querySelector('a').href = article.link;
                containers[index].querySelector(".line").href = article.link;
                mobileContainers[index].querySelector("a").href = article.link;

                // SETTING ARTICLE TITLE
                containers[index].querySelector(".medium-widget-article__title").innerHTML = article.title;
                mobileContainers[index].querySelector('.mobile__card__head').innerHTML = article.title;

                // PARSING CONTENT
                const parser = new DOMParser();
                const parsedData = parser.parseFromString(article.description, 'text/html');

                // SETTING IMAGE URL
                containers[index].querySelector('.medium-widget-article__image')
                    .style.backgroundImage = `url(${parsedData.querySelector("img").src})`;


                // SETTING ARTICLE DECSRIPTION
                if (parsedData.querySelector(".medium-feed-snippet")) {
                    containers[index].querySelector('.medium-widget-article__description').innerHTML = parsedData.querySelector(".medium-feed-snippet").innerHTML;
                    mobileContainers[index].querySelector('.weCanHelp__container__item__text').innerHTML = parsedData.querySelector(".medium-feed-snippet").innerHTML;

                } else {
                    const body = parsedData.querySelector("body");

                    for (child of body.children) {
                        if (child.tagName === 'P') {
                            containers[index].querySelector('.medium-widget-article__description').innerHTML = child.innerHTML;
                            mobileContainers[index].querySelector('.weCanHelp__container__item__text').innerHTML = child.innerHTML;
                            break;
                        }

                        if (child.tagName === 'OL') {
                            containers[index].querySelector('.medium-widget-article__description').innerHTML = child.querySelector('li').innerHTML;
                            mobileContainers[index].querySelector('.weCanHelp__container__item__text').innerHTML = child.querySelector('li').innerHTML;
                            break;
                        }
                    }                        
                }
            });
        })
        .catch(err => {
            console.log(err);
        });
});