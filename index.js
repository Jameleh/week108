import expressApp from './app.js'
import CORS from './CORS.js'
import bodyParser from 'body-parser'
import { createReadStream } from 'fs'
import { writeFileSync } from 'fs'
import http from 'http'
import express from 'express'
import crypto from 'crypto'
const PORT=process.env.PORT||5432
const app=expressApp(express, bodyParser, createReadStream, crypto, http, CORS, writeFileSync);
app.listen (PORT,()=>{
    console.log(`SERVER is listening on PORT ${PORT}`)
})

