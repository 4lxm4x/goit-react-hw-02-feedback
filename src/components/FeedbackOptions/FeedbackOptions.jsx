const FeedbackOptions = ({options, onLeaveFeedback}) => {  
    
    
 
    return (
        <>
            {options.map(option => {
                return (<button key={option} className="optionButton" name={option.toLowerCase()} onClick={onLeaveFeedback}>{ option}</button>)
    })}

        </>)

}

export default FeedbackOptions;