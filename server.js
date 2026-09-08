const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const D = 'D:\\Al Razi';
const M = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.gif':'image/gif','.svg':'image/svg+xml','.pdf':'application/pdf','.json':'application/json','.webp':'image/webp','.mp4':'video/mp4','.ico':'image/x-icon'};
http.createServer((q,r)=>{
  let u = url.parse(q.url).pathname;
  u = decodeURIComponent(u);
  let f = path.join(D, u==='/'?'index.html':u);
  let e = path.extname(f).toLowerCase();
  fs.readFile(f,(err,d)=>{
    if(err){r.writeHead(404);r.end('Not Found: '+f);return;}
    r.writeHead(200,{'Content-Type':M[e]||'application/octet-stream'});
    r.end(d);
  });
}).listen(8080,'0.0.0.0',()=>console.log('http://localhost:8080'));