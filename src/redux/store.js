import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likecounts: 15},
                {id: 2, message: "It's my first post,", likecounts: 20},
                {id: 3, message: 'Hello world', likecounts: 12}
            ],
            newPostText: 'SAMURAI_JS'
        },
        dialogsPage: {
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
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('!!!!!');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;
