import React from "react";
import { Component } from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";


class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  noStatistics = true;
  
  countTotalFeedback = () => {
    let total = 0;
    for (let option in this.state) {
      total = total + this.state[option];
      
      

    }
    return total;
  }

  countPositiveFeedbackPercentage = (total) => {
    const positiveFeedbackPercentg = Math.round(this.state['good'] / total * 100, 0); 
    return positiveFeedbackPercentg;

  }

  
  onHandleFeedback = (e) => {
    this.noStatistics = false ;
    e.preventDefault();
    const optionButton = e.target.name;
    
    
    
    this.setState((prevState) => {
     return {[optionButton]:prevState[optionButton]+1}  

 })
     
  }
  
  render() {

    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(total);


    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
          margin: '60px',
          border: '2px solid black',
          boxSizing: 'border-box',
          paddingBottom: '20px'
        }}
      >
        
        <Section title='Please Leave Feedback'>
          <br/>
          <FeedbackOptions options={['Good','Neutral', 'Bad']}
            onLeaveFeedback={this.onHandleFeedback} />
        </Section>
        
{this.noStatistics ? <Section title='Statistics'> 
          <Notification message='There is no feedback' />
          
         
        </Section> : <Section title='Statistics'>
         
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positiveFeedback}/>
         
        </Section>}

        
      </div>
    );
  };
}


export default App;