import express, { json } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import con from './Db.js'
const app = express()

app.use(cors())
app.use(json())
app.post("/sginup", async (req, res) => {
    const mail = req.body.mail;
    const password = req.body.password;


    const data = {
        email: mail,
        password: password
    }

    try {
        const check = await con.findOne({ email: mail })
        console.log(check)
        if (check) {
            res.json("exits")
        }
        else {
            await con.insertMany([data])
            res.send({
                message: "ok"
            })
        }
    } catch (error) {

    }

})


app.post('/login', async (req, res) => {
    // const {mail,password} = req.body
    const mail = req.body.mail;
    const password = req.body.password;
    console.log(mail)
    try {
        const check = await con.findOne({ email: mail })
        if (check.password === password) {
            res.send({
                message: "ok",
                data: {
                    work: check.work,
                    id: check.email
                },
            })
        } else {
            res.send("password is Wrong")
        }
    } catch (error) {
        console.log(error)
    }

})

app.post("/add", async (req, res) => {
    // message = req.body.message
    const add = await con.updateOne(
        { email: req.body.mail },
        { $push: { work: req.body.message } }
    )

    if (add.acknowledged === true) {
        res.send({
            message: "upadted"
        })
    }

})

app.get("/get", async (req, res) => {
    // console.log(req.query.id.id)
    const id = req.query.id.id
    console.log()
    const val = await con.findOne({ email: id });
    console.log(val.work)
    if (val) {
        res.send({
            message: "ok",
            data: val.work
        })
    }
    else {
        res.send("bad")
    }

})

app.listen(7676, () => {
    console.log('backend Connected')
})