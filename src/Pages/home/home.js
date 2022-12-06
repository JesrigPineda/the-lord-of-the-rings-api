import { useEffect, useState, React } from 'react';
import { getQuote,getCharacter } from '../../api/api';
import "./home.css"

const Home = () => {

    const [quote, setQuote] = useState()
    const [character, setCharacter] = useState();
    const [getAnotherQuote, setGetAnotherQuote] = useState(false);

    const changeStatus = () => {

        if(!getAnotherQuote){
            setGetAnotherQuote(true)
        }else{
            setGetAnotherQuote(false)
        }
    }

    useEffect( () => {

        getQuote().then(async (response) => {
            const quotes =  response.data;
            const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];

           await getCharacter(quote.character).then(async (response) => {
                const characters = response.data;
                const character = characters.docs[0];
                setQuote(quote.dialog)
                setCharacter(character.name)
            })
        })
      }, [getAnotherQuote]);


    return (
        <header id="home" className="main-header">
        <div className="background-overlay text-white py-5">
            <div className="container h-100">
                <div className="text-center justify-content-center align-items-center d-flex h-100">
                <div>
                    <h1 className="font-hero-h1"> {quote}</h1>
                    <h3 className="font-hero-h3">{character}</h3>
                    <button type="button" onClick={() => changeStatus()} className="btn btn-warning">Generate another quote</button>                 
                </div>
                </div>
                </div>
            </div>
        </header>
    );
}

export default Home;
