import { Link } from "react-router-dom";
import "./Home.css";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import logo from "../../assets/images/logo.png";
import Search from "../../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsSharpIcon />
          <AccountCircleSharpIcon />
        </div>
      </div>
      <div className="home__body">
        <img src={logo} alt="logo" />
        <Search />
      </div>
    </div>
  );
};
export default Home;
