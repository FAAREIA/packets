!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e=e=>{const t=e.currentTarget.dataset.open;return"open-nav"===t&&document.body.classList.toggle("no-scroll"),header.classList.toggle(t)};burger.addEventListener("click",e),search.addEventListener("click",e);class t{constructor(e){this.images={},this.imagesIndex=[],this.imagesSource=e,this.imagesSource.forEach(e=>{const t=e.dataset.index;this.imagesIndex.push(t),Reflect.set(this.images,t,e)}),this.clone()}clone(){const e=modal.content.cloneNode(!0),t=e.querySelector(".close-button"),s=e.querySelectorAll(".nav");return t.addEventListener("click",this.close),s.forEach(e=>e.addEventListener("click",this.navigate)),packet.insertBefore(e,null),this.sourceNode=document.querySelector(".modal-images")}close(){return this.sourceNode.classList.remove("open")}navigate(e){const t=e.currentTarget.classList.contains("next"),s=Number(this.sourceNode.querySelector(".current").dataset.index),i=t?s+1:s-1;return this.setImages(i,t)}open(e){let t;return this.imagesSource.forEach(s=>{const i=s.dataset.index;i===e&&(t=i)}),this.setImages(t,!0),this.sourceNode.classList.add("open")}setImages(e,t){const s=this.sourceNode.querySelector(".current"),i=s.children[0];let n;n=Reflect.has(this.images,e)?this.images[e]:t?this.images[0]:this.images[this.imagesIndex.length-1],s.dataset.index=n.dataset.index,i.alt=n.children[0].alt,i.src=n.children[0].src,i.srcset=n.children[0].srcset}}new class{constructor(e){this.images=e.querySelector(".images"),this.li=this.images.querySelectorAll("li"),this.nav=e.querySelectorAll(".nav"),this.sourceNode=e,this.images.addEventListener("click",this.openModal),this.nav.forEach(e=>e.addEventListener("click",this.navigate))}navigate(e){const t=e.currentTarget.classList.contains("next"),s=this.images.offsetWidth;return t?this.images.scrollLeft+=s:this.images.scrollLeft-=s}openModal(e){const s=e.target.parentNode.dataset.index;return document.body.querySelector(".modal-images")||(this.modal=new t(this.li)),this.modal.open(s)}}(document.body.querySelector(".slideshow"))}));