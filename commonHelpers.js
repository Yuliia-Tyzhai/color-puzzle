/* empty css                      */import{S as a}from"./assets/vendor-c12d68e1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function d(r){const t=document.getElementById(r);if(t){const n=t.getBoundingClientRect().top+window.scrollBy;window.scrollTo({top:n-105,behavior:"smooth"})}}const u=document.querySelector(".js-burger-menu"),i=document.querySelector(".js-mob-menu"),f=document.querySelector(".js-close-btn"),p=i.querySelectorAll("a");function m(){i.classList.add("is-open"),i.classList.remove("hidden"),document.body.classList.add("no-scroll")}function l(){i.classList.add("hidden"),document.body.classList.remove("no-scroll"),setTimeout(()=>{i.classList.remove("is-open","is-closing")},300)}u.addEventListener("click",m);f.addEventListener("click",l);p.forEach(r=>{r.addEventListener("click",function(t){t.preventDefault();const o=this.getAttribute("href").substring(1);d(o),l()})});new a(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},centeredSlides:!0,breakpoints:{320:{slidesPerView:1.5,spaceBetween:24},1200:{slidesPerView:3,spaceBetween:36}},on:{slideChange:function(){const r=this.slides,t=r[this.activeIndex],o=r[this.previousIndex],n=r[this.activeIndex+1];r.forEach(e=>{e.style.transform="translateY(0)",e.style.opacity="0.6",e.style.zIndex="0"}),t.style.transform="translateY(-56px)",t.style.zIndex="2",t.style.opacity="1",o&&(o.style.transform="translateY(56px)",o.style.opacity="0.6",o.style.zIndex="1"),n&&(n.style.transform="translateY(56px)",n.style.opacity="0.6",n.style.zIndex="1")}}});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".faq-question-text").forEach(t=>{t.addEventListener("click",()=>{const o=t.closest(".faq-item"),n=o.querySelector(".faq-answer"),e=t.getAttribute("aria-expanded")==="true";console.log(document.querySelectorAll(".faq-answer")),document.querySelectorAll(".faq-item").forEach(s=>{s!==o&&(s.querySelector(".faq-answer").style.maxHeight=null,s.classList.remove("open"),s.querySelector(".faq-question-text").setAttribute("aria-expanded","false"))}),e?(n.style.maxHeight=null,t.setAttribute("aria-expanded","false"),o.classList.remove("open")):(n.style.maxHeight=n.scrollHeight+"px",t.setAttribute("aria-expanded","true"),o.classList.add("open"))})})});
//# sourceMappingURL=commonHelpers.js.map