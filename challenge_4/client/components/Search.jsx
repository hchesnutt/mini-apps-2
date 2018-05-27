import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Search = ({ query, handleQueryChange, handleSearch }) => {
  return (
    <div id="nav">
      <div id="title">Historical Events Finder</div>
      <form>
        {/* <input placeholder="handleSearch here" type="text" onChange={(e) => handleQueryChange(e)} value={query}/> */}
        <TextField
          label="Search"
          onChange={handleQueryChange}
          value={query}/>
        <Button variant="outlined" onClick={handleSearch}>Submit</Button>
      </form>
    </div>
  )
}

export default Search;