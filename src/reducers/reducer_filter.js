import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortby: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.payload,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.payload,
      };
  }
};
