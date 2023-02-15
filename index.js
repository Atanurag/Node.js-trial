
const Exp = require('express')
const mysql = require('mysql')

const hbs=require("hbs");

const app = Exp();


/*
app.set('view engine','hbs')
app.use(Exp.urlencoded({extended:false}));
const db = mysql.createConnection({
  host: 'sql9.freesqldatabase.com',
  database: 'sql9596335',
  user: 'sql9596335',
  password: 'WUKY1nZShQ',
})

db.connect((err) => {
  if (err) {
    console.log("error")
  }
  console.log('connected')
})


app.get('/table', (req, res) => {
  let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),body VARCHAR(255) ,PRIMARY KEY (id))';
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err.message)
    }
    console.log(result);
    res.send("table created")
  })
  // res.send(7)
})




  app.get('/dele/:id',(req,res)=>{
   console.log(req.params.id)
        let sql=`DELETE  FROM posts WHERE id = ${req.params.id}`;
        db.query(sql,(err,resu)=>{
  if(err){
    console.log(err.message)
  }
          res.redirect("/")
        })
      })  


app.get('/insertpost', (req, res) => {
  let sql = "INSERT INTO posts (title,body) VALUES ('cyber law','nessie colaco')";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err.mesage)
    }
    console.log(result)
    res.send("inserted")
  })
})


app.post('/sendData',(req,res)=>{
   let sql=`INSERT INTO posts (title,body) VALUES ('${req.body.title}','${req.body.body}')`;
  db.query(sql,(err,resu)=>{
    if(err){
      console.log("posterror",err.message)
    }
    res.redirect("/datashow")
  })
  //console.log(req.body.title,req.body.body)
})




app.get('/datashow',(req,res)=>{
  
   let sql="SELECT * FROM posts";
  db.query(sql,(err,resu)=>{
                if(err){
                  console.log("select",err.message)
                }
    
    res.render("data",{d:resu})
})
})

app.get('/',(req,res)=>{
  let sql="SELECT * FROM posts";
  db.query(sql,(err,resu)=>{
                if(err){
                  console.log("select",err.message)
                }
    
    res.render("data",{d:resu})
})})

app.get('/fetch/:id',(req,res)=>{
  let sql=`SELECT * FROM posts WHERE id = ${req.params.id}`;
      db.query(sql,(err,resu)=>{
        if(err){
    console.log("fetchid ",err.message)
        }
        res.send(resu)
      })})

  
 
app.listen(8080, () => {
  console.log('Server up and running!');
});
 */
/*killall 9 node
pkill node
npm start

Host: sql9.freesqldatabase.com
Database name: sql9596335
Database user: sql9596335
Database password: WUKY1nZShQ
Port number: 3306

*/

/*const insert=async ()=>{
  const db=await mysql.createConnection({
  host: 'sql9.freesqldatabase.com',
database:'sql9596335',
user:'sql9596335',
password: 'WUKY1nZShQ',

})
try{
await db.query("INSERT INTO firstdatabasetable (name,team) VALUES ('lebron','myteam')")
  console.log('inserted')
}
  catch(e){
    console.log(e)
  }
}
insert()*/

   
//freesqldatabase
//mysql:
//email:dadehop506@chotunai.com,pass:anurag1