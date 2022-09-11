
const initialState={
    count:200,
    name:'Deep Dutta',
    email:'deep@gmail.com',
    address:'siliguri'
}

function RootReducer(state=initialState,action){
    return initialState;

}

export default RootReducer