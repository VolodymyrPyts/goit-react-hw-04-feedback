import { Box } from 'components/theme/Box';
import PropTypes from 'prop-types';

import {StatisticsList} from "./StatisticsList"

export const Statistics =({option, list, total, onPositivePercentage}) => {

return (
    <Box>
<StatisticsList option={option} list ={list} total={total} onPositivePercentage={onPositivePercentage}  />
    </Box>
)
}

Statistics.propTypes = {
    option: PropTypes.arrayOf ((PropTypes.string.isRequired)).isRequired,
    list: PropTypes.objectOf(PropTypes.number).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number,
}