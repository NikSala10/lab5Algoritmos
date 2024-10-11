import { Actions } from "../types/store";
export const reducer = (currentAction: any, currentState: any) =>      {
    const  {action, payload} = currentAction;

    switch (action) {
        case Actions.ADDSHOPPINGCART:
            return  {
                ...currentState,
                shoppingCardItems: [...currentState.shoppingCardItems, payload]
            };

        default:
            return currentState;
    }
}