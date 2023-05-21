import { useEffect } from 'react';
import axios from "axios";

const Api = () => {

      useEffect(() => {
            //fetch('https://jsonplaceholder.typicode.com/posts/1', {
            //      method: 'GET',
            //      headers: {},
            //})
            //.then(response => {
            //      if(!response.ok) {
            //            throw new Error(`HTTP Error: ${response.status}`);
            //      }
            //
            //      return response.json();
            //})
            //.then(json => console.log(json));

            axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                  console.log(response);
            })
            .catch(console.error);

      }, [])

      return (
            <div>
                  <h1>Welcome on Api Page!</h1>
            </div>
      )
};

export default Api;