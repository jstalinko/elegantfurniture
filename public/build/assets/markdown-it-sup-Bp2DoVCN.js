const f=/\\([ \\!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-])/g;function l(o,u){const n=o.posMax,p=o.pos;if(o.src.charCodeAt(p)!==94||u||p+2>=n)return!1;o.pos=p+1;let s=!1;for(;o.pos<n;){if(o.src.charCodeAt(o.pos)===94){s=!0;break}o.md.inline.skipToken(o)}if(!s||p+1===o.pos)return o.pos=p,!1;const r=o.src.slice(p+1,o.pos);if(r.match(/(^|[^\\])(\\\\)*\s/))return o.pos=p,!1;o.posMax=o.pos,o.pos=p+1;const c=o.push("sup_open","sup",1);c.markup="^";const i=o.push("text","",0);i.content=r.replace(f,"$1");const e=o.push("sup_close","sup",-1);return e.markup="^",o.pos=o.posMax+1,o.posMax=n,!0}function x(o){o.inline.ruler.after("emphasis","sup",l)}export{x as s};
