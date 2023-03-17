import prisma from "../lib/prisma";


export async function postHandler(req,res,next){
    try {
        const {id}=req.query
        const {AchiId}=req.body
        if(!id) return res.status(400).send("UserId is Messing")
        if(!AchiId) return res.status(400).send("AchiId is Messing")
        const Have=await prisma.Have.create({
          data: { userId:+id,
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
export async function getAllHandler(req,res,next){
    try {
        const {id}=req.query
      
        if(!id) return res.status(400).send("id is Messing")
        const Have=await prisma.Have.findMany({
       where:{
        userId:+id
       }
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
export async function deleteHandler(req, res) {
    try {
      const {id} = req.query;
      const {AchiId}=req.body
      if (!id) {
        return res.status(400).json({ status: 400, message: "Invalid ID" });
      }
  
      const existing = await prisma.Have.findUnique({
        where: {
            userId_AchiId: {
            userId:+id,
            AchiId
        }
        },
      });
  
      if (!existing) {
        return res
          .status(404)
          .json({ status: 404, message: " not found" });
      }
  
      const deleted = await prisma.Have.delete({
        where: {
            userId_AchiId: {
                userId:+id,
                AchiId
            }
        },
      });
      return res.status(204).send()
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: "An error occurred" });
    }
}