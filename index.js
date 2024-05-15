const http = require("http");
const fs = require("fs");
const args = require("minimist")(process.argv.slice(2));


let registerContent = "";
let projectContent = "";

fs.readFile("registration.html", (err, home) => {
  if (err) {
    throw err;
  }
  registerContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      default:
        response.write(registerContent);
        response.end();
        break;
    }
  })
  .listen(args.port,()=>{console.log("Listening on")});
