/* empty css                      */import{S as c}from"./assets/vendor-c12d68e1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function d(r){const e=document.getElementById(r);if(e){const s=e.getBoundingClientRect().top+window.scrollBy;window.scrollTo({top:s-105,behavior:"smooth"})}}const u=document.querySelector(".js-burger-menu"),i=document.querySelector(".js-mob-menu"),f=document.querySelector(".js-close-btn"),p=i.querySelectorAll("a");function m(){i.classList.add("is-open"),i.classList.remove("hidden"),document.body.classList.add("no-scroll")}function a(){i.classList.add("hidden"),document.body.classList.remove("no-scroll"),setTimeout(()=>{i.classList.remove("is-open","is-closing")},300)}u.addEventListener("click",m);f.addEventListener("click",a);p.forEach(r=>{r.addEventListener("click",function(e){e.preventDefault();const n=this.getAttribute("href").substring(1);d(n),a()})});new c(".gallery-swiper",{navigation:{nextEl:".gallery-swiper-button-next",prevEl:".gallery-swiper-button-prev"},centeredSlides:!0,breakpoints:{320:{slidesPerView:1.5,spaceBetween:24},1200:{slidesPerView:3,spaceBetween:36}},on:{slideChange:function(){const r=this.slides,e=r[this.activeIndex],n=r[this.previousIndex],s=r[this.activeIndex+1];r.forEach(t=>{t.style.transform="translateY(0)",t.style.opacity="0.6",t.style.zIndex="0"}),e.style.transform="translateY(-56px)",e.style.zIndex="2",e.style.opacity="1",n&&(n.style.transform="translateY(56px)",n.style.opacity="0.6",n.style.zIndex="1"),s&&(s.style.transform="translateY(56px)",s.style.opacity="0.6",s.style.zIndex="1")}}});document.addEventListener("DOMContentLoaded",function(){const r=document.querySelector(".features-swiper");if(r){new c(r,{slidesPerView:1,loop:!0,pagination:{el:".features-swiper-pagination",clickable:!0,renderBullet:function(n,s){return`<span class="${s}">${n+1}</span>`}}});const e=document.createElement("style");e.innerHTML=`
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
    `,document.head.appendChild(e)}else console.error("Swiper element not found")});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-question-text").forEach(e=>{e.addEventListener("click",()=>{const n=e.closest(".faq-item"),s=n.querySelector(".faq-answer"),t=e.getAttribute("aria-expanded")==="true";console.log(document.querySelectorAll(".faq-answer")),document.querySelectorAll(".faq-item").forEach(o=>{o!==n&&(o.querySelector(".faq-answer").style.maxHeight=null,o.classList.remove("open"),o.querySelector(".faq-question-text").setAttribute("aria-expanded","false"))}),t?(s.style.maxHeight=null,e.setAttribute("aria-expanded","false"),n.classList.remove("open")):(s.style.maxHeight=s.scrollHeight+"px",e.setAttribute("aria-expanded","true"),n.classList.add("open"))})})});
//# sourceMappingURL=commonHelpers.js.map
