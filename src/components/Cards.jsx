import { useState, useEffect } from 'react'
import Card from './Card'
import LossPage from './LossPage';
import WinPage from './WinPage';

// TODO
// if reach 8 then say game over.. could add more players at this point
// add start page w/ difficuilty
// add win and loss animation


function Cards() {
    const [cards, setCards] = useState([
        {key:'1', img:'./../../public/images/neymar.jpg', playerName:'Neymar', status:''},
        {key:'2', img:'./../../public/images/mbappe.jpg', playerName:'Mbappe', stats:''},
        {key:'3', img:'./../../public/images/messi.jpg', playerName:'Messi', status:''},
        {key:'4', img:'./../../public/images/ronaldo.jpg', playerName:'Ronaldo', status:''},
        {key:'5', img:'./../../public/images/salah.jpg', playerName:'Salah', status:''},
        {key:'6', img:'./../../public/images/deBruyne.jpg', playerName:'De Bruyne', status:''},
        {key:'7', img:'./../../public/images/haaland.jpg', playerName:'Haaland', status:''},
        {key:'8', img:'./../../public/images/pulisic.jpg', playerName:'Pulisic', status:''}
    ]);

    const [selectedNames, setSelectedNames] = useState([]);
    const [topScore, setTopScore] = useState('0');
    const [gameCondition, setGameCondition] = useState('loss')

    useEffect(() => {
        setCards(shuffle(cards));
    }, [selectedNames, gameCondition]);

    const shuffle = (cards) => {
        for (let i = cards.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]]
        }
        return cards;
    }

    const handleClick = (playerName) => {
        if (selectedNames.includes(playerName)) {
            handleLoss()
        } else {
            if (selectedNames.length >= (cards.length - 1)) {
                handleWin()
            } else {
                handleNextRound(playerName)
            }
        }
    };

    const handleNextRound = (playerName) => {
        let newSelected = [...selectedNames, playerName];
        setSelectedNames(newSelected);
    }

    const handleWin = () => {
        setGameCondition('win')
        setTopScore(cards.length);
        setSelectedNames('');
    }

    const handleLoss = () => {
        setGameCondition('loss')
        setSelectedNames('')
        if (selectedNames.length > topScore) {
            setTopScore(selectedNames.length);
        }
    }

    const restartClick = () => {
        setGameCondition('playing');
    }

    return (
        <div className='body'>
            <div className='scores'>
                <div className='currentScore'>
                    Current Score: {selectedNames.length}
                </div>
                <div className='topScore'>
                    Best Score: {topScore}
                </div>
            </div>
            <div>
                {gameCondition === 'loss' ? (
                    <LossPage handleClick={restartClick}/>
                ) : gameCondition === 'win' ? (
                    <WinPage handleClick={restartClick}/>
                ) : ("")}
            </div>
            <div className='cards'>
                {cards.map((card) => {
                    return <Card 
                        key={card.key} 
                        img={card.img} 
                        playerName={card.playerName} 
                        handleClick={handleClick}
                        />
                })}
            </div>
        </div>
    )
}

export default Cards;