const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Petrovich'},
        {id: 2, name: 'Irenich'},
        {id: 3, name: 'Katynich'},
        {id: 4, name: 'Vitunich'},
        {id: 5, name: 'Sosedich'},
        {id: 6, name: 'Gagenich'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your'},
        {id: 3, message: 'Hello world'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Welcome'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;