"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moviesRoute_1 = __importDefault(require("../routes/moviesRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/movies', moviesRoute_1.default);
const PORT = 3000;
app.get('/', (_, res) => {
    res.send('Hello there');
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
