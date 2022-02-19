import "./App.css";
import { getData, getDataSearch } from "./services/Heroes";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import ListHeroes from "./components/ListHeroes";

function App() {
  const [dataHeroes, setDataHeroes] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (query === "") {
      getData()
        .then((data) => {
          setDataHeroes(data.data.results);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      getDataSearch(query).then((data) => {
        setDataHeroes(data.data.results);
        setIsLoading(false);
      });
    }
  }, [query]);
  return (
    <div>
      <Header HandleSearch={setQuery} />
      <ListHeroes heroes={dataHeroes} loading={isLoading} />
      <Footer />
    </div>
  );
}

export default App;
