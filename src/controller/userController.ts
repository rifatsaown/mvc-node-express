import { Request, Response } from "express"
const data = [{name: "Rahul",age: 20},{name : "Rohit",age: 21},{name: "Raj",age: 22}] // Dummy Data

export const getConfirm =async (req: Request , res: Response) => {
    res.send("Api Version 1 is working")
}

export const getAllUser =async (req: Request , res: Response) => {
    // Sent Status True and Data
    res.status(200).json({
        status: true,
        data: data // Dummy Data (Actual Data will come from Database)
    })
}