import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";
import FirstBlock from "./Components/FirstBlock/FirstBlock";
import store from "./redux/redux-store";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div>
                <FirstBlock/>
                <div className='secondBlock'>
                    <HeaderContainer/>
                    <div className='app-wrapper'>
                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Route path='/dialogs'
                                   render={() => <DialogsContainer/>}/>

                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>

                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>

                            <Route path='/login'
                                   render={() => <LoginPage/>}/>

                            <Route path='/news' component={News}/>

                            <Route path='/music' component={Music}/>

                            <Route path='/settings' component={Settings}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let MainSocialApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default MainSocialApp;