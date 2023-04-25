const pageScroll = element =>{
    const targetId = element.href.slice(element.href.indexOf('#') + 1);
    const target = document.getElementById(targetId);
    
    const clientRect = target.getBoundingClientRect();
    const py = window.pageYOffset + clientRect.top - 64;   //headerを考慮して-64

    window.scroll({ top: py, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{document.querySelectorAll('.scroll').forEach(e=>{
        console.log('scroll attach to ', e);
        e.addEventListener('click', ev=>{
            ev.preventDefault();
            pageScroll(ev.target)
        });
    })}, 100);
}, null);