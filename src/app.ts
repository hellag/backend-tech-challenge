import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 3000;
const url = "https://api.artic.edu/api/v1/artworks";


app.use(cors())
app.get('/', (req, res) => {
    res.send('Server On!');
});


/**
 * Return api response
 */
app.get('/getart', async (req, res) => {

    let artworkResponse = await getArtworkObject();

    // console.log(artworkResponse);

    // res.json({
    //     message: artworkResponse
    // })

    res.json(artworkResponse);

    // res.send(dataResponse);
});


/**
 * Get Artwork data from api
 */
function getArtworkObject() {

    return new Promise((resolve,reject) => {

        axios.get(url)
            .then(response => {
                // console.log(response.data.pagination)
                // console.log(response.data.data)

                resolve(response.data.data)

            })
            .catch(error => {
                console.log(error);
                reject("error getting artwork data")
            });

    }).then(data => {
        return data;
    })

}


app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
