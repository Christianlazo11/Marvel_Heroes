import React from "react";
import CardHeroe from "./CardHeroe";
import Loading from "./Loading";

const ListHeroes = ({ heroes, loading }) => {
  console.log(heroes);
  return loading ? (
    <Loading />
  ) : (
    <div className="container p-2" style={{ minHeight: "630px" }}>
      <div className="row">
        {heroes.map((x, index) => (
          <CardHeroe
            title={x.name}
            img={x.thumbnail}
            id={x.id}
            key={x.id}
            urlDetails={x.urls[0].url}
          />
        ))}
      </div>
    </div>
  );
};

export default ListHeroes;
