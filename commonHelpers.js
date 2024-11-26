/* empty css                      */import{S as d}from"./assets/vendor-c12d68e1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m=document.querySelector(".js-header"),u=document.querySelectorAll(".js-nav-menu a");console.log(u);const y=document.querySelector(".js-burger-menu"),c=document.querySelector(".js-mob-menu"),g=document.querySelector(".js-close-btn"),h=c.querySelectorAll("a");function x(){setTimeout(()=>{c.classList.add("is-open")},200),document.body.classList.add("no-scroll")}function p(){document.body.classList.remove("no-scroll"),setTimeout(()=>{c.classList.remove("is-open","is-closing")},300)}y.addEventListener("click",x);g.addEventListener("click",p);function f(n){const t=n.getAttribute("href").slice(1),r=document.getElementById(t).getBoundingClientRect().top,s=m.offsetHeight,e=r+window.scrollY-s;window.scrollTo({top:e,behavior:"smooth"})}u.forEach(n=>{n.addEventListener("click",t=>{t.preventDefault(),f(n)})});h.forEach(n=>{n.addEventListener("click",t=>{t.preventDefault(),f(n),p()})});const w=document.querySelector(".change-words"),a=w.querySelectorAll("span");let i=0;setInterval(()=>{a[i].classList.remove("active"),i=(i+1)%a.length,a[i].classList.add("active")},2e3);new d(".gallery-swiper",{navigation:{nextEl:".gallery-swiper-button-next",prevEl:".gallery-swiper-button-prev"},centeredSlides:!0,breakpoints:{320:{slidesPerView:1.5,spaceBetween:24},1200:{slidesPerView:3,spaceBetween:36}},on:{slideChange:function(){const n=this.slides,t=n[this.activeIndex],r=n[this.previousIndex],s=n[this.activeIndex+1];n.forEach(e=>{e.style.transform="translateY(0)",e.style.opacity="0.6",e.style.zIndex="0"}),t.style.transform="translateY(-56px)",t.style.zIndex="2",t.style.opacity="1",r&&(r.style.transform="translateY(56px)",r.style.opacity="0.6",r.style.zIndex="1"),s&&(s.style.transform="translateY(56px)",s.style.opacity="0.6",s.style.zIndex="1")}}});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".features-swiper");if(n){new d(n,{slidesPerView:1,loop:!0,pagination:{el:".features-swiper-pagination",clickable:!0,renderBullet:function(r,s){return`<span class="${s}">${r+1}</span>`}}});const t=document.createElement("style");t.innerHTML=`
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
       margin: 120px 89px 230px 40px;
      }
   
        .swiper-pagination-bullet {
          width: 80px;
          height: 80px;
        }
      }
    `,document.head.appendChild(t)}else console.error("Swiper element not found")});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-question-text").forEach(t=>{t.addEventListener("click",()=>{const r=t.closest(".faq-item"),s=r.querySelector(".faq-answer"),e=t.getAttribute("aria-expanded")==="true";console.log(document.querySelectorAll(".faq-answer")),document.querySelectorAll(".faq-item").forEach(o=>{o!==r&&(o.querySelector(".faq-answer").style.maxHeight=null,o.classList.remove("open"),o.querySelector(".faq-question-text").setAttribute("aria-expanded","false"))}),e?(s.style.maxHeight=null,t.setAttribute("aria-expanded","false"),r.classList.remove("open")):(s.style.maxHeight=s.scrollHeight+"px",t.setAttribute("aria-expanded","true"),r.classList.add("open"))})})});
//# sourceMappingURL=commonHelpers.js.map
