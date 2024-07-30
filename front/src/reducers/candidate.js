import { ACTION_TYPES } from "../actions/candidates";

const initialState = {
    list: []
};

export const candidate = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: action.payload // Reemplaza la lista existente con la nueva lista
            };

        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload] // Agrega el nuevo elemento a la lista
            };

        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(item => 
                    item.id === action.payload.id ? action.payload : item // Actualiza el elemento con el mismo id
                )
            };

        case ACTION_TYPES.DELETE:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload) // Filtra el elemento con el id especificado
            };

        default:
            return state;
    }
};
