import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import SectionTitle from './components/SectionTitle';
import Notification from './components/Notification';
import css from './components/App.module.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelIncrement = event => {
    const key = event.target.textContent;
    if (key === 'good') {
      setGood(prevState => prevState + 1);
    } else if (key === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const totalFeedback = good + neutral + bad;

    let positivePerctenger = (good / totalFeedback) * 100;

    return positivePerctenger ? positivePerctenger : 0;
  };

  return (
    <div className={css.Counter}>
      <SectionTitle title={'Please leave feedback'}>
        <FeedbackOptions
          increment={handelIncrement}
          options={Object.keys({ good, neutral, bad })}
        />
        {good || neutral || bad ? (
          <div>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback(good, neutral, bad)}
              positiveFeedBack={countPositiveFeedbackPercentage(
                good,
                neutral,
                bad
              )}
            />
          </div>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </SectionTitle>
    </div>
  );
}

export default App;
