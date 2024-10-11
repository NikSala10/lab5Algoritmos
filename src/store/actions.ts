import { Actions } from '../types/store';


export const addShoppingCard = (product: any) => {
	return {
		action: Actions.ADDSHOPPINGCART,
		payload: product
	};
};
