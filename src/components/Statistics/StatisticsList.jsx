import PropTypes from 'prop-types';

export const StatisticsList = ({option, list, total, onPositivePercentage }) => {
    return (
        <>
        {option.map((item, idx) => (
            <p key ={idx}>{item} : <span>{list[item]}</span></p>
        ))}

        <p>Total : {total} </p>
        <p>Positive feedback : {onPositivePercentage} %</p>
        </>
    )
}

StatisticsList.propTypes = {
    option: PropTypes.arrayOf ((PropTypes.string.isRequired)).isRequired,
    list: PropTypes.objectOf(PropTypes.number).isRequired,
    total: PropTypes.number.isRequired,
    onPositivePercentage: PropTypes.number,
}