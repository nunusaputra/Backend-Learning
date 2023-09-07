const { MongoClient } = require('mongodb')

const uri = 'mongodb://127.0.0.1:27017'
const dbName = 'test_db'

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

client.connect((error, client) => {
  if (error) {
    return console.log('Connection Failed!');
  }

  const db = client.db(dbName)

  db.collection('test').insertOne({
    nama: 'Wisnu Saputra',
    email: 'nunusaputra17@gmail.com'
  }, (error, result) => {
    if (error) {
      return console.log('Data gagal ditambahkan');
    }
    console.log(result);
  })
})