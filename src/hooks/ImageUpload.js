
import axios from "axios";
const ImageUpload = (formData, setState) => {
    const serverURL = 'http://localhost:5000';

    // http:localhost/5000
    axios.post(`${serverURL}/upload`, formData)
        .then((response) => {
            console.log("image response is ", response?.data?.url)
            setState(response?.data?.url);


        })
        .catch((err) => {
            console.log(err)
            // event.target.reset();
        });
}

export default ImageUpload;