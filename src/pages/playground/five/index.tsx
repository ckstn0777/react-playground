import { useEffect, useState } from "react";
import { Post, User, fetchPost, fetchUser } from "../../../lib/fetch";

// const PostComponent = React.memo(_PostComponent);

function PostComponent({ id }: { id: number }) {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    console.log("PostComponent effect");
    let isCancelled = false;

    // delay random time (0~2000ms)
    fetchPost(id, Math.random() * 2000).then((post) => {
      if (!isCancelled) {
        setPost(post);
      }
    });

    return () => {
      console.log("PostComponent cleanup");
      isCancelled = true;
    };
  }, [id]);

  if (!post) {
    return <div>Loading post...</div>;
  }

  return (
    <div>
      <p>post id: {post.id}</p>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
    </div>
  );
}

function UserComponent({ id }: { id: number }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log("UserComponent effect ", id); // 현재 id
    let isCancelled = false;
    // delay random time (0~1000ms)
    fetchUser(id, Math.random() * 1000).then((user) => {
      if (!isCancelled) {
        setUser(user);
      }
    });

    return () => {
      console.log("UserComponent cleanup ", id); // 이전 id
      isCancelled = true;
    };
  }, [id]);

  if (!user) {
    return <div>Loading user...</div>;
  }

  return (
    <div>
      <p>user id: {user.id}</p>
      <p>username: {user.name}</p>
      <p>email: {user.email}</p>

      <hr />

      <PostComponent id={id} />
    </div>
  );
}

export default function PlaygroundFive() {
  const [userId, setUserId] = useState(1);
  console.log("");

  return (
    <div>
      <h2>Race Condition 테스트</h2>
      <button onClick={() => setUserId(userId + 1)}>Next User</button>
      <UserComponent id={userId} />
    </div>
  );
}
