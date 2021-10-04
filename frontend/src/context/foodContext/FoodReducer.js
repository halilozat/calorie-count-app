const FoodReducer = (state, action) => {
    switch (action.type) {

        case "API_FOOD_START":
            return {
                food: null,
                isFetching: true,
                error: false,
            };

        case "API_FOOD_SUCCESS":
            return {
                food: action.payload,
                isFetching: false,
                error: false,
            };

        case "API_FOOD_FAILURE":
            return {
                food: null,
                isFetching: false,
                error: true,
            };

        default:
            return state;
    }
}

export default FoodReducer;