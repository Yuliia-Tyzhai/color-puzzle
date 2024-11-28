/* empty css                      */import{S as f}from"./assets/vendor-c12d68e1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const y=document.querySelector(".js-header"),h=document.querySelectorAll(".js-nav-menu a"),x=document.querySelectorAll("section"),L=document.querySelector(".js-burger-menu"),m=document.querySelector(".js-mob-menu"),S=document.querySelector(".js-close-btn"),w=m.querySelectorAll("a");function q(){setTimeout(()=>{m.classList.add("is-open")},200),document.body.classList.add("no-scroll")}function b(){document.body.classList.remove("no-scroll"),setTimeout(()=>{m.classList.remove("is-open","is-closing")},300)}L.addEventListener("click",q);S.addEventListener("click",b);function v(o){const t=o.getAttribute("href").slice(1),i=document.getElementById(t).getBoundingClientRect().top,n=y.offsetHeight,e=i+window.scrollY-n;window.scrollTo({top:e,behavior:"smooth"})}h.forEach(o=>{o.addEventListener("click",t=>{t.preventDefault(),v(o)})});w.forEach(o=>{o.addEventListener("click",t=>{t.preventDefault(),v(o),b()})});const k={root:null,rootMargin:`-${y.offsetHeight}px 0px 0px 0px`,threshold:.6};function E(o){o.forEach(t=>{if(t.isIntersecting){const i=t.target.getAttribute("id");h.forEach(n=>{n.classList.toggle("active",n.getAttribute("href").slice(1)===i)})}})}const A=new IntersectionObserver(E,k);x.forEach(o=>A.observe(o));const I=document.querySelector(".change-words"),u=I.querySelectorAll("span");let c=0;setInterval(()=>{u[c].classList.remove("active"),c=(c+1)%u.length,u[c].classList.add("active")},2e3);const r=document.querySelector(".js-background");let g=0;new f(".gallery-swiper",{navigation:{nextEl:".gallery-button-prev",prevEl:".gallery-button-next"},centeredSlides:!0,slidesPerView:1.5,breakpoints:{320:{slidesPerView:1.5,spaceBetween:24},1200:{slidesPerView:3,spaceBetween:36}},on:{init(){const o=this.slides[this.activeIndex];o.style.opacity="1",p(this)},slideChange(){const o=this.activeIndex;o>g?(r.classList.remove("gallery-background-img-left"),r.classList.remove("gallery-background-img-mobile-left"),r.classList.add("gallery-background-img"),r.classList.add("gallery-background-img-mobile")):o<g&&(r.classList.remove("gallery-background-img-right"),r.classList.remove("gallery-background-img-mobile-right"),r.classList.add("gallery-background-img"),r.classList.add("gallery-background-img-mobile"),o===0&&(r.classList.remove("gallery-background-img"),r.classList.remove("gallery-background-img-mobile"),r.classList.add("gallery-background-img-left"),r.classList.add("gallery-background-img-mobile-left"))),p(this),g=o}}});function p(o){const t=o.slides,i=o.activeIndex,n=t.length-1;t.forEach(s=>{s.style.transform="translateY(0)",s.style.opacity="0.6"});const e=t[i];e.style.opacity="1",e.style.transform="translateY(0)";for(let s=i-1,a=56;s>=0;s--,a+=56){const l=t[s];l.style.transform=`translateY(${a}px)`}for(let s=i+1,a=56;s<t.length;s++,a+=56){const l=t[s];l.style.transform=`translateY(${a}px)`}i===n&&(r.classList.remove("gallery-background-img"),r.classList.add("gallery-background-img-right"),r.classList.remove("gallery-background-img-mobile"),r.classList.add("gallery-background-img-mobile-right"))}document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".features-swiper"),t=[{rotate:-45,scale:.9,duration:.8},{rotate:-35,scale:.9,duration:1},{rotate:35,scale:.83,duration:.7},{rotate:85,scale:.75,duration:1.2},{rotate:45,scale:.95,duration:.9}];if(o){new f(o,{slidesPerView:1,loop:!0,pagination:{el:".features-swiper-pagination",clickable:!0,renderBullet:function(n,e){return'<span class="'+e+'">'+(n+1)+"</span>"}},allowSlideTransition:!1,speed:0,on:{slideChangeTransitionStart:function(){const n=this.slides[this.activeIndex],e=t[this.activeIndex%t.length],a=this.activeIndex>this.previousIndex?e.rotate:-e.rotate,l=Math.random()*.5+.5,d=e.duration||l;n.style.transition=`transform ${d}s ease-in-out, opacity ${d}s ease-in-out`,n.style.transform=`rotate(${a}deg) scale(${e.scale})`,n.style.opacity="0",setTimeout(()=>{n.style.opacity="1"},100),setTimeout(()=>{n.style.transform="",n.style.opacity="",n.style.transition=""},d*1e3)}}});const i=document.createElement("style");i.innerHTML=`
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
    `,document.head.appendChild(i)}else console.error("Swiper element not found")});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-question-text").forEach(t=>{t.addEventListener("click",()=>{const i=t.closest(".faq-item"),n=i.querySelector(".faq-answer"),e=t.getAttribute("aria-expanded")==="true";console.log(document.querySelectorAll(".faq-answer")),document.querySelectorAll(".faq-item").forEach(s=>{s!==i&&(s.querySelector(".faq-answer").style.maxHeight=null,s.classList.remove("open"),s.querySelector(".faq-question-text").setAttribute("aria-expanded","false"))}),e?(n.style.maxHeight=null,t.setAttribute("aria-expanded","false"),i.classList.remove("open")):(n.style.maxHeight=n.scrollHeight+"px",t.setAttribute("aria-expanded","true"),i.classList.add("open"))})})});
//# sourceMappingURL=commonHelpers.js.map
