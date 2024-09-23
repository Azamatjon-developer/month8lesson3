import axios from "axios";
import { VITE_API } from "./UseEnv";


export const useAxios = axios.create({baseURL:VITE_API})