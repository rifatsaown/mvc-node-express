import { Request, Response } from "express"

export const getConfirm =async (req: Request , res: Response) => {
    res.send("Api Version 1 is working")
}

export const getAllUser =async (req: Request , res: Response) => {
    const data =await (req as any).db?.collection("userCollection").find().toArray()
    res.status(200).json({
        status: true,
        data: data
    })
}