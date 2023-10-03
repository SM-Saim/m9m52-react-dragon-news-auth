import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className="text-3xl">This is home</div>;
    </div>
  );
};

export default Home;
