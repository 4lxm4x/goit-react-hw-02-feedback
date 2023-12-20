import './FeedbackOptions.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {  
    
    
 
    return (
        <div className='feedbackButtons'>
            {options.map(option => {
                return (<button id={option.toLowerCase()} key={option} className="optionButton" name={option.toLowerCase()} onClick={onLeaveFeedback}>{ option}</button>)
    })}

        </div>)

}

export default FeedbackOptions;