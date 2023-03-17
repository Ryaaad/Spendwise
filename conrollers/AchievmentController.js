import prisma from "../lib/prisma";



export async function getAllHandler(req,res,next){
    try{
        const Achievements=await prisma.Achievement.findMany();
    return res.status(200).json({
        status:200,
        data:Achievements
    })
    }
    catch(err){
        console.error(err)
        next(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }

}

export async function getHandler(req,res){
    try{
        const {id}=req.query
        if(!id) return res.status(400).json({status:400,message:"INvalid id"})
        const Achievements=await prisma.Achievement.findUnique({
            where:{
                idAch:id*1
            }
        });
    if(!Achievements) return res.status(404).json({status:404,message:"no User found"})
    return res.status(200).json({
        status:200,
        data:Achievements
    })
    }
    catch(err){
        console.error(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }

}

export async function postHandler(req,res){
    try{
        const data=req.body
        const Achievements=await prisma.Achievement.create({
            data:data
        });
    return res.status(201).json({
        status:201,
        data:Achievements
    })
    }
    catch(err){
        console.error(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function patchHandler(req,res){
    try{
        const {id}=req.query
        const Achievement=await prisma.Achievement.update({
         where: {
            idAch:Number(id)
         },
         data:req.body,
        })
         res.status(201).json({ status:201,data:Achievement});
    }
    catch(err){
        console.error(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function deleteHandler(req, res) {
    try {
      const { id } = req.query;
  
      if (!id) {
        return res.status(400).json({ status: 400, message: "Invalid ID" });
      }
  
      const existingAchievement = await prisma.Achievement.findUnique({
        where: {
          idAch: parseInt(id),
        },
      });
  
      if (!existingAchievement) {
        return res
          .status(404)
          .json({ status: 404, message: "Achievement not found" });
      }
  
      const deletedAchievement = await prisma.Achievement.delete({
        where: {
          idAch: parseInt(id),
        },
      });
  
      return res.status(204).send()
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: "An error occurred" });
    }
  }
  