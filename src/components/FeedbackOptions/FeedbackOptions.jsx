const FeedbackOptions = ({onLeaveFeedback}) => {

    return (
        <>
            <button className="optionButton"  name='good' onClick={onLeaveFeedback}>Good</button>
            <button className="optionButton" name='neutral' onClick={onLeaveFeedback}>Neutral</button>
            <button className="optionButton" name='bad' onClick={onLeaveFeedback}>Bad</button>
        </>)

}

export default FeedbackOptions;