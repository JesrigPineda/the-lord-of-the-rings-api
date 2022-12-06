import axios from 'axios';

const getQuote = async () =>{
    return await axios.get(
        `https://the-one-api.dev/v2/quote`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_KEY}`
          },
        }
    ).catch(function (error) {
        console.log('Error',error);
    });
  }

  const getCharacter = async (idCharacter) =>{
    return await axios.get(
        `https://the-one-api.dev/v2/character?_id=${idCharacter}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_KEY}`
          },
        }
    ).catch(function (error) {
        console.log('Error',error);
    });
  }

  export {getQuote,getCharacter}