// import { Component } from "react";

import { ChangeEvent } from 'react';

import './search-box.style.css'

type SearchBoxProps = {
        className: string;
        placeholder?: string;
        onChangeHandler: (event :ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({className, placeholder, onChangeHandler} : SearchBoxProps )=>{
        return (
            <input 
            className= {`search-box ${className}`}
            type='search' 
            placeholder={placeholder}
            onChange={onChangeHandler }
      />
        );
}

// class SearchBox extends Component{
//     render() {
//         return (
//             <input 
//             className= {`search-box ${this.props.className}`}
//             type='search' 
//             placeholder={this.props.placeholder}
//             onChange={this.props.onChangeHandler}
//       />
//         );
//     }
// }

export default SearchBox; 