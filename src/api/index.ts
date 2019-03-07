import axios from 'axios'
import { config } from './config'

const request = axios.create(config)

export default request