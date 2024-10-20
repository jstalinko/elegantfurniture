function x(n,t,u,h){const i=Number(n[t].meta.id+1).toString();let p="";return typeof h.docId=="string"&&(p=`-${h.docId}-`),p+i}function g(n,t){let u=Number(n[t].meta.id+1).toString();return n[t].meta.subId>0&&(u+=`:${n[t].meta.subId}`),`[${u}]`}function S(n,t,u,h,i){const p=i.rules.footnote_anchor_name(n,t,u,h,i),I=i.rules.footnote_caption(n,t,u,h,i);let o=p;return n[t].meta.subId>0&&(o+=`:${n[t].meta.subId}`),`<sup class="footnote-ref"><a href="#fn${p}" id="fnref${o}">${I}</a></sup>`}function w(n,t,u){return(u.xhtmlOut?`<hr class="footnotes-sep" />
`:`<hr class="footnotes-sep">
`)+`<section class="footnotes">
<ol class="footnotes-list">
`}function M(){return`</ol>
</section>
`}function y(n,t,u,h,i){let p=i.rules.footnote_anchor_name(n,t,u,h,i);return n[t].meta.subId>0&&(p+=`:${n[t].meta.subId}`),`<li id="fn${p}" class="footnote-item">`}function E(){return`</li>
`}function B(n,t,u,h,i){let p=i.rules.footnote_anchor_name(n,t,u,h,i);return n[t].meta.subId>0&&(p+=`:${n[t].meta.subId}`),` <a href="#fnref${p}" class="footnote-backref">↩︎</a>`}function D(n){const t=n.helpers.parseLinkLabel,u=n.utils.isSpace;n.renderer.rules.footnote_ref=S,n.renderer.rules.footnote_block_open=w,n.renderer.rules.footnote_block_close=M,n.renderer.rules.footnote_open=y,n.renderer.rules.footnote_close=E,n.renderer.rules.footnote_anchor=B,n.renderer.rules.footnote_caption=g,n.renderer.rules.footnote_anchor_name=x;function h(o,r,_,s){const f=o.bMarks[r]+o.tShift[r],c=o.eMarks[r];if(f+4>c||o.src.charCodeAt(f)!==91||o.src.charCodeAt(f+1)!==94)return!1;let e;for(e=f+2;e<c;e++){if(o.src.charCodeAt(e)===32)return!1;if(o.src.charCodeAt(e)===93)break}if(e===f+2||e+1>=c||o.src.charCodeAt(++e)!==58)return!1;if(s)return!0;e++,o.env.footnotes||(o.env.footnotes={}),o.env.footnotes.refs||(o.env.footnotes.refs={});const l=o.src.slice(f+2,e-2);o.env.footnotes.refs[`:${l}`]=-1;const k=new o.Token("footnote_reference_open","",1);k.meta={label:l},k.level=o.level++,o.tokens.push(k);const C=o.bMarks[r],a=o.tShift[r],$=o.sCount[r],b=o.parentType,d=e,v=o.sCount[r]+e-(o.bMarks[r]+o.tShift[r]);let m=v;for(;e<c;){const T=o.src.charCodeAt(e);if(u(T))T===9?m+=4-m%4:m++;else break;e++}o.tShift[r]=e-d,o.sCount[r]=m-v,o.bMarks[r]=d,o.blkIndent+=4,o.parentType="footnote",o.sCount[r]<o.blkIndent&&(o.sCount[r]+=o.blkIndent),o.md.block.tokenize(o,r,_,!0),o.parentType=b,o.blkIndent-=4,o.tShift[r]=a,o.sCount[r]=$,o.bMarks[r]=C;const A=new o.Token("footnote_reference_close","",-1);return A.level=--o.level,o.tokens.push(A),!0}function i(o,r){const _=o.posMax,s=o.pos;if(s+2>=_||o.src.charCodeAt(s)!==94||o.src.charCodeAt(s+1)!==91)return!1;const f=s+2,c=t(o,s+1);if(c<0)return!1;if(!r){o.env.footnotes||(o.env.footnotes={}),o.env.footnotes.list||(o.env.footnotes.list=[]);const e=o.env.footnotes.list.length,l=[];o.md.inline.parse(o.src.slice(f,c),o.md,o.env,l);const k=o.push("footnote_ref","",0);k.meta={id:e},o.env.footnotes.list[e]={content:o.src.slice(f,c),tokens:l}}return o.pos=c+1,o.posMax=_,!0}function p(o,r){const _=o.posMax,s=o.pos;if(s+3>_||!o.env.footnotes||!o.env.footnotes.refs||o.src.charCodeAt(s)!==91||o.src.charCodeAt(s+1)!==94)return!1;let f;for(f=s+2;f<_;f++){if(o.src.charCodeAt(f)===32||o.src.charCodeAt(f)===10)return!1;if(o.src.charCodeAt(f)===93)break}if(f===s+2||f>=_)return!1;f++;const c=o.src.slice(s+2,f-1);if(typeof o.env.footnotes.refs[`:${c}`]>"u")return!1;if(!r){o.env.footnotes.list||(o.env.footnotes.list=[]);let e;o.env.footnotes.refs[`:${c}`]<0?(e=o.env.footnotes.list.length,o.env.footnotes.list[e]={label:c,count:0},o.env.footnotes.refs[`:${c}`]=e):e=o.env.footnotes.refs[`:${c}`];const l=o.env.footnotes.list[e].count;o.env.footnotes.list[e].count++;const k=o.push("footnote_ref","",0);k.meta={id:e,subId:l,label:c}}return o.pos=f,o.posMax=_,!0}function I(o){let r,_,s,f=!1;const c={};if(!o.env.footnotes||(o.tokens=o.tokens.filter(function(l){return l.type==="footnote_reference_open"?(f=!0,_=[],s=l.meta.label,!1):l.type==="footnote_reference_close"?(f=!1,c[":"+s]=_,!1):(f&&_.push(l),!f)}),!o.env.footnotes.list))return;const e=o.env.footnotes.list;o.tokens.push(new o.Token("footnote_block_open","",1));for(let l=0,k=e.length;l<k;l++){const C=new o.Token("footnote_open","",1);if(C.meta={id:l,label:e[l].label},o.tokens.push(C),e[l].tokens){r=[];const b=new o.Token("paragraph_open","p",1);b.block=!0,r.push(b);const d=new o.Token("inline","",0);d.children=e[l].tokens,d.content=e[l].content,r.push(d);const v=new o.Token("paragraph_close","p",-1);v.block=!0,r.push(v)}else e[l].label&&(r=c[`:${e[l].label}`]);r&&(o.tokens=o.tokens.concat(r));let a;o.tokens[o.tokens.length-1].type==="paragraph_close"?a=o.tokens.pop():a=null;const $=e[l].count>0?e[l].count:1;for(let b=0;b<$;b++){const d=new o.Token("footnote_anchor","",0);d.meta={id:l,subId:b,label:e[l].label},o.tokens.push(d)}a&&o.tokens.push(a),o.tokens.push(new o.Token("footnote_close","",-1))}o.tokens.push(new o.Token("footnote_block_close","",-1))}n.block.ruler.before("reference","footnote_def",h,{alt:["paragraph","reference"]}),n.inline.ruler.after("image","footnote_inline",i),n.inline.ruler.after("footnote_inline","footnote_ref",p),n.core.ruler.after("inline","footnote_tail",I)}export{D as f};
