/* empty css                      */import{S as c}from"./assets/vendor-c12d68e1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const p=document.querySelector(".js-header"),a=document.querySelectorAll(".js-nav-menu a");console.log(a);const f=document.querySelector(".js-burger-menu"),l=document.querySelector(".js-mob-menu"),m=document.querySelector(".js-close-btn"),y=l.querySelectorAll("a");function g(){setTimeout(()=>{l.classList.add("is-open")},200),document.body.classList.add("no-scroll")}function d(){document.body.classList.remove("no-scroll"),setTimeout(()=>{l.classList.remove("is-open","is-closing")},300)}f.addEventListener("click",g);m.addEventListener("click",d);function u(o){const t=o.getAttribute("href").slice(1),r=document.getElementById(t).getBoundingClientRect().top,s=p.offsetHeight,e=r+window.scrollY-s;window.scrollTo({top:e,behavior:"smooth"})}a.forEach(o=>{o.addEventListener("click",t=>{t.preventDefault(),u(o)})});y.forEach(o=>{o.addEventListener("click",t=>{t.preventDefault(),u(o),d()})});new c(".gallery-swiper",{navigation:{nextEl:".gallery-swiper-button-next",prevEl:".gallery-swiper-button-prev"},centeredSlides:!0,breakpoints:{320:{slidesPerView:1.5,spaceBetween:24},1200:{slidesPerView:3,spaceBetween:36}},on:{slideChange:function(){const o=this.slides,t=o[this.activeIndex],r=o[this.previousIndex],s=o[this.activeIndex+1];o.forEach(e=>{e.style.transform="translateY(0)",e.style.opacity="0.6",e.style.zIndex="0"}),t.style.transform="translateY(-56px)",t.style.zIndex="2",t.style.opacity="1",r&&(r.style.transform="translateY(56px)",r.style.opacity="0.6",r.style.zIndex="1"),s&&(s.style.transform="translateY(56px)",s.style.opacity="0.6",s.style.zIndex="1")}}});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".features-swiper");if(o){new c(o,{slidesPerView:1,loop:!0,pagination:{el:".features-swiper-pagination",clickable:!0,renderBullet:function(r,s){return`<span class="${s}">${r+1}</span>`}}});const t=document.createElement("style");t.innerHTML=`
      .features-swiper-pagination {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: row;
      gap: 8px;
      margin-top: 56px;
      margin-bottom: 53px;
      position: absolute;
      top: 10px;left: 50%;
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
        width: 40px;
        height: 40px;
        background-color: #ffffff;
        opacity: 1;
        border-radius: 0px;
      }

      .swiper-pagination-bullet-active {
        border: 1px solid #020202;
        background: #ffffff;
      }
    `,document.head.appendChild(t)}else console.error("Swiper element not found")});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-question-text").forEach(t=>{t.addEventListener("click",()=>{const r=t.closest(".faq-item"),s=r.querySelector(".faq-answer"),e=t.getAttribute("aria-expanded")==="true";console.log(document.querySelectorAll(".faq-answer")),document.querySelectorAll(".faq-item").forEach(n=>{n!==r&&(n.querySelector(".faq-answer").style.maxHeight=null,n.classList.remove("open"),n.querySelector(".faq-question-text").setAttribute("aria-expanded","false"))}),e?(s.style.maxHeight=null,t.setAttribute("aria-expanded","false"),r.classList.remove("open")):(s.style.maxHeight=s.scrollHeight+"px",t.setAttribute("aria-expanded","true"),r.classList.add("open"))})})});
//# sourceMappingURL=commonHelpers.js.map
