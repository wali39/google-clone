import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicSharpIcon from "@material-ui/icons/MicSharp";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
const Search = ({ HideSearchButton = false }) => {
  const [input, setInput] = useState("");
  const [{}, dispatch] = useStateValue();

  const history = useHistory();
  const handleSearch = (e) => {
    e.preventDefault();
    // console.log("searched something", input);
    history.push("/search");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };

  return (
    <form className="Search">
      <div className="search__main">
        <SearchIcon className="search__icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicSharpIcon />
      </div>
      {!HideSearchButton ? (
        <div className="search__button">
          <Button type="submit" onClick={handleSearch} variant={"outlined"}>
            Google Search
          </Button>
          <Button variant={"outlined"}>I'm Feeling lucky</Button>
        </div>
      ) : (
        <div className="search__button">
          <Button
            className="search__buttonHidden"
            type="submit"
            onClick={handleSearch}
            variant={"outlined"}
          >
            Google Search
          </Button>
          <Button className="search__buttonHidden" variant={"outlined"}>
            I'm Feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
};
export default Search;
