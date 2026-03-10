const http = require('http');
const server= http.createServer((req,res)=>
res.end('Le server tourne sur le port 3000 !')
)
server.listen(process.env.PORT || 3001)