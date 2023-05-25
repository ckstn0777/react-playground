import { Suspense, useState } from "react";
import suspenseProfileData from "./suspenseProfileData";

const initialResource = suspenseProfileData(1);

type Props = {
  resource: typeof initialResource;
};

function PostComponent({ resource }: Props) {
  const post = resource.post.read();

  if (!post) {
    return <p>Empty Post Data</p>;
  }

  return (
    <div>
      <p>post id: {post.id}</p>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
    </div>
  );
}

function UserComponent({ resource }: Props) {
  const user = resource.user.read();

  if (!user) {
    return <p>Empty User Data</p>;
  }

  return (
    <div>
      <p>user id: {user.id}</p>
      <p>username: {user.name}</p>
      <p>email: {user.email}</p>

      <hr />
    </div>
  );
}

export default function PlaygroundSix() {
  const [resource, setResource] = useState(initialResource);
  console.log("weojfiowejfojewf");

  return (
    <div>
      <h2>Race Condition 테스트</h2>
      <button
        onClick={() => {
          const nextUserId = resource.userId + 1;
          setResource(suspenseProfileData(nextUserId));
        }}
      >
        Next User
      </button>

      <Suspense fallback={<p>"Loading user..."</p>}>
        <UserComponent resource={resource} />
        <Suspense fallback={<p>"Loading post..."</p>}>
          <PostComponent resource={resource} />
        </Suspense>
      </Suspense>
    </div>
  );
}
