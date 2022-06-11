import React, { useEffect, useState } from "react";

function UseEffect() {
  // two way binding
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  //    useeffect(callback)
  useEffect(() => {
    document.title = title;
    console.log("re-render", title);
  });

  //    useeffect(callback,[])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
      console.log("fetch mount");
  }, []);
  //    useeffect(callback,[deps])
  

  // two way binding handle
  const twoWayBindingHandle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <React.Fragment>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <input value={title} onChange={twoWayBindingHandle} />
    </React.Fragment>
  );
}

export default UseEffect;
