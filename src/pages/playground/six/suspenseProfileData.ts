import { fetchPost, fetchUser } from "../../../lib/fetch";
import wrapPromise from "../../../lib/wrapPromise";

export default function suspenseProfileData(userId: number) {
  // 명확한 확인을 위해 user 1초, post 2초 딜레이를 줬습니다
  const userPromise = fetchUser(userId, 1000);
  const postPromise = fetchPost(userId, 2000);

  return {
    userId,
    user: wrapPromise(userPromise),
    post: wrapPromise(postPromise),
  };
}
