/* empty css                      */import{S as d}from"./assets/vendor-c12d68e1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const u=document.querySelector(".js-header"),p=document.querySelectorAll(".js-nav-menu a"),g=document.querySelectorAll("section"),y=document.querySelector(".js-burger-menu"),a=document.querySelector(".js-mob-menu"),h=document.querySelector(".js-close-btn"),x=a.querySelectorAll("a");function v(){setTimeout(()=>{a.classList.add("is-open")},200),document.body.classList.add("no-scroll")}function f(){document.body.classList.remove("no-scroll"),setTimeout(()=>{a.classList.remove("is-open","is-closing")},300)}y.addEventListener("click",v);h.addEventListener("click",f);function m(n){const e=n.getAttribute("href").slice(1),r=document.getElementById(e).getBoundingClientRect().top,o=u.offsetHeight,t=r+window.scrollY-o;window.scrollTo({top:t,behavior:"smooth"})}p.forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),m(n)})});x.forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),m(n),f()})});const w={root:null,rootMargin:`-${u.offsetHeight}px 0px 0px 0px`,threshold:.6};function b(n){n.forEach(e=>{if(e.isIntersecting){const r=e.target.getAttribute("id");p.forEach(o=>{o.classList.toggle("active",o.getAttribute("href").slice(1)===r)})}})}const S=new IntersectionObserver(b,w);g.forEach(n=>S.observe(n));const L=document.querySelector(".change-words"),l=L.querySelectorAll("span");let i=0;setInterval(()=>{l[i].classList.remove("active"),i=(i+1)%l.length,l[i].classList.add("active")},2e3);new d(".gallery-swiper",{navigation:{nextEl:".gallery-swiper-button-next",prevEl:".gallery-swiper-button-prev"},centeredSlides:!0,breakpoints:{320:{slidesPerView:1.5,spaceBetween:24},1200:{slidesPerView:3,spaceBetween:36}},on:{slideChange:function(){const n=this.slides,e=n[this.activeIndex],r=n[this.previousIndex],o=n[this.activeIndex+1];n.forEach(t=>{t.style.transform="translateY(0)",t.style.opacity="0.6",t.style.zIndex="0"}),e.style.transform="translateY(-56px)",e.style.zIndex="2",e.style.opacity="1",r&&(r.style.transform="translateY(56px)",r.style.opacity="0.6",r.style.zIndex="1"),o&&(o.style.transform="translateY(56px)",o.style.opacity="0.6",o.style.zIndex="1")}}});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".features-swiper");if(n){new d(n,{slidesPerView:1,loop:!0,pagination:{el:".features-swiper-pagination",clickable:!0,renderBullet:function(r,o){return`<span class="${o}">${r+1}</span>`}}});const e=document.createElement("style");e.innerHTML=`
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
       margin: 288px 0px 213px 72px;
      }
   
        .swiper-pagination-bullet {
          width: 80px;
          height: 80px;
        }
      }
    `,document.head.appendChild(e)}else console.error("Swiper element not found")});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-question-text").forEach(e=>{e.addEventListener("click",()=>{const r=e.closest(".faq-item"),o=r.querySelector(".faq-answer"),t=e.getAttribute("aria-expanded")==="true";console.log(document.querySelectorAll(".faq-answer")),document.querySelectorAll(".faq-item").forEach(s=>{s!==r&&(s.querySelector(".faq-answer").style.maxHeight=null,s.classList.remove("open"),s.querySelector(".faq-question-text").setAttribute("aria-expanded","false"))}),t?(o.style.maxHeight=null,e.setAttribute("aria-expanded","false"),r.classList.remove("open")):(o.style.maxHeight=o.scrollHeight+"px",e.setAttribute("aria-expanded","true"),r.classList.add("open"))})})});
//# sourceMappingURL=commonHelpers.js.map
