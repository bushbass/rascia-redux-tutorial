import * as actions from '../actions/loginActions';

export const initialState = {
  currentUser: 'No one is picked yet'
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHOOSE_USER:
      return { ...state };

    default:
      return state;
  }
}
