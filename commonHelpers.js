/* empty css                      */import{S as g}from"./assets/vendor-c12d68e1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}})();const m=document.querySelector(".js-header"),y=document.querySelectorAll(".js-nav-menu a"),v=document.querySelectorAll("section"),b=document.querySelector(".js-burger-menu"),p=document.querySelector(".js-mob-menu"),w=document.querySelector(".js-close-btn"),L=p.querySelectorAll("a");function S(){setTimeout(()=>{p.classList.add("is-open")},200),document.body.classList.add("no-scroll")}function h(){document.body.classList.remove("no-scroll"),setTimeout(()=>{p.classList.remove("is-open","is-closing")},300)}b.addEventListener("click",S);w.addEventListener("click",h);function x(n){const e=n.getAttribute("href").slice(1),r=document.getElementById(e).getBoundingClientRect().top,s=m.offsetHeight,o=r+window.scrollY-s;window.scrollTo({top:o,behavior:"smooth"})}y.forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),x(n)})});L.forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),x(n),h()})});const q={root:null,rootMargin:`-${m.offsetHeight}px 0px 0px 0px`,threshold:.6};function E(n){n.forEach(e=>{if(e.isIntersecting){const r=e.target.getAttribute("id");y.forEach(s=>{s.classList.toggle("active",s.getAttribute("href").slice(1)===r)})}})}const A=new IntersectionObserver(E,q);v.forEach(n=>A.observe(n));const k=document.querySelector(".change-words"),d=k.querySelectorAll("span");let l=0;setInterval(()=>{d[l].classList.remove("active"),l=(l+1)%d.length,d[l].classList.add("active")},2e3);const c=document.querySelector(".js-background");let u=0;new g(".gallery-swiper",{navigation:{nextEl:".gallery-button-prev",prevEl:".gallery-button-next"},centeredSlides:!0,slidesPerView:1.5,breakpoints:{320:{slidesPerView:1.5,spaceBetween:24},1200:{slidesPerView:3,spaceBetween:36}},on:{init(){const n=this.slides[this.activeIndex];n.style.opacity="1",f(this)},slideChange(){const n=this.activeIndex;n>u?(c.classList.remove("gallery-background-img-left"),c.classList.add("gallery-background-img")):n<u&&(c.classList.remove("gallery-background-img-right"),c.classList.add("gallery-background-img"),n===0&&(c.classList.remove("gallery-background-img"),c.classList.add("gallery-background-img-left"))),f(this),u=n}}});function f(n){const e=n.slides,r=n.activeIndex,s=e.length-1;e.forEach(t=>{t.style.transform="translateY(0)",t.style.opacity="0.6"});const o=e[r];o.style.opacity="1",o.style.transform="translateY(0)";for(let t=r-1,i=56;t>=0;t--,i+=56){const a=e[t];a.style.transform=`translateY(${i}px)`}for(let t=r+1,i=56;t<e.length;t++,i+=56){const a=e[t];a.style.transform=`translateY(${i}px)`}r===s&&(c.classList.remove("gallery-background-img"),c.classList.add("gallery-background-img-right"))}document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".features-swiper");if(n){new g(n,{slidesPerView:1,loop:!0,pagination:{el:".features-swiper-pagination",clickable:!0,renderBullet:function(r,s){return`<span class="${s}">${r+1}</span>`}}});const e=document.createElement("style");e.innerHTML=`
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
    `,document.head.appendChild(e)}else console.error("Swiper element not found")});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-question-text").forEach(e=>{e.addEventListener("click",()=>{const r=e.closest(".faq-item"),s=r.querySelector(".faq-answer"),o=e.getAttribute("aria-expanded")==="true";console.log(document.querySelectorAll(".faq-answer")),document.querySelectorAll(".faq-item").forEach(t=>{t!==r&&(t.querySelector(".faq-answer").style.maxHeight=null,t.classList.remove("open"),t.querySelector(".faq-question-text").setAttribute("aria-expanded","false"))}),o?(s.style.maxHeight=null,e.setAttribute("aria-expanded","false"),r.classList.remove("open")):(s.style.maxHeight=s.scrollHeight+"px",e.setAttribute("aria-expanded","true"),r.classList.add("open"))})})});
//# sourceMappingURL=commonHelpers.js.map
