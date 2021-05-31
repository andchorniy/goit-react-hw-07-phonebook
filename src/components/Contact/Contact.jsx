import	style from './Contact.module.css'
import { connect } from "react-redux";
import  {deleteContact}  from "../../redux/contacts/contacts-operations";

const Contact = ({name, number, id, deleteHandler}) => {
    return (
        <>
            {name} {number}
            <button className={style.btn} onClick={deleteHandler} id={id}>Delete</button>
        </>
    );
};
const  mapDispatchToProps = dispatch => ({
    deleteHandler: (e)=> dispatch(deleteContact(e.currentTarget.id))
})

export default connect(null,mapDispatchToProps )(Contact);