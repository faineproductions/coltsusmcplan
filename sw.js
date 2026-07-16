const CACHE='marine-prep-pro-v6-7-2';
const CORE=['./','./index.html','./app.js?v=672','./manifest.json?v=672','./icon.svg?v=672'];

self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
 event.waitUntil(
  caches.keys()
   .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
   .then(()=>self.clients.claim())
 );
});

self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin){
  event.respondWith(fetch(event.request));
  return;
 }

 const networkFirst=
  event.request.mode==='navigate' ||
  url.pathname.endsWith('/app.js') ||
  url.pathname.endsWith('/index.html');

 if(networkFirst){
  event.respondWith(
   fetch(event.request,{cache:'no-store'})
    .then(response=>{
     if(response.ok)caches.open(CACHE).then(cache=>cache.put(event.request,response.clone()));
     return response;
    })
    .catch(()=>caches.match(event.request).then(hit=>hit||caches.match('./index.html')))
  );
  return;
 }

 event.respondWith(
  caches.match(event.request).then(hit=>
   hit||fetch(event.request).then(response=>{
    if(response.ok)caches.open(CACHE).then(cache=>cache.put(event.request,response.clone()));
    return response;
   })
  )
 );
});