"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.updateOne = exports.createOne = exports.getOne = exports.getAll = void 0;
const error_1 = require("../utils/error");
const movieServices = __importStar(require("../services/movieService"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const searchTerm = req.query.searchTerm || "";
        const foundMovies = yield movieServices.getMovies(page, limit, searchTerm);
        const totalPages = Math.ceil(foundMovies.count / limit);
        const metadata = {
            page: page,
            limit: limit,
            totalPages: totalPages,
        };
        res.status(200).send({ movies: foundMovies.data, metadata });
    }
    catch (err) {
        return res.status(500).send((0, error_1.getErrorMessage)(err));
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundMovie = yield movieServices.getSingleMovie(req.params.id);
        res.status(200).send(foundMovie);
    }
    catch (err) {
        return res.status(404).send((0, error_1.getErrorMessage)(err));
    }
});
exports.getOne = getOne;
const createOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdMovie = yield movieServices.createMovie(req.body);
        res.status(201).send(createdMovie);
    }
    catch (err) {
        return res.status(422).send((0, error_1.getErrorMessage)(err));
    }
});
exports.createOne = createOne;
const updateOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedMovie = yield movieServices.updateMovie(req.params.id, req.body);
        res.status(200).send(updatedMovie);
    }
    catch (err) {
        return res.status(500).send((0, error_1.getErrorMessage)(err));
    }
});
exports.updateOne = updateOne;
const deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedMovie = yield movieServices.deleteMovie(req.params.id);
        res.status(200).send(deletedMovie);
    }
    catch (err) {
        res.status(500).send((0, error_1.getErrorMessage)(err));
    }
});
exports.deleteOne = deleteOne;
