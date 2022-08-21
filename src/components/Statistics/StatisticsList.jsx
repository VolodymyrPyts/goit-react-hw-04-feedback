import PropTypes from 'prop-types';
import { Box } from '../theme/Box';

export const StatisticsList = ({option, list, total, onPositivePercentage }) => {
    return (
        <>
            <Box display='flex' gridGap='10px' mb='20px' >
                {option.map((item, idx) => (
            <p key ={idx}>{item} : <span>{list[item]}</span></p>
        ))}
        </Box>

            <Box display='flex' gridGap='10px'>
                <p>Total : {total} </p>
        <p>Positive feedback : {onPositivePercentage} %</p>
        </Box>
        </>
    )
}

StatisticsList.propTypes = {
    option: PropTypes.arrayOf ((PropTypes.string.isRequired)).isRequired,
    list: PropTypes.objectOf(PropTypes.number).isRequired,
    total: PropTypes.number.isRequired,
    onPositivePercentage: PropTypes.number,
}