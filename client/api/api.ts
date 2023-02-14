import axios from "axios";

class API {
  endpoint: string;

  constructor(url: string) {
    this.endpoint = url;
  }

  createUserApi(payload: object): Promise<void> {
    return axios.post(this.endpoint + "/signup", payload);
  }

  loginUserApi(payload: object) {
    return axios.post(this.endpoint + "/login", payload);
  }

  getUserProfileApi(): Promise<void> {
    return axios.get(this.endpoint + "/profile");
  }

  followUserApi(payload: object): Promise<void> {
    return axios.post(this.endpoint + "/follow", payload);
  }
  unfollowUserApi(payload: object): Promise<void> {
    return axios.post(this.endpoint + "/unfollow", payload);
  }

  // Posts
  createPostApi(payload: object): Promise<void> {
    return axios.post(this.endpoint + "/post", payload);
  }

  getAllPostsApi(): Promise<void> {
    return axios.get(this.endpoint + "/post");
  }

  getAllFollowingPostsApi(): Promise<void> {
    return axios.get(this.endpoint + "/post/following");
  }

  likePostApi(id: string): Promise<void> {
    return axios.post(this.endpoint + "/post/like/" + id);
  }

  commentPostApi(id: string, payload: object): Promise<void> {
    return axios.post(this.endpoint + "/post/comment/" + id, payload);
  }

  deletePostApi(id: string): Promise<void> {
    return axios.post(this.endpoint + "/post/like/" + id);
  }
}

// Using ip of local system because backend api are running on local system
export const api = new API("http://192.168.0.108:5000/api/user");
