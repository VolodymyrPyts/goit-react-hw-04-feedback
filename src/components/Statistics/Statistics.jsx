import { Box } from 'components/theme/Box';
import PropTypes from 'prop-types';

export const Statistics = ({ feedback, total, onPositivePercentage }) => {
  return (
    <>
      <Box display="flex" gridGap="10px" mb="20px">
        <p>
          Good : <span>{feedback.good}</span>
        </p>
        <p>
          Neutral : <span>{feedback.neutral}</span>
        </p>
        <p>
          Bad : <span>{feedback.bad}</span>
        </p>
      </Box>

      <Box display="flex" gridGap="10px">
        <p>Total : {total} </p>
        <p>Positive feedback : {onPositivePercentage} %</p>
      </Box>
    </>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  onPositivePercentage: PropTypes.number.isRequired,
};
