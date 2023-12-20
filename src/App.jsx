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
  
  anyStats = false;
  
  countTotalFeedback = () => {
    return this.state['good'] + this.state['neutral'] + this.state['bad'];
  }

  countPositiveFeedbackPercentage = (total) => {
    const positiveFeedbackPercentg = Math.round(this.state['good'] / total * 100, 0); 
    return positiveFeedbackPercentg;

  }

  
  onHandleFeedback = (e) => {
    this.anyStats = true;
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
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection:'column'
        }}
      >
        
        <Section title='Flease Leave Feedback'>
          <br/>
          <FeedbackOptions options={['Good','Neutral', 'Bad']}
            onLeaveFeedback={this.onHandleFeedback} />
        </Section>
        
        {!this.anyStats&&<Section title='Statistics'> 
          <Notification message='There is no feedback' />
          
         
        </Section>}
        {this.anyStats && <Section title='Statistics'>
         
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positiveFeedback}/>
         
        </Section>}
      </div>
    );
  };
}


export default App;