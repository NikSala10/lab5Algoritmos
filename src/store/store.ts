import { Observer } from '../types/store';
import  {reducer } from './reducer'
import storage from '../utils/storage';

//El estado global, appState
const initialAppState =  {
    shoppingCardItems: []
};

export let appState = storage.get('STORE', initialAppState)

let observers: Observer[] = [];

const persistStore = (state: any) => {
    storage.set('STORE', state)
}

//Crear el dispatch
export const dispatch = (action:any) =>  {
    const clone = JSON.parse(JSON.stringify(appState));
    const newState = reducer(action, clone);
    appState = newState;
    persistStore(newState)
    observers.forEach((o) => o.render());
};

//Agregar los observadores para los interesados, los suscritos
export const addObserver = (ref: any) =>  {
    observers = [...observers, ref];
};