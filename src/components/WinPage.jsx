function WinPage({handleClick}) {
    return (
        <div className="winScreen">
            <div className="resultMessage">
                You Won!
            </div>
            <div className="restart" onClick={() => handleClick()}>
                Restart
            </div>
        </div>
    )
}

export default WinPage;