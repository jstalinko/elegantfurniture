import{r as y,g as L,i as l,j as e,k as f,l as h,u as m,q as I,v as C,F as x,t as w,x as b,y as o,z as v,A as _,B as $,C as oe,D as P,E as ae,G as J,H as W,I as le,b as ne,J as re,h as ie}from"./@vue-Dr14j3Qj.js";import{i as S,D as ce,Z as ue,j as de}from"./@inertiajs-CNQFOCJb.js";import{S as z,a as A,f as me,N as X,T as pe,A as _e,b as ge,c as he}from"./swiper-CU5ZjIem.js";import{M as D}from"./markdown-it-DI8MEbma.js";import{a as F}from"./markdown-it-abbr-BogacQwz.js";import{b as H}from"./markdown-it-anchor-BhSkH0Cx.js";import{f as B}from"./markdown-it-footnote-BicVaRtD.js";import{M as R}from"./markdown-it-highlightjs-CIFA_Xh8.js";import{s as V}from"./markdown-it-sub-Bxi31R0z.js";import{s as U}from"./markdown-it-sup-Bp2DoVCN.js";import{M as q}from"./markdown-it-task-lists-Bk2B0ehF.js";import{M as K}from"./markdown-it-toc-done-right-BW46SVUD.js";import{a as fe}from"./axios-B4uVmeYG.js";import"./deepmerge-BUxsUDTy.js";import"./call-bind-aBC2DkHY.js";import"./get-intrinsic-BKEvijrG.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-B5OANX0j.js";import"./define-data-property-DO9o5wXF.js";import"./es-define-property-tzmkNPou.js";import"./gopd-CEkvUycD.js";import"./has-property-descriptors-DphFXkuo.js";import"./qs-Cy1zeaSV.js";import"./side-channel-D6UNhD6X.js";import"./object-inspect-B8tdE9OX.js";import"./nprogress-uqLJ5xmn.js";import"./lodash.clonedeep-Bxvn-V0B.js";import"./lodash.isequal-BYpQg7Um.js";import"./mdurl-k9Sl0PQj.js";import"./uc.micro-kMc2yuuw.js";import"./entities-C20TfXL6.js";import"./linkify-it-DmNjr4Kv.js";import"./punycode.js-Dj65hjkv.js";import"./highlight.js-C1aZ24U6.js";function be(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",currencyDisplay:"narrowSymbol",minimumFractionDigits:0,maximumFractionDigits:0}).format(t)}function ve(t){return t.replace(/<[^>]*>?/gm,"")}function k(t){return/^(http|https):\/\//i.test(t)?t:"/storage/"+t}const N=(t,a)=>{const s=t.__vccOpts||t;for(const[n,g]of a)s[n]=g;return s},ye={class:"container max-w-7xl mx-auto sticky top-0 z-50"},xe={class:"navbar bg-base-200 backdrop-blur-lg bg-opacity-80 rounded-full"},we={class:"flex-1"},$e={class:"flex-none gap-2"},ke={class:"form-control relative"},Se={key:0,class:"absolute z-50 mt-12 bg-base-200 rounded-md w-full max-h-60 overflow-y-auto"},Pe=["onMousedown"],je={class:"flex justify-between"},Oe=["src"],Te={class:"text-xs md:text-lg"},Me={__name:"Navbar",props:{props:Object},setup(t){const a=t,s=y(""),n=y(!1),g=L(()=>{if(!s.value)return[];const r=s.value.toLowerCase();return a.props.globals.productForSearch.filter(i=>i.name.toLowerCase().includes(r))}),p=()=>{n.value=g.value.length>0},u=r=>{s.value=r.name,n.value=!1,ce.visit("/product/"+r.slug,{method:"GET",preserveScroll:!0})};return(r,i)=>(o(),l("div",ye,[e("div",xe,[e("div",we,[f(m(S),{class:"btn btn-ghost rounded-full text-xl playwrite-de-grund",href:"/"},{default:h(()=>[v(_(t.props.globals.setting.site_name),1)]),_:1})]),e("div",$e,[e("div",ke,[I(e("input",{type:"text",placeholder:"Cari disini ...",class:"input input-bordered w-32 md:w-[400px] rounded-full bg-transparent","onUpdate:modelValue":i[0]||(i[0]=d=>s.value=d),onInput:p,onFocus:i[1]||(i[1]=d=>n.value=!0),onBlur:i[2]||(i[2]=d=>r.setTimeout(()=>n.value=!1,100))},null,544),[[C,s.value]]),n.value&&g.value.length>0?(o(),l("ul",Se,[(o(!0),l(x,null,w(g.value,(d,c)=>(o(),l("li",{key:d.id,class:"px-4 py-2 hover:bg-base-100 cursor-pointer",onMousedown:O=>u(d)},[e("div",je,[e("img",{src:m(k)(d.main_image),class:"w-12 object-cover hidden md:block"},null,8,Oe),e("div",Te,_(d.name),1)])],40,Pe))),128))])):b("",!0)])])])]))}},Y=N(Me,[["__scopeId","data-v-7f3a741a"]]),Ie=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),Ce={id:"footer",class:"mt-10"},ze={class:"footer bg-base-200 text-base-content p-10"},Le=["src","alt"],Ee=e("br",null,null,-1),Ae=e("h6",{class:"footer-title"},"LINKS",-1),Ne=e("a",{class:"link link-hover",href:"/sitemap.xml",target:"_blank"},"Sitemap",-1),De=e("h6",{class:"footer-title"},"Produk Terlaris",-1),Fe={class:"footer bg-neutral text-neutral-content items-center p-4"},He={class:"grid-flow-col items-center"},Be=["src","alt"],Re={class:"grid-flow-col gap-4 justify-self-center"},Ve=["href"],Ue=e("span",{class:"mdi mdi-facebook text-xl md:text-3xl"},null,-1),qe=[Ue],Ke=["href"],Ge=e("span",{class:"mdi mdi-instagram text-xl md:text-3xl"},null,-1),Je=[Ge],We=["href"],Xe=e("span",{class:"mdi mdi-whatsapp text-xl md:text-3xl"},null,-1),Ye=[Xe],Q={__name:"Footer",props:{props:Object},setup(t){return(a,s)=>(o(),l("section",Ce,[e("footer",ze,[e("aside",null,[e("img",{src:m(k)(t.props.globals.setting.logo),alt:"Logo "+t.props.globals.setting.site_name,loading:"lazy",class:"w-32"},null,8,Le),e("p",null,[v(_(t.props.globals.setting.site_name)+" ",1),Ee,v(" "+_(t.props.globals.setting.site_description),1)])]),e("nav",null,[Ae,f(m(S),{class:"link link-hover",href:"/p/about"},{default:h(()=>[v("Tentang Kami")]),_:1}),f(m(S),{class:"link link-hover",href:"/p/contact"},{default:h(()=>[v("Hubungi Kami")]),_:1}),Ne]),e("nav",null,[De,(o(!0),l(x,null,w(t.props.globals.productForSearch.slice(0,5),(n,g)=>(o(),$(m(S),{class:"link link-hover",key:g,href:"/product/"+n.slug},{default:h(()=>[v(_(n.name),1)]),_:2},1032,["href"]))),128))])]),e("footer",Fe,[e("aside",He,[e("img",{src:m(k)(t.props.globals.setting.logo),alt:"Logo "+t.props.globals.setting.site_name,loading:"lazy",class:"w-8"},null,8,Be),e("p",null," Copyright © "+_(new Date().getFullYear())+" "+_(t.props.globals.setting.site_name)+" | PROVIDED BY : PT JEPARA SOLUSI TEKNOLOGI ",1)]),e("nav",Re,[t.props.globals.setting.sosmed.facebook_url!=null?(o(),l("a",{key:0,href:t.props.globals.setting.sosmed.facebook_url,target:"_blank",role:"link","aria-label":"Hubungi kami via facebook dengan click link ini"},qe,8,Ve)):b("",!0),t.props.globals.setting.sosmed.instagram_url!=null?(o(),l("a",{key:1,href:t.props.globals.setting.sosmed.instagram_url,target:"_blank",role:"link","aria-label":"Hubungi kami via instagram dengan click link ini"},Je,8,Ke)):b("",!0),t.props.globals.setting.sosmed.whatsapp_url!=null?(o(),l("a",{key:2,href:t.props.globals.setting.sosmed.whatsapp_url,target:"_blank","aria-label":"Hubungi kami via whatsapp dengan click link ini"},Ye,8,We)):b("",!0)])])]))}},Qe=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Ze={key:0},et={key:1},tt=["content"],st=["content"],ot=["content"],at=e("meta",{name:"robots",content:"index, follow"},null,-1),lt=e("meta",{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"},null,-1),nt=e("meta",{name:"language",content:"Indonesia,English"},null,-1),rt=e("meta",{name:"revisit-after",content:"1 days"},null,-1),it=["content"],ct=["content"],ut=["content"],dt=["content"],mt=["content"],pt=["content"],_t=["content"],gt=["content"],ht=e("meta",{name:"twitter:card",content:"summary"},null,-1),ft=["href"],Z={__name:"HeadInfo",props:{title:String,settings:Object,preloadImage:Object},setup(t){return(a,s)=>(o(),$(m(ue),null,{default:h(()=>{var n,g;return[t.title===void 0?(o(),l("title",Ze,`
            `+_(t.settings.site_name)+" - "+_(t.settings.site_description)+`
        `,1)):b("",!0),t.title!==void 0?(o(),l("title",et,`
            `+_(t.title)+" - "+_(t.settings.site_name)+`
        `,1)):b("",!0),e("meta",{name:"title",content:t.settings.site_name},null,8,tt),e("meta",{name:"description",content:t.settings.site_description},null,8,st),e("meta",{name:"keywords",content:t.settings.site_keywords},null,8,ot),at,lt,nt,rt,e("meta",{name:"author",content:t.settings.site_name},null,8,it),e("meta",{property:"og:title",content:t.settings.site_name},null,8,ct),e("meta",{property:"og:description",content:t.settings.site_description},null,8,ut),e("meta",{property:"og:image",content:m(k)(t.settings.icon)},null,8,dt),e("meta",{property:"og:url",content:(n=t.settings)==null?void 0:n.site_url},null,8,mt),e("meta",{name:"twitter:title",content:t.settings.site_name},null,8,pt),e("meta",{name:"twitter:description",content:t.settings.site_description},null,8,_t),e("meta",{name:"twitter:url",content:(g=t.settings)==null?void 0:g.site_url},null,8,gt),ht,t.preloadImage!==void 0?(o(!0),l(x,{key:2},w(t.preloadImage,(p,u)=>(o(),l("link",{key:u,rel:"preload",href:m(k)(p.main_image),as:"image"},null,8,ft))),128)):b("",!0)]}),_:1}))}},bt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),j={__name:"Layout",props:{props:Object},setup(t){return(a,s)=>(o(),l("div",null,[f(Y,{props:t.props},null,8,["props"]),f(Z,{title:t.props.globals.title,settings:t.props.globals.setting,preloadImage:t.props.globals.preloadImages},null,8,["title","settings","preloadImage"]),e("div",null,[oe(a.$slots,"default")]),f(Q,{props:t.props},null,8,["props"])]))}},vt=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),yt={__name:"category",props:{props:Object},setup(t){return(a,s)=>(o(),$(j,{props:t.props},null,8,["props"]))}},xt=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"})),wt="modulepreload",$t=function(t){return"/build/"+t},G={},kt=function(a,s,n){let g=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),u=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));g=Promise.all(s.map(r=>{if(r=$t(r),r in G)return;G[r]=!0;const i=r.endsWith(".css"),d=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${d}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":wt,i||(c.as="script",c.crossOrigin=""),c.href=r,u&&c.setAttribute("nonce",u),document.head.appendChild(c),i)return new Promise((O,M)=>{c.addEventListener("load",O),c.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${r}`)))})}))}return g.then(()=>a()).catch(p=>{const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=p,window.dispatchEvent(u),!u.defaultPrevented)throw p})},St={id:"products"},Pt={class:"min-h-screen container max-w-7xl mx-auto mt-10 p-2"},jt={class:"mb-3 mt-3 font-bold text-xl md:text-3xl"},Ot={key:0,id:"category",class:"max-w-7xl p-3 mx-auto mt-2 mb-2"},Tt={role:"tablist",class:"tabs tabs-boxed overflow-auto"},Mt=["onClick"],It={id:"sort"},Ct={class:"flex justify-between mb-3"},zt={class:"dropdown"},Lt=e("summary",{class:"btn m-1"},[e("i",{class:"mdi mdi-filter"}),v(" Filter ")],-1),Et={class:"menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"},At=e("i",{class:"mdi mdi-close"},null,-1),Nt={class:"grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"},Dt=["src","alt"],Ft={class:"card-body"},Ht={class:"card-title text-sm md:text-xl hover:underline hover:cursor-pointer"},Bt={class:"font-bold text-xs"},Rt={key:0},Vt={key:1},Ut={class:"card-actions justify-end"},qt=["href"],Kt=e("i",{class:"mdi mdi-whatsapp"},null,-1),Gt={key:1,class:"flex justify-center mt-6"},E={__name:"Product",props:{products:Array,title:String,categories:Object},setup(t){const a=t,s=y("all"),n=y(null),g=y(8),p=L(()=>{let i=[];switch(s.value==="all"?i=a.products:i=a.products.filter(d=>d.category_id===s.value),n.value){case"termahal":return i.sort((d,c)=>c.price-d.price);case"termurah":return i.sort((d,c)=>d.price-c.price);case"populer":default:return i.sort((d,c)=>c.views-d.views)}}),u=L(()=>p.value.slice(0,g.value)),r=()=>{g.value+=8};return(i,d)=>(o(),l("section",St,[e("div",Pt,[e("h1",jt,_(t.title??"Furniture Berkualitas ditangan profesional."),1),t.categories!=null?(o(),l("section",Ot,[e("div",Tt,[e("a",{role:"tab",class:P(s.value=="all"?"tab tab-active  text-xs md:text-md":"tab text-xs md:text-md"),onClick:d[0]||(d[0]=c=>s.value="all")}," Semua ",2),(o(!0),l(x,null,w(t.categories,(c,O)=>(o(),l("a",{role:"tab",key:O,class:P(s.value==c.id?"tab tab-active  text-xs md:text-md":"tab text-xs md:text-md"),onClick:M=>s.value=c.id},_(c.name),11,Mt))),128))])])):b("",!0),e("section",It,[e("div",Ct,[e("div",null,[e("details",zt,[Lt,e("ul",Et,[e("li",null,[e("a",{role:"button",onClick:d[1]||(d[1]=c=>n.value="termahal")}," Termahal")]),e("li",null,[e("a",{role:"button",onClick:d[2]||(d[2]=c=>n.value="termurah")}," Termurah")]),e("li",null,[e("a",{role:"button",onClick:d[3]||(d[3]=c=>n.value="populer")}," Terpopuler")])])])]),e("div",null,[n.value!=null?(o(),l("div",{key:0,class:"border-2 border-gray-400 p-2 rounded-full cursor-pointer",onClick:d[4]||(d[4]=c=>n.value=null)},[v("Filter : "+_(n.value)+" ",1),At])):b("",!0)])])]),e("div",Nt,[(o(!0),l(x,null,w(u.value,(c,O)=>(o(),l("div",{class:"card bg-base-200 w-full hover:shadow-xl mb-3",key:O},[f(m(S),{href:"/product/"+c.slug},{default:h(()=>[e("figure",null,[e("img",{src:m(k)(c.main_image),alt:"Beli produk furniture "+c.name,loading:"lazy",class:"rounded-lg object-cover"},null,8,Dt)])]),_:2},1032,["href"]),e("div",Ft,[f(m(S),{href:"/product/"+c.slug},{default:h(()=>[e("h2",Ht,_(c.name),1)]),_:2},1032,["href"]),e("b",Bt,[c.price===0?(o(),l("span",Rt," Harga hubungi admin ")):(o(),l("span",Vt,_(m(be)(c.price)),1))]),e("div",Ut,[(o(!0),l(x,null,w(c.tags,(M,se)=>(o(),$(m(S),{class:"badge badge-outline text-xs",key:se,href:"/product/tag/"+M},{default:h(()=>[v(" #"+_(M),1)]),_:2},1032,["href"]))),128)),e("a",{href:"/wa-checkout/"+c.id,target:"_blank",class:"btn btn-secondary btn-sm w-full rounded-full mt-2","data-btn":"click"},[Kt,v(" Pesan ")],8,qt)])])]))),128))]),p.value.length>g.value?(o(),l("div",Gt,[u.value.length<p.value.length?(o(),l("button",{key:0,onClick:r,class:"btn btn-primary btn-sm md:btn-md rounded-full"}," Tampilkan Lainnya ")):b("",!0)])):b("",!0)])]))}},Jt=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),Wt={class:"min-h-screen container mx-auto bg-base-200 rounded-lg mt-5 md:mt-10 gap-5 p-2 md:p-5"},Xt={class:"grid grid-cols-1 md:grid-cols-2 gap-3"},Yt=["src","alt"],Qt=["src","alt"],Zt=["src","alt"],es=["src","alt"],ts={class:"p-5"},ss={class:"text-2xl md:text-5xl"},os={class:"flex justify-start gap-4 mt-3"},as=e("i",{class:"mdi mdi-tag-outline"},null,-1),ls=e("i",{class:"mdi mdi-calendar"},null,-1),ns=e("i",{class:"mdi mdi-eye"},null,-1),rs={class:"no-flex"},is={class:"min-h-40 md:min-h-[400px] text-lg md:text-xl prose md:prose-lg mt-3"},cs={class:"mt-10"},us=e("i",{class:"mdi mdi-tag"},null,-1),ds={class:"mt-3"},ms=["href"],ps=e("i",{class:"mdi mdi-whatsapp"},null,-1),_s={id:"similiar",class:"mt-5"},gs={__name:"detail",props:{props:Object},setup(t){const a=ae(()=>kt(()=>Promise.resolve().then(()=>ee),void 0)),s=y(null),n=[me,X,pe],g=p=>{s.value=p};return(p,u)=>(o(),$(j,{props:t.props},{default:h(()=>[e("div",Wt,[e("div",Xt,[e("div",null,[f(m(A),{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},loop:!0,spaceBetween:10,navigation:!0,thumbs:{swiper:s.value},modules:n,class:"mySwiper2"},{default:h(()=>[f(m(z),null,{default:h(()=>[e("img",{src:m(k)(t.props.product.main_image),class:"object-cover w-full rounded-lg",alt:"Gambar Produk "+t.props.product.name,loading:"lazy"},null,8,Yt)]),_:1}),(o(!0),l(x,null,w(t.props.product.preview_images,(r,i)=>(o(),$(m(z),{key:i},{default:h(()=>[e("img",{src:m(k)(r),alt:"Gambar Produk "+t.props.product.name+" "+i,loading:"lazy",class:"object-cover w-full rounded-lg"},null,8,Qt)]),_:2},1024))),128))]),_:1},8,["thumbs"]),f(m(A),{onSwiper:g,loop:!0,spaceBetween:1,slidesPerView:8,freeMode:!0,watchSlidesProgress:!0,modules:n,class:"mySwiper mt-1 md:mt-2 cursor-pointer"},{default:h(()=>[f(m(z),{class:"hover:sepia"},{default:h(()=>[e("img",{src:m(k)(t.props.product.main_image),alt:"Thumbs image "+t.props.product.name,class:"w-24",loading:"lazy"},null,8,Zt)]),_:1}),(o(!0),l(x,null,w(t.props.product.preview_images,(r,i)=>(o(),$(m(z),{key:i,class:"hover:sepia"},{default:h(()=>[e("img",{src:m(k)(r),alt:"Thum Image "+t.props.product.name,loading:"lazy",class:"w-24"},null,8,es)]),_:2},1024))),128))]),_:1})]),e("div",ts,[e("h1",ss,_(t.props.product.name),1),e("div",os,[f(m(S),{href:"/category/"+t.props.product.category.slug,class:"hover:underline"},{default:h(()=>[as,v(" "+_(t.props.product.category.name),1)]),_:1},8,["href"]),e("span",null,[ls,v(" "+_(new Date(t.props.product.created_at).toLocaleDateString("id")),1)]),e("span",null,[ns,v(" "+_(t.props.product.views)+"x",1)])]),e("div",rs,[e("div",is,[f(m(a),{source:t.props.product.description},null,8,["source"])]),e("span",cs,[us,(o(!0),l(x,null,w(t.props.product.tags,(r,i)=>(o(),l("span",{class:"badge badge-primary text-xs m-1",key:i},[f(m(S),{href:"/product/tag/"+r},{default:h(()=>[v(_(r),1)]),_:2},1032,["href"])]))),128))]),e("div",ds,[e("a",{href:"/wa-checkout/"+t.props.product.id,class:"btn btn-primary w-full rounded-full"},[ps,v(" Pesan Sekarang ")],8,ms)])])])]),e("section",_s,[f(E,{products:t.props.similiars,title:"Produk yang mungkin anda cari"},null,8,["products"])])])]),_:1},8,["props"]))}},hs=Object.freeze(Object.defineProperty({__proto__:null,default:gs},Symbol.toStringTag,{value:"Module"})),fs={__name:"index",props:{props:Object},setup(t){return(a,s)=>(o(),$(j,{props:t.props},{default:h(()=>[f(E,{products:t.props.products,title:t.props.globals.title},null,8,["products","title"])]),_:1},8,["props"]))}},bs=Object.freeze(Object.defineProperty({__proto__:null,default:fs},Symbol.toStringTag,{value:"Module"})),vs=["innerHTML"],ys={__name:"RenderMarkdown",props:{source:String},setup(t){const a=t;new D().use(F).use(H).use(B).use(R).use(V).use(U).use(q).use(K);const n=new D({html:!0,linkify:!0,typographer:!0}).use(F).use(H).use(B).use(R).use(V).use(U).use(q).use(K).render(a.source);return(g,p)=>(o(),l("div",{innerHTML:m(n)},null,8,vs))}},ee=Object.freeze(Object.defineProperty({__proto__:null,default:ys},Symbol.toStringTag,{value:"Module"})),xs=t=>(J("data-v-f36e28fc"),t=t(),W(),t),ws={id:"testimonials"},$s={class:"min-h-screen container max-w-7xl mx-auto mt-10"},ks=xs(()=>e("h1",{class:"mb-3 mt-3 font-bold text-xl md:text-3xl"}," Terpercaya lebih dari 1000+ Klien kami. ",-1)),Ss={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"},Ps={class:"mb-4"},js={class:"flex justify-between items-center"},Os={class:"text-xl font-semibold"},Ts={class:"flex items-center"},Ms={class:"text-gray-500 text-xs"},Is={class:"text-gray-600 text-sm"},Cs={key:0,class:"flex justify-center mt-6"},zs={__name:"Testimonial",props:{testimonials:Array},setup(t){const a=t,s=y(9),n=y(a.testimonials.slice(0,s.value)),g=(u,r)=>u>=r?"mdi mdi-star text-yellow-500":"mdi mdi-star-outline text-yellow-500",p=()=>{s.value+=9,n.value=a.testimonials.slice(0,s.value)};return(u,r)=>(o(),l("section",ws,[e("div",$s,[ks,e("div",Ss,[(o(!0),l(x,null,w(n.value,(i,d)=>(o(),l("div",{key:d,class:"bg-base-300 shadow-lg rounded-lg p-6 flex flex-col justify-between"},[e("div",Ps,[e("div",js,[e("h2",Os,_(i.name),1),e("div",Ts,[(o(),l(x,null,w(5,c=>e("i",{key:c,class:P(g(i.star,c))},null,2)),64))])]),e("p",Ms,_(i.alamat),1)]),e("p",Is,'"'+_(i.content)+'"',1)]))),128))]),t.testimonials.length>s.value?(o(),l("div",Cs,[n.value.length<t.testimonials.length?(o(),l("button",{key:0,onClick:p,class:"btn btn-primary btn-sm md:btn-md rounded-full"}," Tampilkan Lainnya ")):b("",!0)])):b("",!0)])]))}},te=N(zs,[["__scopeId","data-v-f36e28fc"]]),Ls=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"})),Es=e("div",{class:"container max-w-7xl mx-auto min-h-screen bg-base-200 rounded-full"},null,-1),As={__name:"about",props:{props:Object},setup(t){return(a,s)=>(o(),$(j,{props:t.props},{default:h(()=>[Es]),_:1},8,["props"]))}},Ns=Object.freeze(Object.defineProperty({__proto__:null,default:As},Symbol.toStringTag,{value:"Module"})),T=t=>(J("data-v-d60a440d"),t=t(),W(),t),Ds={class:"container max-w-7xl mx-auto min-h-screen bg-base-200 rounded-full p-8"},Fs=T(()=>e("h2",{class:"text-2xl font-bold text-center mb-6"},"Hubungi Kami",-1)),Hs={key:0,class:"alert alert-success"},Bs={key:1,class:"alert alert-error"},Rs=T(()=>e("label",{for:"name",class:"label"},[e("span",{class:"label-text"},"Nama Lengkap")],-1)),Vs={key:0,class:"text-red-500 text-sm"},Us=T(()=>e("label",{for:"whatsapp",class:"label"},[e("span",{class:"label-text"},"No. Whatsapp")],-1)),qs={key:0,class:"text-red-500 text-sm"},Ks=T(()=>e("label",{for:"address",class:"label"},[e("span",{class:"label-text"},"Alamat")],-1)),Gs={key:0,class:"text-red-500 text-sm"},Js=T(()=>e("label",{for:"message",class:"label"},[e("span",{class:"label-text"},"Pesan")],-1)),Ws={key:0,class:"text-red-500 text-sm"},Xs=T(()=>e("div",{class:"flex justify-center"},[e("button",{type:"submit",class:"btn btn-primary"},"Kirim")],-1)),Ys={__name:"contact",props:{props:Object},setup(t){const a=y({name:"",whatsapp:"",address:"",message:""}),s=y({name:!1,whatsapp:!1,address:!1,message:!1}),n=y(null),g=async()=>{if(s.value.name=!a.value.name,s.value.whatsapp=!a.value.whatsapp,s.value.address=!a.value.address,s.value.message=!a.value.message,!a.value.name||!a.value.whatsapp||!a.value.address||!a.value.message){alert("Isi semua data!");return}const p=document.querySelector('meta[name="csrf_token"]').getAttribute("content");try{(await fetch("/api/contact",{method:"POST",headers:{"X-CSRF-TOKEN":p},body:JSON.stringify(a.value)}).then(r=>r.json())).success?n.value=!0:n.value=!1}catch{n.value=!1}};return(p,u)=>(o(),$(j,{props:t.props},{default:h(()=>[e("div",Ds,[Fs,n.value?(o(),l("div",Hs," Terimakasih telah menghubungi kami, kami akan segera merespon anda. ")):b("",!0),n.value==!1?(o(),l("div",Bs," Mohon maaf, saat ini sedang ada gangguan. Cobalah beberapa saat lagi ")):b("",!0),e("form",{onSubmit:le(g,["prevent"]),class:"space-y-4"},[e("div",null,[Rs,I(e("input",{type:"text",id:"name","onUpdate:modelValue":u[0]||(u[0]=r=>a.value.name=r),class:P({"input input-bordered w-full border-red-500":s.value.name,"input input-bordered w-full":!s.value.name})},null,2),[[C,a.value.name]]),s.value.name?(o(),l("p",Vs," Nama lengkap dibutuhkan. ")):b("",!0)]),e("div",null,[Us,I(e("input",{type:"tel",id:"whatsapp","onUpdate:modelValue":u[1]||(u[1]=r=>a.value.whatsapp=r),class:P({"input input-bordered w-full border-red-500":s.value.whatsapp,"input input-bordered w-full":!s.value.whatsapp})},null,2),[[C,a.value.whatsapp]]),s.value.whatsapp?(o(),l("p",qs," Nomor WhatsApp dibutuhkan. ")):b("",!0)]),e("div",null,[Ks,I(e("input",{type:"text",id:"address","onUpdate:modelValue":u[2]||(u[2]=r=>a.value.address=r),class:P({"input input-bordered w-full border-red-500":s.value.address,"input input-bordered w-full":!s.value.address})},null,2),[[C,a.value.address]]),s.value.address?(o(),l("p",Gs," Alamat dibutuhkan. ")):b("",!0)]),e("div",null,[Js,I(e("textarea",{id:"message","onUpdate:modelValue":u[3]||(u[3]=r=>a.value.message=r),class:P({"textarea textarea-bordered w-full border-red-500":s.value.message,"textarea textarea-bordered w-full":!s.value.message}),rows:"4"},`
                    `,2),[[C,a.value.message]]),s.value.message?(o(),l("p",Ws," Pesan dibutuhkan. ")):b("",!0)]),Xs],32)])]),_:1},8,["props"]))}},Qs=N(Ys,[["__scopeId","data-v-d60a440d"]]),Zs=Object.freeze(Object.defineProperty({__proto__:null,default:Qs},Symbol.toStringTag,{value:"Module"})),eo={id:"hero-carousel py-20"},to={class:"hero"},so={class:"hero-content flex-col lg:flex-row min-w-full space-x-10"},oo=["src"],ao={class:"text-2xl md:text-5xl font-bold hover:underline"},lo={class:"py-6"},no=["href"],ro=e("i",{class:"mdi mdi-whatsapp"},null,-1),io={__name:"justorange-default",props:{props:Object},setup(t){const s=y(t.props.products),n=L(()=>s.value.filter(u=>u.headline==!0)),g=[_e,X,ge,he],p=()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(u=>{const r=u.coords.latitude,i=u.coords.longitude,d=fetch("/api/update",{method:"POST",body:JSON.stringify({lat:r,lon:i})}).then(c=>c.json());console.log(d)},u=>{console.error("Error detecting location: ",u)})};return ne(()=>{p()}),(u,r)=>(o(),$(j,{props:t.props},{default:h(()=>[e("section",eo,[f(m(A),{modules:g,"slides-per-view":1,"centered-slides":!0,"space-between":30,"grab-cursor":!0,autoplay:{delay:3e3},loop:!0,pagination:{clickable:!0},scrollbar:{draggable:!0},navigation:!0,class:"mySwiper min-h-full md:min-h-[88vh] mt-5 md:mt-10"},{default:h(()=>[(o(!0),l(x,null,w(n.value,(i,d)=>(o(),$(m(z),{key:d},{default:h(()=>[e("div",to,[e("div",so,[e("img",{src:m(k)(i.main_image),class:"w-full md:max-w-[600px] rounded-lg",loading:"lazy"},null,8,oo),e("div",null,[f(m(S),{href:"/product/"+i.slug},{default:h(()=>[e("h1",ao,_(i.name),1)]),_:2},1032,["href"]),e("p",lo,_(m(ve)(i.description).substr(0,100))+"... ",1),e("a",{href:"/wa-checkout/"+i.id,target:"_blank","data-btn":"click",class:"btn btn-primary rounded-full"},[ro,v(" Pesan Sekarang! ")],8,no)])])])]),_:2},1024))),128))]),_:1})]),f(E,{products:s.value,categories:t.props.categories},null,8,["products","categories"]),f(te,{testimonials:t.props.testimonials},null,8,["testimonials"])]),_:1},8,["props"]))}},co=Object.freeze(Object.defineProperty({__proto__:null,default:io},Symbol.toStringTag,{value:"Module"}));window.axios=fe;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";de({resolve:t=>Object.assign({"./Pages/Layout.vue":vt,"./Pages/Product/category.vue":xt,"./Pages/Product/detail.vue":hs,"./Pages/Product/index.vue":bs,"./Pages/Section/Footer.vue":Qe,"./Pages/Section/HeadInfo.vue":bt,"./Pages/Section/Navbar.vue":Ie,"./Pages/Section/Product.vue":Jt,"./Pages/Section/RenderMarkdown.vue":ee,"./Pages/Section/Testimonial.vue":Ls,"./Pages/about.vue":Ns,"./Pages/contact.vue":Zs,"./Pages/justorange-default.vue":co})[`./Pages/${t}.vue`],setup({el:t,App:a,props:s,plugin:n}){re({render:()=>ie(a,s)}).use(n).mount(t)}});