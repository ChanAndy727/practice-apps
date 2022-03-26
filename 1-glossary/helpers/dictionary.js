const axios = require('axios');

let getWordDefinition = (word) => {
  return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => {
      return res.data;
    })
    .catch((err)=>{
      return err;
    })
}
module.exports = {getWordDefinition};