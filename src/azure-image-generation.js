import axios from 'axios';
const openai_key = process.env.REACT_APP_OPEN_AI_KEY;
const endpoint = process.env.REACT_APP_OPEN_AI_ENDPOINT; 

const generateImage = async (prompt) => {
  
  let data = JSON.stringify({ prompt});

      console.log(data)
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: {endpoint},
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${openai_key}`
        },
        data : data
      };
        
      // console.log(endpoint)
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
};

export default generateImage;

