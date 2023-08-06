function card({img, playerName, handleClick}) {
    return (
        <div className="card" onClick={() => handleClick(playerName)}>
            <img src={img} />
            <p>{playerName}</p>
        </div>
    )
}

export default card;