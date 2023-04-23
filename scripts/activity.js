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
    console.log(json);

    let res = `
        <h3 class="activity-history__title">${title}</h3>\n
        <section>\n
        \t<p class="activity-history__date">実施日: ${date}</p>\n
        \t<p class="activity-history__introduce">${introduceText}</p>\n
        \t<p class="activity-history__main">${mainText}</p>\n
        \t<h4>参加メンバー</h4>\n
    `;

    res += '\t<ul class="activity-history__members">\n'
    for(const member of members){
        res += `\t\t<li>${member}</li>\n`;
    }
    res += '\t</ul>\n';

    res += '\t<ul class="activity-history__quations">\n'
    for(const quation of quations){
        res += `\t\t<li><a href="${quation['link']}">${quation['text']}</a></li>\n`;
    }
    res += '\t</ul>\n';

    res += `
        \t<blockquote class="twitter-tweet">
        \t\t<a href="${tweetEmbedLink}?ref_src=twsrc%5Etfw"></a>
        \t</blockquote>
        \t<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </section>
    `;
    return res;
}

const SetActivityListNode = async ()=>{
    const baseNode = document.querySelector('article#activity-history');

    const activityList = await GetActivityList();

    for(const activity of activityList){
        baseNode.insertAdjacentElement('afterbegin', GenerateActivityListHTML(activity));
    }
}

document.addEventListener('DOMContentLoaded', SetActivityListNode(), null);