import PropTypes from 'prop-types';

import { ButtonFb } from "./ButtonFeedback.styled";

export const ButtonFeedback = ({option, onLeaveFeedback}) => {

    return (
    <div>
       {option.map(item => (
        <ButtonFb type="button" onClick={onLeaveFeedback} name={item} key={item} >
            {item}
        </ButtonFb>
    ))}
    </div>
)}

ButtonFeedback.propTypes = {
    option: PropTypes.arrayOf ((PropTypes.string.isRequired)).isRequired,
     onLeaveFeedback: PropTypes.func,
}