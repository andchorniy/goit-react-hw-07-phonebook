import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './Filter.module.css'
import changeFilter from '../../redux/filter/filter-action'
const Filter = ({filter, handleChange}) => {
    return (
        <div>
            <label className={style.label}>
                Find contacts by name
                <input className={style.input} type="text" name="filter" value={filter} onChange={handleChange}/>
            </label>
        </div>
    );
};
const mapStateToProps=(state)=>({
    filter: state.filter
})
const mapDispatchToProps = dispatch => ({
    handleChange: (e)=> dispatch(changeFilter(e.target.value.trim()))
})
Filter.propTypes={
    handleChange: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);