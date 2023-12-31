import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import LossPage from './LossPage';
import WinPage from './WinPage';

function Cards() {
    const [cards, setCards] = useState([
        {key:'1', img:'/images/neymar.jpg', playerName:'Neymar', status:''},
        {key:'2', img:'/images/mbappe.jpg', playerName:'Mbappe', stats:''},
        {key:'3', img:'/images/messi.jpg', playerName:'Messi', status:''},
        {key:'4', img:'/images/ronaldo.jpg', playerName:'Ronaldo', status:''},
        {key:'5', img:'/images/salah.jpg', playerName:'Salah', status:''},
        {key:'6', img:'/images/deBruyne.jpg', playerName:'De Bruyne', status:''},
        {key:'7', img:'/images/haaland.jpg', playerName:'Haaland', status:''},
        {key:'8', img:'/images/pulisic.jpg', playerName:'Pulisic', status:''}
    ]);

    const [selectedNames, setSelectedNames] = useState([]);
    const [topScore, setTopScore] = useState('0');
    const [gameCondition, setGameCondition] = useState('playing')

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
                handleWin(playerName)
            } else {
                handleNextRound(playerName)
            }
        }
    };

    const handleNextRound = (playerName) => {
        let newSelected = [...selectedNames, playerName];
        setSelectedNames(newSelected);
    }

    const handleWin = (playerName) => {
        setGameCondition('win')
        let newSelected = [...selectedNames, playerName];
        setSelectedNames(newSelected);
        setTopScore(cards.length);
    }

    const handleLoss = () => {
        setGameCondition('loss')
        if (selectedNames.length > topScore) {
            setTopScore(selectedNames.length);
        }
    }

    const restartClick = () => {
        setGameCondition('playing');
        setSelectedNames('')
    }

    return (
        <div className='body'>
            <div className='scores'>
                <Link to="/"className="arrow">
                    <img src="/images/arrow.png"/>
                </Link>
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
                ) : (
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
                )}
            </div>
        </div>
    )
}

export default Cards;