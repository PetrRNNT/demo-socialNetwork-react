import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControl";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       placeholder={'Enter your message'}
                       name={"newMessageBody"} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default  reduxForm ({form: 'dialog-add-message-form'})(AddMessageForm);