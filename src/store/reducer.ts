export const reducer = (currentAction: any, currentState: any) =>      {
    const  {action, payload} = currentAction;

    switch (action) {
        case 'value':
            return  {
                ...currentState,
                baclgroundcolor: payload
            };
    
        default:
            return currentState;
    }
}