export const ApiFoodStart = () => ({
    type: "API_FOOD_START",
});

export const ApiFoodSuccess = (food) => ({
    type: "API_FOOD_SUCCESS",
    payload: food,
});

export const ApiFoodFailure = () => ({
    type: "API_FOOD_FAILURE",
});