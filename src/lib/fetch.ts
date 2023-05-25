export type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function fetchUser(userId: number, delay = 0) {
  //console.log("[fetch] fetchUser: ", userId, "...", delay);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = (await response.json()) as User;
  await new Promise((resolve) => setTimeout(resolve, delay)); // 임의 딜레이
  return user;
}

export async function fetchPost(postId: number, delay = 0) {
  //console.log("[fetch] fetchPost: ", postId, "...", delay);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = (await response.json()) as Post;
  await new Promise((resolve) => setTimeout(resolve, delay)); // 임의 딜레이
  return post;
}
