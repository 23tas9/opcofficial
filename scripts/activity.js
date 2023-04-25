const GetActivityList = async () => {
    const RequestURL = 'https://raw.githubusercontent.com/OECUPC/opcofficial/new-test/data/activity-history.json';

    const response = await fetch(RequestURL);
    const json = response.json();

    json.catch(error => console.error(error));

    return json;
}

const GenerateActivityListHTML = json => {
    const title = json['title'];
    const date = json['date'];
    const introduceText = json['introduce'];
    const mainText = json['main'];
    const members = json['members'];
    const quations = json['quations'];
    const tweetEmbedLink = json['tweet-embed-link'];

    let res = `
        <section id=activity-${date}-js>\n
        \t<h3 class="activity-history__title">${title}</h3>\n
        \t<p class="activity-history__date">実施日: ${date}</p>\n
        \t<p class="activity-history__introduce">${introduceText}</p>\n
        \t<p class="activity-history__main">${mainText}</p>\n
        \t<h4>参加メンバー</h4>\n
    `;

    if (0 < members.length) {
        res += '\t<ul class="activity-history__members">\n'
        for (const member of members) {
            res += `\t\t<li>${member}</li>\n`;
        }
        res += '\t</ul>\n';
    }

    if (0 < quations.length) {
        res += '\t<ul class="activity-history__quations">\n'
        for (const quation of quations) {
            res += `\t\t<li><a href="${quation['link']}">${quation['text']}</a></li>\n`;
        }
        res += '\t</ul>\n';
    }

    res += `
        \t<blockquote class="twitter-tweet">
        \t\t<a href="${tweetEmbedLink}?ref_src=twsrc%5Etfw"></a>
        \t</blockquote>
        \t<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </section>
    `;
    return res;
}

const GenerateContentsListHTML = json => {
    let res = '';

    for(const data of json){
        console.log(data);
        const date = data["date"];
        res += `<li><a class="scroll" href="#activity-${date}-js">${date} ${data["title"]}</a></li>\n`;
    }

    return res;
}

const SetActivityListNode = async () => {
    const baseNode = document.querySelector('section#activity-history');

    const activityList = await GetActivityList();
    const sortedActivityList = activityList.sort((a, b)=>{
            return a.date > b.date ? -1:1;
    });

    for (const activity of sortedActivityList) {
        console.log(activity);
        baseNode.insertAdjacentHTML('beforeend', GenerateActivityListHTML(activity));
    }

    const contentsListNode = document.querySelector('#activity-history-contents ul');
    contentsListNode.insertAdjacentHTML('afterbegin', GenerateContentsListHTML(sortedActivityList));
}

document.addEventListener('DOMContentLoaded', SetActivityListNode(), null);