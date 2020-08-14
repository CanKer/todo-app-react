const todoReducer = (state = [], action ) => {
  state = (state) ? state : []
    switch ( action.type ) {
        case 'get':
          const payload = (action.payload) ? action.payload : []
          return [...state, ...payload];
        case 'add':
          console.log("add");
            return [...state, action.payload];
        case 'delete':
            const newState = state.filter( todo => todo['_id'] !== action.payload )
            console.log("newState: ", newState);
            return newState;
        case 'update':
            return state.map( todo =>
                ( todo['_id'] === action.payload['_id'] )
                    ? { ...todo, done: !action.payload['done']}
                    : todo
            );
        default:
            return state;
    }
}

export default todoReducer
