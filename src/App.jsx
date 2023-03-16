import React from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import SectionTitle from './components/SectionTitle';
import Notification from './components/Notification';
import css from './components/App.module.css'

class App extends React.Component {
    state = {
        good: 0, 
        neutral: 0,
        bad: 0,
      };

      handelIncrement = (event) => {
        if (event.target.textContent === 'good') {
            this.setState(prevState => ({
        good: prevState.good + 1,
    }))
        } else if (event.target.textContent === 'neutral') {
            this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        })) 
        } else {
            this.setState(prevState => ({
            bad: prevState.bad + 1,
        })) 
        }
    }

    countTotalFeedback = ({ good, neutral, bad }) => {
        return good + neutral + bad;
      };

    countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
        const totalFeedback = good + neutral + bad;
    
        let positivePerctenger = (good / totalFeedback) * 100;
    
        return (positivePerctenger = positivePerctenger
          ? positivePerctenger
          : 0);
      };

    render () {
        const {good, neutral, bad} = this.state
        return (  
            <div className={css.Counter}>
            <SectionTitle title={"Please leave feedback"}> 
            <FeedbackOptions increment={this.handelIncrement}/>
            {good || neutral || bad ? (
            <div>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback(this.state)}
                positiveFeedBack={this.countPositiveFeedbackPercentage(this.state)}/>
            </div>
          ) : (
            <Notification message={"There is no feedback"} />
          )}
            </SectionTitle>
            </div>
        )
    }
}

export default App;
