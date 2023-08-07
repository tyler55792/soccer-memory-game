function LossPage({handleClick}) {
    return (
        <div className="lossScreen">
            <div className="resultMessage">
                You Lost!
            </div>
            <div className="restart" onClick={() => handleClick()}>
                Restart
            </div>
        </div>
    )
}

export default LossPage;