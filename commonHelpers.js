/* empty css                      */import{S as u}from"./assets/vendor-c12d68e1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const p=document.querySelector(".js-header"),f=document.querySelectorAll(".js-nav-menu a"),y=document.querySelectorAll("section"),x=document.querySelector(".js-burger-menu"),a=document.querySelector(".js-mob-menu"),v=document.querySelector(".js-close-btn"),b=a.querySelectorAll("a");function w(){setTimeout(()=>{a.classList.add("is-open")},200),document.body.classList.add("no-scroll")}function m(){document.body.classList.remove("no-scroll"),setTimeout(()=>{a.classList.remove("is-open","is-closing")},300)}x.addEventListener("click",w);v.addEventListener("click",m);function g(o){const t=o.getAttribute("href").slice(1),r=document.getElementById(t).getBoundingClientRect().top,s=p.offsetHeight,e=r+window.scrollY-s;window.scrollTo({top:e,behavior:"smooth"})}f.forEach(o=>{o.addEventListener("click",t=>{t.preventDefault(),g(o)})});b.forEach(o=>{o.addEventListener("click",t=>{t.preventDefault(),g(o),m()})});const S={root:null,rootMargin:`-${p.offsetHeight}px 0px 0px 0px`,threshold:.6};function q(o){o.forEach(t=>{if(t.isIntersecting){const r=t.target.getAttribute("id");f.forEach(s=>{s.classList.toggle("active",s.getAttribute("href").slice(1)===r)})}})}const L=new IntersectionObserver(q,S);y.forEach(o=>L.observe(o));const E=document.querySelector(".change-words"),l=E.querySelectorAll("span");let c=0;setInterval(()=>{l[c].classList.remove("active"),c=(c+1)%l.length,l[c].classList.add("active")},2e3);const A=document.querySelector(".js-button-prev"),h=document.querySelector(".js-button-next");new u(".gallery-swiper",{navigation:{nextEl:".gallery-button-prev",prevEl:".gallery-button-next"},centeredSlides:!0,slidesPerView:1.5,breakpoints:{320:{slidesPerView:1.5,spaceBetween:24},1200:{slidesPerView:3,spaceBetween:36}},on:{init(){const o=this.slides[this.activeIndex];h.disabled=!0,o.style.opacity="1",d(this)},slideChange(){d(this)}}});function d(o){const t=o.slides,r=o.activeIndex;t.forEach(e=>{e.style.transform="translateY(0)",e.style.opacity="0.6"});const s=t[r];s.style.opacity="1",s.style.transform="translateY(0)";for(let e=r-1,n=56;e>=0;e--,n+=56){const i=t[e];i.style.transform=`translateY(${n}px)`}for(let e=r+1,n=56;e<t.length;e++,n+=56){const i=t[e];i.style.transform=`translateY(${n}px)`}}console.log(A,h);document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".features-swiper");if(o){new u(o,{slidesPerView:1,loop:!0,pagination:{el:".features-swiper-pagination",clickable:!0,renderBullet:function(r,s){return`<span class="${s}">${r+1}</span>`}}});const t=document.createElement("style");t.innerHTML=`
      .features-swiper-pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 8px;
        margin-top: 16px;
        margin-bottom: 16px;
        position: relative;
      }

      .swiper-pagination-bullet {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.6;
        color: #020202;
        padding: 10px;
        opacity: 1;
        border-radius: 0px;
        background:transparent;
      }

      .swiper-pagination-bullet-active {
        border: 1px solid #020202;
        background-color: #ffffff;
      }

      @media screen and (min-width: 1200px) {
       .features-swiper-pagination { 
       flex-direction: column; 
       position: absolute; 
       top: 50%;
       left: 0; 
       transform: translateX(-50%);
       margin: 288px 0px 213px 40px;
      }
   
        .swiper-pagination-bullet {
          width: 80px;
          height: 80px;
        }
      }
    `,document.head.appendChild(t)}else console.error("Swiper element not found")});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-question-text").forEach(t=>{t.addEventListener("click",()=>{const r=t.closest(".faq-item"),s=r.querySelector(".faq-answer"),e=t.getAttribute("aria-expanded")==="true";console.log(document.querySelectorAll(".faq-answer")),document.querySelectorAll(".faq-item").forEach(n=>{n!==r&&(n.querySelector(".faq-answer").style.maxHeight=null,n.classList.remove("open"),n.querySelector(".faq-question-text").setAttribute("aria-expanded","false"))}),e?(s.style.maxHeight=null,t.setAttribute("aria-expanded","false"),r.classList.remove("open")):(s.style.maxHeight=s.scrollHeight+"px",t.setAttribute("aria-expanded","true"),r.classList.add("open"))})})});
//# sourceMappingURL=commonHelpers.js.map
