const express = require('express');
const hbs = require('hbs')
const path = require('path')
const app = express();

const viewpath = path.join(__dirname , "templates/views")
const partialpath = path.join(__dirname , "templates/partials")
console.log(viewpath)
console.log(partialpath)


app.use(express.static('public'));

app.set("view engine", "hbs")
app.set("views", viewpath);
hbs.registerPartials(partialpath);

// app.set("view engine", "hbs");
// app.set("views", viewPath);/admin/message
// hbs.registerPartials(partialPath);

app.get('/', (req, res)=>{
    res.render("applications");
})

// app.get('/admin', (req, res)=>{
//     res.render("applications");
// })

app.get('/messages', (req, res)=>{
  res.render("messages");
})


app.get('/upload', (req, res)=>{
    res.render("upload");
  })

  app.get('/update', (req, res)=>{
    res.render("update");
  })

  app.get('/logout', (req, res)=>{
    res.render("logout");
  })


// Start the Express application
app.listen(4000, () => {
  console.log(`127.0.0.1:3000 listening on port 4000`);
});