import PropTypes from 'prop-types';
import style from './ContactList.module.css'
import { connect } from "react-redux";
import Contact from '../Contact'
import { Component } from 'react';
import {fetchContacts} from '../../redux/contacts/contacts-operations'
class ContactList extends Component  {
    componentDidMount(){
        this.props.getContacts()
    }
    render(){

        return (
                <ul className={style.list}>
                {this.props.contacts.map((contact)=>{
                    return <li className={style.item} key={contact.id}>
                        <Contact name={contact.name} number={contact.number} id={contact.id} />
                        </li>
                })}
                </ul>
        );
    }
};
const filterContacts= (contactsList, query) => {
 return contactsList.filter(({name}) => name.toLowerCase().includes(query.toLowerCase()))
}
const mapStateToProps = (state) => ({
    contacts: filterContacts(state.contacts.items, state.contacts.filter)
  });
const mapDispatchToProps = dispatch =>({
    getContacts: ()=> dispatch(fetchContacts())
})

ContactList.propTypes={
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactList);