/* empty css                      */import{S as m}from"./assets/vendor-c12d68e1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const y=document.querySelector(".js-header"),h=document.querySelectorAll(".js-nav-menu a"),b=document.querySelectorAll("section"),S=document.querySelector(".js-burger-menu"),f=document.querySelector(".js-mob-menu"),w=document.querySelector(".js-close-btn"),L=f.querySelectorAll("a");function q(){setTimeout(()=>{f.classList.add("is-open")},200),document.body.classList.add("no-scroll")}function x(){document.body.classList.remove("no-scroll"),setTimeout(()=>{f.classList.remove("is-open","is-closing")},300)}S.addEventListener("click",q);w.addEventListener("click",x);function v(n){const t=n.getAttribute("href").slice(1),i=document.getElementById(t).getBoundingClientRect().top,o=y.offsetHeight,e=i+window.scrollY-o;window.scrollTo({top:e,behavior:"smooth"})}h.forEach(n=>{n.addEventListener("click",t=>{t.preventDefault(),v(n)})});L.forEach(n=>{n.addEventListener("click",t=>{t.preventDefault(),v(n),x()})});const E={root:null,rootMargin:`-${y.offsetHeight}px 0px 0px 0px`,threshold:.6};function A(n){n.forEach(t=>{if(t.isIntersecting){const i=t.target.getAttribute("id");h.forEach(o=>{o.classList.toggle("active",o.getAttribute("href").slice(1)===i)})}})}const I=new IntersectionObserver(A,E);b.forEach(n=>I.observe(n));const k=document.querySelector(".change-words"),u=k.querySelectorAll("span");let c=0;setInterval(()=>{u[c].classList.remove("active"),c=(c+1)%u.length,u[c].classList.add("active")},2e3);const a=document.querySelector(".js-background");let p=0;new m(".gallery-swiper",{navigation:{nextEl:".gallery-button-prev",prevEl:".gallery-button-next"},centeredSlides:!0,slidesPerView:1.5,breakpoints:{320:{slidesPerView:1.5,spaceBetween:24},1200:{slidesPerView:3,spaceBetween:36}},on:{init(){const n=this.slides[this.activeIndex];n.style.opacity="1",g(this)},slideChange(){const n=this.activeIndex;n>p?(a.classList.remove("gallery-background-img-left"),a.classList.add("gallery-background-img")):n<p&&(a.classList.remove("gallery-background-img-right"),a.classList.add("gallery-background-img"),n===0&&(a.classList.remove("gallery-background-img"),a.classList.add("gallery-background-img-left"))),g(this),p=n}}});function g(n){const t=n.slides,i=n.activeIndex,o=t.length-1;t.forEach(s=>{s.style.transform="translateY(0)",s.style.opacity="0.6"});const e=t[i];e.style.opacity="1",e.style.transform="translateY(0)";for(let s=i-1,r=56;s>=0;s--,r+=56){const l=t[s];l.style.transform=`translateY(${r}px)`}for(let s=i+1,r=56;s<t.length;s++,r+=56){const l=t[s];l.style.transform=`translateY(${r}px)`}i===o&&(a.classList.remove("gallery-background-img"),a.classList.add("gallery-background-img-right"))}document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".features-swiper"),t=[{rotate:-45,scale:.9,duration:.8},{rotate:-35,scale:.9,duration:1},{rotate:35,scale:.83,duration:.7},{rotate:85,scale:.75,duration:1.2},{rotate:45,scale:.95,duration:.9}];if(n){new m(n,{slidesPerView:1,loop:!0,pagination:{el:".features-swiper-pagination",clickable:!0,renderBullet:function(o,e){return'<span class="'+e+'">'+(o+1)+"</span>"}},allowSlideTransition:!1,speed:0,on:{slideChangeTransitionStart:function(){const o=this.slides[this.activeIndex],e=t[this.activeIndex%t.length],r=this.activeIndex>this.previousIndex?e.rotate:-e.rotate,l=Math.random()*.5+.5,d=e.duration||l;o.style.transition=`transform ${d}s ease-in-out, opacity ${d}s ease-in-out`,o.style.transform=`rotate(${r}deg) scale(${e.scale})`,o.style.opacity="0",setTimeout(()=>{o.style.opacity="1"},100),setTimeout(()=>{o.style.transform="",o.style.opacity="",o.style.transition=""},d*1e3)}}});const i=document.createElement("style");i.innerHTML=`
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
        background: transparent;
      }

      .swiper-pagination-bullet-active {
        border: 1px solid #020202;
        background-color: #ffffff;
      }

      .swiper-slide {
        opacity: 1;
        transform: rotate(0) scale(1);
        transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
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
    `,document.head.appendChild(i)}else console.error("Swiper element not found")});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-question-text").forEach(t=>{t.addEventListener("click",()=>{const i=t.closest(".faq-item"),o=i.querySelector(".faq-answer"),e=t.getAttribute("aria-expanded")==="true";console.log(document.querySelectorAll(".faq-answer")),document.querySelectorAll(".faq-item").forEach(s=>{s!==i&&(s.querySelector(".faq-answer").style.maxHeight=null,s.classList.remove("open"),s.querySelector(".faq-question-text").setAttribute("aria-expanded","false"))}),e?(o.style.maxHeight=null,t.setAttribute("aria-expanded","false"),i.classList.remove("open")):(o.style.maxHeight=o.scrollHeight+"px",t.setAttribute("aria-expanded","true"),i.classList.add("open"))})})});
//# sourceMappingURL=commonHelpers.js.map
