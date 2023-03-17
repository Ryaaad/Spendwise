import prisma from "../lib/prisma";


export async function postHandler(req,res,next){
    try {
        const {userId,AchiId}=req.body
        if(!userId) return res.status(400).send("UserId is Messing")
        if(!AchiId) return res.status(400).send("AchiId is Messing")
        const Have=await prisma.Have.create({
          data: { userId,
            AchiId}
        })
    res.status(201).json({
        status:201,
        data:Have
    })
    } catch (err) {
        console.error(err)
        next(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
 
}
export async function getHandler(req,res,next){
    try {
        const {userId,AchiId}=req.body
        // if(userId) return res.status(400).send("UserId is Messing")
        // if(AchiId) return res.status(400).send("AchiId is Messing")
        const Have=await prisma.Have.create({
            userId,
            AchiId
        })
    res.status(201).json({
        status:201,
        data:Have
    })
    } catch (error) {
        console.log(error);
        next(error)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
 
}