import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization : 'Client-ID e-4Q1l7MvzYLEcpvrJrYcJbc68zUtYwyYp9JnsFWSqE'
    }
});