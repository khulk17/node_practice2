const http= require('http')
// setting up the server
const server = http.createServer((request,Response)=>{
    if(request.url==='/')
    {
        Response.end('Welcome to the Home page')
        return
    }
    if (request.url==='/about')
    {
        Response.end("Here is our short history")
        return  
    }

    // error page
    Response.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page</p>
    <a href='/'>Back Home</a>
    `)
})

// port the server will bw listing to 
server.listen(5000)
