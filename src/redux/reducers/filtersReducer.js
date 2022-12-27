import * as types from '../actions/actionTypes';

const initialState = {
  selectedCurrency: 'rub',
  filterStops: []
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {

    // Изменение фильтра "Валюта"
    case types.SET_CURRENCY:
      return {...state, selectedCurrency: action.currency};

    // Изменение фильтра "Пересадки"
    case types.SET_STOPS:
    return { ...state, filterStops: getFilters(action.stopsCount, state.filterStops) };

    // Выбран фильтр "Только"
    case types.SET_ONLY_STOP:
      return {...state, filterStops: [].concat(action.stopsCount)};

    default:
      return state;
  }
}

export default filtersReducer;


function getFilters(stopsCount, stops) {

  // Поступил фильтр "Все"
  if (stopsCount === -1) {
    !stops.includes(-1) ? stops = [-1,0,1,2,3] : stops = []; 
  }
  // Поступил иной фильтр (1 пересадка, 2 пересадки...)
  else { 
    if (!stops.includes(stopsCount)) { 
      stops = stops.concat(stopsCount);
    }
    else {
      
        let index = stops.indexOf(-1); 
        if (index !== -1) 
          stops.splice(index, 1);
        
      stops = stops.filter(x => x !== stopsCount); 
    }
  }
  
  return stops;
}