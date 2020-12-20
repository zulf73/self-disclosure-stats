const axios=require('axios');
const fs=require('fs');
const url = 'https://api.receptiviti.com/v1/score';
const content_file = 'mariia_29_odessa.txt'
const text_content = fs.readFileSync(content_file);
const response = axios.post(url, {
  auth: {
    username: 'aa7f03bdee374126bc3ed1ed3632496f',
    password: 'IMlmAmi+3dZDpc1GSCvEi/u5kxZ9lRfm0h0+1YvTUJ4pChiirf1KX5n7'
  },
  data: {
      request_id: 'req-1',
      content: text_content,
      language: 'en'
  }
});
console.log(response.data);
