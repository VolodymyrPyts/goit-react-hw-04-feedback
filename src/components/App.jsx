import { Box } from './theme/Box';

import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/ButtonFeedback/ButtonFeedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = e => {
    const { name } = e.target;
    setFeedback(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((total, item) => total + item, 0);
  };

  const countPercentagePositiveFeedback = () => {
    return Math.round(
      countTotalFeedback() && (feedback.good * 100) / countTotalFeedback()
    );
  };

  const keyObject = Object.keys(feedback);
  return (
    <Box p="15px" backgroundColor="#d4d3d3bc" width="300px">
      <Box mb="20px">
        <Section title="Please leave feedback">
          <FeedbackOptions
            option={keyObject}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
      </Box>
      <Section title="Statistic">
        {countTotalFeedback() ? (
          <Statistics
            feedback={feedback}
            total={countTotalFeedback()}
            onPositivePercentage={countPercentagePositiveFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
};
