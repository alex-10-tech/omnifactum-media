const ID=window.__ID; const sl=ms=>new Promise(r=>setTimeout(r,ms)); const M=await fetch('https://raw.githubusercontent.com/alex-10-tech/omnifactum-media/main/wk2/manifest.json').then(r=>r.json()); const it=M.find(x=>x.id===ID);
let inp; for(let i=0;i<25&&!inp;i++){inp=document.querySelector('ytcp-uploads-file-picker input[type=file]'); if(!inp) await sl(700)} if(!inp) throw new Error('no input');
const b=await fetch(it.url).then(r=>r.blob()); const f=new File([b],it.name,{type:'video/mp4'}); const dt=new DataTransfer(); dt.items.add(f); inp.files=dt.files; inp.dispatchEvent(new Event('change',{bubbles:true}));
let tb; for(let i=0;i<30&&!tb;i++){tb=document.querySelector('ytcp-uploads-dialog #title-textarea #textbox'); if(!tb) await sl(700)} await sl(2500);
const setText=(el,txt)=>{el.focus(); document.execCommand('selectAll'); document.execCommand('insertText',false,txt)};
setText(tb,it.title); await sl(400); setText(document.querySelector('ytcp-uploads-dialog #description-textarea #textbox'),it.desc); await sl(400);
document.querySelector('ytcp-uploads-dialog tp-yt-paper-radio-button[name=VIDEO_MADE_FOR_KIDS_NOT_MFK]').click(); await sl(400);
document.querySelector('ytcp-uploads-dialog #toggle-button').click(); await sl(1200); const alt=document.querySelector('ytcp-uploads-dialog [name=VIDEO_HAS_ALTERED_CONTENT_YES]'); alt&&alt.click(); await sl(400);
for(let i=0;i<3;i++){document.querySelector('ytcp-uploads-dialog #next-button').click(); await sl(1800)}
document.querySelector('ytcp-uploads-dialog #second-container-expand-button').click(); await sl(1500);
document.querySelector('ytcp-uploads-dialog #datepicker-trigger').click(); await sl(1200);
const di=[...document.querySelectorAll('ytcp-date-picker input')].find(e=>e.offsetParent); di.focus(); di.select();
'ready '+it.date+' '+it.time+' | '+it.title.slice(0,40)
