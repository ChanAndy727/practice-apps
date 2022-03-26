const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
const wordSchema = new mongoose.Schema({
  value: {
    type: String,
    unique: true
  },
  define: String
});

const Word = mongoose.model('Word', wordSchema);

let save = (word) => {
  var currWord = new Word({
    value: word[0].word,
    define: word[0].meanings[0].definitions[0].definition
  })
  currWord.save();
}

let exists = (word, cb) => {
  Word.findOne({value: word}, (err, data)=>{

    console.log('data', data);
    console.log(err);
    if(err) {
       cb(err, null);
    } else {

      cb(null, data);
    }
  })
}


let getWords = (cb) => {
  Word.find({}, (err, data)=>{
    if(err){
      cb(err, null);
    } else {
      cb(null, data);
    }
  })
}
// 3. Export the models
module.exports = {save, getWords, exists};
// 4. Import the models into any modules that need them
