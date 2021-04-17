import "./SearchPage.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import Search from "../../components/Search";
import logo from "../../assets/images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useGoogleSearch from "../../useGoogleSearch";
import { data } from "../../data";
const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="searchPage__headerBody">
          <Search HideSearchButton />
          <div className="searchPage__options">
            <div className="searchPage__optionLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage__option">
                <SlideshowIcon />
                <Link to="/videos">Videos</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">images</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionRight">
              <div className="searchPage__option">
                <Link to="/all">Setting</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/all">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage__body">
        {data && (
          <div className="searchPage__results">
            <p className="searchPage__reslutCount">
              About {data?.searchInformation.formattedTotalResults} results (
              {data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>

            {data?.items.map((item) => (
              <div className="searchPage__result">
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.displayLink}
                </a>
                <a
                  className="searchPage__title"
                  target="_blank"
                  rel="noreferrer"
                  href={item.link}
                >
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage_resultDetails">{item.snippet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchPage;
