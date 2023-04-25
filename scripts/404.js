const RedirectCountDown = ()=>{
    const str = document.querySelector('meta[http-equiv="refresh"]').getAttribute('content');

    const diff = parseInt(str.slice(0, str.indexOf(';')));
    console.log(diff);

    const start = new Date().getSeconds();

    const update = ()=>{
        const now = new Date().getSeconds();

        const t = start - now + diff;
        document.getElementById('redirect-countdown').textContent = t;

        requestAnimationFrame(update);
    }

    update();
}

document.addEventListener('DOMContentLoaded', RedirectCountDown, null);