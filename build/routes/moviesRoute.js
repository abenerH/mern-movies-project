"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moviesServices_1 = require("../services/moviesServices");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send((0, moviesServices_1.getAllMovies)());
});
router.post('/', (_req, res) => {
    res.send('Adding a movie...');
});
exports.default = router;
