import axios from "axios";
import Config from "@/settings";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? process.env.VUE_APP_BASE_API : "/",
  timeout: Config.timeout,
});

export default service;
