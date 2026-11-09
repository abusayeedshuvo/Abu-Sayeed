const toggle=document.getElementById('menu-toggle');
const navigation=document.getElementById('navigation');
toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));navigation.classList.toggle('open',!expanded);});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');navigation.classList.remove('open');}));
const search=document.getElementById('pub-search');
const publications=[...document.querySelectorAll('.publication')];
const publicationGroups=[...document.querySelectorAll('.publication-group')];
const topicButtons=[...document.querySelectorAll('[data-topic-filter]')];
const selectedTopics=new Set();
function filterPublications(){
  const term=search.value.trim().toLowerCase();let count=0;
  publications.forEach(item=>{const visible=item.textContent.toLowerCase().includes(term)&&(!selectedTopics.size||selectedTopics.has(item.dataset.topic));item.hidden=!visible;if(visible)count++;});
  publicationGroups.forEach(group=>{const visible=[...group.querySelectorAll('.publication')].filter(item=>!item.hidden).length;group.hidden=false;group.querySelector('.group-count').textContent=visible;});
  document.getElementById('pub-count').textContent=count+' of '+publications.length+' publications';
  document.getElementById('no-results').hidden=count!==0;
}
topicButtons.forEach(button=>button.addEventListener('click',()=>{
  const topic=button.dataset.topicFilter;
  if(topic==='all')selectedTopics.clear();else if(selectedTopics.has(topic))selectedTopics.delete(topic);else selectedTopics.add(topic);
  topicButtons.forEach(item=>item.setAttribute('aria-pressed',String(item.dataset.topicFilter==='all'?!selectedTopics.size:selectedTopics.has(item.dataset.topicFilter))));
  filterPublications();
}));
search.addEventListener('input',filterPublications);
publicationGroups.forEach(group=>group.addEventListener('toggle',()=>{group.querySelector('.group-action').textContent=group.open?'Hide publications':'Show publications';}));
// Keep the topic toolbar below the responsive sticky site header.
const siteHeader=document.querySelector('header');
function updateHeaderOffset(){document.documentElement.style.setProperty('--site-header-height',siteHeader.getBoundingClientRect().height+'px');}
updateHeaderOffset();
if('ResizeObserver' in window)new ResizeObserver(updateHeaderOffset).observe(siteHeader);
window.addEventListener('resize',updateHeaderOffset);

// Accessible photo viewer with keyboard, touch and mouse support.
const galleryButtons=[...document.querySelectorAll('.gallery-open')];
const galleryViewer=document.getElementById('gallery-viewer');
let galleryIndex=0;
function showGalleryPhoto(index){galleryIndex=(index+galleryButtons.length)%galleryButtons.length;const button=galleryButtons[galleryIndex];document.getElementById('gallery-image').src=button.dataset.photo;document.getElementById('gallery-image').alt=button.querySelector('img').alt;document.getElementById('gallery-title').textContent=button.dataset.title;document.getElementById('gallery-caption').textContent=button.dataset.caption;document.getElementById('gallery-position').textContent=(galleryIndex+1)+' / '+galleryButtons.length;}
galleryButtons.forEach((button,index)=>button.addEventListener('click',()=>{showGalleryPhoto(index);galleryViewer.showModal();}));
galleryViewer.querySelector('.gallery-close').addEventListener('click',()=>galleryViewer.close());
document.getElementById('gallery-prev').addEventListener('click',()=>showGalleryPhoto(galleryIndex-1));
document.getElementById('gallery-next').addEventListener('click',()=>showGalleryPhoto(galleryIndex+1));
galleryViewer.addEventListener('click',event=>{if(event.target===galleryViewer){const rect=galleryViewer.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)galleryViewer.close();}});
galleryViewer.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();showGalleryPhoto(galleryIndex+1);}if(event.key==='ArrowLeft'){event.preventDefault();showGalleryPhoto(galleryIndex-1);}});

// Mark the section at the reading position below the sticky header.
const sectionLinks=[...navigation.querySelectorAll('a[href^="#"]')];
const trackedSections=sectionLinks.map(link=>({link,section:document.getElementById(link.hash.slice(1))})).filter(item=>item.section);
let sectionFramePending=false;
function updateActiveSection(){
  sectionFramePending=false;
  if(!trackedSections.length)return;
  const readingLine=siteHeader.getBoundingClientRect().bottom+32;
  let active=trackedSections[0];
  for(const item of trackedSections){if(item.section.getBoundingClientRect().top<=readingLine)active=item;else break;}
  if(window.scrollY>0&&Math.ceil(window.scrollY+window.innerHeight)>=document.documentElement.scrollHeight-2)active=trackedSections[trackedSections.length-1];
  trackedSections.forEach(({link})=>{if(link===active.link)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
}
function scheduleActiveSection(){if(!sectionFramePending){sectionFramePending=true;requestAnimationFrame(updateActiveSection);}}
window.addEventListener('scroll',scheduleActiveSection,{passive:true});
window.addEventListener('resize',scheduleActiveSection);
window.addEventListener('hashchange',scheduleActiveSection);
window.addEventListener('load',scheduleActiveSection);
if('ResizeObserver' in window){const sectionObserver=new ResizeObserver(scheduleActiveSection);sectionObserver.observe(siteHeader);trackedSections.forEach(({section})=>sectionObserver.observe(section));}
updateActiveSection();
