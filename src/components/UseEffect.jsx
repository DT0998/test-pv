import React, { useEffect, useState } from "react";
import classes from "./UseEffect.module.css";

const tabs = ["posts", "comments", "albums"];

function UseEffect() {
  // two way binding
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  //    useeffect(callback)
  useEffect(() => {
    document.title = title;
    console.log("re-render", title);
  });

  //    useeffect(callback,[])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
    console.log("fetch mount");
  }, [type]);
  //    useeffect(callback,[deps])

  // two way binding handle
  const twoWayBindingHandle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <React.Fragment>
      <input value={title} onChange={twoWayBindingHandle} />
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  background: "#333",
                }
              : {}
          }
          onClick={
            // click change type
            () => setType(tab)
          }
        >
          {tab}
        </button>
      ))}
      <div className={classes.flex}>
        <ul>
          {posts.map((post) => (
              <li key={post.id}>{post.title || post.name}</li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default UseEffect;
