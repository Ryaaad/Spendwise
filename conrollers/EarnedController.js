import prisma from "../lib/prisma";



export async function getAllHandler(req,res,next){
    try{
        const Earns=await prisma.Earn.findMany();
    return res.status(200).json({
        status:200,
        data:Earns
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
        const Earns=await prisma.Earn.findUnique({
            where:{
                idEarn:id*1
            }
        });
    if(!Earns) return res.status(404).json({status:404,message:"no User found"})
    return res.status(200).json({
        status:200,
        data:Earns
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
        const Earns=await prisma.Earn.create({
            data:data
        });
    return res.status(201).json({
        status:201,
        data:Earns
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
        const Earn=await prisma.Earn.update({
         where: {
            idEarn:Number(id)
         },
         data:req.body,
        })
         res.status(201).json({ status:201,data:Earn});
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
  
      const existingEarn = await prisma.Earn.findUnique({
        where: {
          idEarn: parseInt(id),
        },
      });
  
      if (!existingEarn) {
        return res
          .status(404)
          .json({ status: 404, message: "Earn not found" });
      }
  
      const deletedEarn = await prisma.Earn.delete({
        where: {
          idEarn: parseInt(id),
        },
      });
  
      return res.status(204).send()
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: "An error occurred" });
    }
  }
  