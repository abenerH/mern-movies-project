"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMovies = void 0;
const movies_json_1 = __importDefault(require("../movies.json"));
const movies = movies_json_1.default;
function getAllMovies() {
    return movies;
}
exports.getAllMovies = getAllMovies;
