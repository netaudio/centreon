"use strict";var precacheConfig=[["/home/eskibinska/Bureau/centreon/centreon/www/index.html","03c9951022420b2a84ce1b7f5a2a60c4"],["/home/eskibinska/Bureau/centreon/centreon/www/static/css/main.c3abb132.chunk.css","d9e5ea98b689a43795b9d9a6f0c6701d"],["/home/eskibinska/Bureau/centreon/centreon/www/static/css/vendors.00ca7508.chunk.css","3e81fee5b9326a6d96fe4db3dbdffaca"],["/home/eskibinska/Bureau/centreon/centreon/www/static/js/main.f29eb7e0.chunk.js","f372bc8c3233ba7f7b6907517ecc9b24"],["/home/eskibinska/Bureau/centreon/centreon/www/static/js/runtime~main.b4219978.js","96a8133986daa100a4278d4d30730935"],["/home/eskibinska/Bureau/centreon/centreon/www/static/js/vendors.ade74e7b.chunk.js","9cd66a8a09f532ddc22bd5fd924b8ba1"],["/home/eskibinska/Bureau/centreon/centreon/www/static/media/icomoon.2f6e8e51.woff","2f6e8e51dff6e5d2f5fe9ad137877126"],["/home/eskibinska/Bureau/centreon/centreon/www/static/media/icomoon.43838ab6.eot","43838ab6d9c513d4274a7429c70b17b0"],["/home/eskibinska/Bureau/centreon/centreon/www/static/media/icomoon.a8034a1d.ttf","a8034a1d743bbc117c917f8a70c0852c"],["/home/eskibinska/Bureau/centreon/centreon/www/static/media/icomoon.c79780a8.svg","c79780a82d389db06da76574c0c81b09"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),a.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],r=new URL(n,self.location),a=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));0,n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});