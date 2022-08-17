import { Box } from 'components/theme/Box';
import PropTypes from 'prop-types';

import {ButtonFeedback} from "./ButtonFeedback/ButtonFeedback"

export const FeedbackOptions = ({option, onLeaveFeedback}) => {

    return (<Box>
      <ButtonFeedback option={option} onLeaveFeedback={onLeaveFeedback}/>
    </Box>
    )

}
FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf ((PropTypes.string.isRequired)).isRequired,
  onLeaveFeedback: PropTypes.func,
}