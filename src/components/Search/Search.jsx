import React from 'react'

const Search = (props) => {

    const {
        value,
        onChange,
        children = 'Search',
        placeholder = 'Search...'
    } = props

    return (
        <label>
            {children}
            <input 
            type='text'
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            />
        </label>
    )
}

export default Search