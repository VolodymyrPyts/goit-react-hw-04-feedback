import PropTypes from 'prop-types';

export const ButtonFeedback = ({option, onLeaveFeedback}) => {

    return (
    <div>
       {option.map(item => (
        <button type="button" onClick={onLeaveFeedback} name={item} key={item} >
            {item}
        </button>
    ))}
    </div>
)}

ButtonFeedback.propTypes = {
    option: PropTypes.arrayOf ((PropTypes.string.isRequired)).isRequired,
     onLeaveFeedback: PropTypes.func,
}