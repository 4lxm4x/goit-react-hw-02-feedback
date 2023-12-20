const Statistics = (props) => {
    console.log("🚀 ~ props:", props)
    console.log("🚀 ~ props.good:", props.good)
    return (<>
    <div className="stats">Good: {props.good}</div>
          <div className="stats">Neutral: {props.neutral}</div>
          <div className="stats">Bad: {props.bad}</div>
          <div className="stats">Total: {props.total}</div>
        <div className="stats">Positive feedback: {props.positivePercentage}%</div>
    </>)
} 
    
export default Statistics;