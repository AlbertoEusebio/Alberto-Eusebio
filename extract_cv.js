const fs = require('fs');
const zlib = require('zlib');
const buf = fs.readFileSync('Profile-1.pdf');
function extractStringsFromContent(s){const out=[];const re=/\((?:\\.|[^\\)])*\)\s*(?:Tj|TJ|'|")/g;let m;while((m=re.exec(s))){let t=m[0].replace(/\s*(Tj|TJ|'|")$/,'');if(t.startsWith('(')&&t.endsWith(')')) t=t.slice(1,-1);t=t.replace(/\\\(/g,'(').replace(/\\\)/g,')').replace(/\\n/g,'\n').replace(/\\r/g,'\r').replace(/\\t/g,'\t').replace(/\\\\/g,'\\');out.push(t);}return out;}
let i=0;let recovered=[];while(true){const s=buf.indexOf(Buffer.from('stream'),i);if(s===-1) break;let start=s+6;if(buf[start]===0x0d&&buf[start+1]===0x0a) start+=2;else if(buf[start]===0x0a) start+=1;const e=buf.indexOf(Buffer.from('endstream'),start);if(e===-1) break;const chunk=buf.slice(start,e);try{const dec=zlib.inflateSync(chunk);const txt=dec.toString('latin1');const strs=extractStringsFromContent(txt);if(strs.length) recovered.push(...strs);}catch{}i=e+9;}
const latin=buf.toString('latin1');const uris=[...latin.matchAll(/\((https?:[^)]+|mailto:[^)]+)\)/g)].map(m=>m[1]);if(uris.length) recovered.push(...uris);
const cleaned=recovered.map(x=>x.replace(/\s+/g,' ').trim()).filter(Boolean);
fs.writeFileSync('cv_extracted.txt', cleaned.join('\n'), 'utf8');
console.log('lines', cleaned.length);
