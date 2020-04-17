import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLength2, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControl";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likecounts={p.likecounts} key={p.message}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea}
                       validate={[required, maxLength10, minLength2]}
                       placeholder={"Post message"}/>
            </div>
            <div>
                <button className={s.addPostButton} >Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;