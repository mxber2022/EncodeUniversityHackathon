import "./Gart.css";
import axios from 'axios';

function Gart () {

    async function generateArt() {
        const URL = `https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0`;
        const response = await axios({
            url: URL,
            method: 'POST',
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_HUGGING_FACE_API_KEY}`,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            data: JSON.stringify({
              inputs: "description", options: { wait_for_model: true },
            }),
            responseType: 'arraybuffer',
          })
      
          const type = response.headers['content-type']
          const data = response.data
      
          const base64data = Buffer.from(data).toString('base64')
          const img = `data:${type};base64,` + base64data // <-- This is so we can render it on the page
          console.log("img: ", img);
          //setImage(img)
      
          return data

    }

    return(

        <button onClick={generateArt}>Generate Art</button>
    );
}

export default Gart;