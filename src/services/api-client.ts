import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0cf1f9ad8ccd4d17aaa370697f7e80af",
  },
});
