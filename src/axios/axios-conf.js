import axios from 'axios';

const axiosBase = axios.create({ baseURL: 'https://little-quiz-cc822-default-rtdb.firebaseio.com' })

export default axiosBase;