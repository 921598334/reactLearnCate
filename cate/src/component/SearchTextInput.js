import { SearchBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../assets/css/style.css'
import React from 'react';

class SearchTextInput extends React.Component {
    state = {
        value: '美食',
    };
   
    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    render() {
        return (
            <div>

                <SearchBar
                    value={this.state.value}
                    placeholder="Search"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    showCancelButton
                    onChange={this.onChange}
                />
            </div>);
    }
}

export default SearchTextInput