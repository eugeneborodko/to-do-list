import Input from './input.component';
import { resetInputValue, setInputValue } from './../../store/input/actions';
import { connect } from 'react-redux';



const mapStateToProps = (store) => {
  return {
    value: store.input.value,
  }
}

const mapDispatchToProps = {
  resetInputValue,
  setInputValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);