"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const port = 3000;
const url = "https://api.artic.edu/api/v1/artworks";
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Server On!');
});
/**
 * Return api response
 */
app.get('/getart', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let artworkResponse = yield getArtworkObject();
    // console.log(artworkResponse);
    // res.json({
    //     message: artworkResponse
    // })
    res.json(artworkResponse);
    // res.send(dataResponse);
}));
/**
 * Get Artwork data from api
 */
function getArtworkObject() {
    return new Promise((resolve, reject) => {
        axios_1.default.get(url)
            .then(response => {
            // console.log(response.data.pagination)
            // console.log(response.data.data)
            resolve(response.data.data);
        })
            .catch(error => {
            console.log(error);
            reject("error getting artwork data");
        });
    }).then(data => {
        return data;
    });
}
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map