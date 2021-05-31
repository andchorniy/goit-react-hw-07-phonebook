import { Component } from "react";
import style from './ContactForm.module.css'
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations";

const INITIAL_STATE ={
    name: '',
    number: '',
}

class ContactForm extends Component   {
    state = {
        ...INITIAL_STATE
    }
    handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    addContact = (e) => {
        e.preventDefault();
        if(this.props.contacts.items.find(item=> item.name === this.state.name)){
           alert(`${this.state.name} is already in contacts `)
           return
        }
          this.props.onSubmit(this.state)
          this.setState({
            ...INITIAL_STATE
        })
      }
    
    render(){
        const {name, number} = this.state
        return (

                <form onSubmit={this.addContact} className={style.form} >
                    <label  className={style.label}>
                        Name
                        <input
                        className={style.input}
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.handleInputChange}
                        />
                    </label>
                    <label className={style.label}>
                        Number
                        <input
                        className={style.input}
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={this.handleInputChange}
                        />

                    </label>
                    <button type="submit" className={style.btn}>Add contact</button>
                </form>
        
        )}
    
};
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    onSubmit: (value)=> {
         return dispatch(addContact(value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);