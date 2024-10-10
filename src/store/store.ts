import  {reducer } from './reducer'

//El estado global, appState
export let appState =  {
    screen: 'dashboard',

};


let observers: any[] = [];
//Crear el dispatch
export const dispatch = (action:any) =>  {
    const clone = JSON.parse(JSON.stringify(appState));
    appState = reducer(action, clone);
    observers.forEach((o) => o.render());
};

//Agregar los observadores para los interesados, los suscritos
export const addObserver = (ref: any) =>  {
    observers = [...observers, ref];
};