import 'bootstrap/js/dist/alert';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function FormFields({ name, state }) {
    const [isFieldEmpty, setIsFieldEmpty] = useState();

    const label = () => {
        return (
            <input 
            name={name}
            id={name}
            className='form-control'
            onBlur={(e) => e.target.value.length > 0
            ? setIsFieldEmpty(false)
            : setIsFieldEmpty(true)
        }
        />
        );
    };

    const textArea = () => {
        return (
            <textarea
            name={name}
            id={name}
            className='form-control'
            rows='10'
            style={{ resize: 'none' }}
            onBlue={(e) => 
            e.target.value.length >0
            ? setIsFieldEmpty
            : setIsFieldEmpty
        }
        />
        );
    };
    
    return (
        <section className='m-2'>
            <label htmlFor={name} className='form-label'>
                {name.charAt(0).toUpperCase() + name.slice(1) + ':'}
            </label>
            {name === 'message' ? textArea() : label()}
            {isFieldEmpty ? <p>This field cannot be empty</p> : null}
            {name === 'email' ? (
                <ValidationError prefix="This"
                field='email' errors={state.errors}/>
            ) : null}
        </section>
    );
}

function Contact() {
    const fields = ['name', 'email', 'message'];
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_KEY);

    if (state.succeeded) {
        return (
            <div className='alert alert-info' role='alert'>
                Message was sent. Thank you.
            </div>
        );
    }

    return (
        <section className='container d-flex bg-gray p-5' id='contact'>
            <form onSubmit={handleSubmit} className='col-sm-6'>
                {fields.map((field) => (
                    <FormFields key={field} name={field} state={state} />
                ))}
            <button type='submit'
            className='btn text-light bg-secondary m-2'
            disabled={state.submitting}
            >
                Send
            </button>
            </form>
        </section>
    );
}

export default Contact;