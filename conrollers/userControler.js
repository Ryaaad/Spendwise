import prisma from "../lib/prisma";



export async function getAllHandler( req,res,next){
    try{
        const Users=await prisma.User.findMany();
    return res.status(200).json({
        status:200,
        data:Users
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
        const User=await prisma.User.findUnique({
            where:{
                id:id*1
            }
        });
    if(!User) return res.status(404).json({status:404,message:"no User found"})
    return res.status(200).json({
        status:200,
        data:User
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
        const User=await prisma.User.create({
            data:data
        });
    return res.status(201).json({
        status:201,
        data:User
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
        const user=await prisma.User.update({
         where: {
           id:Number(id)
         },
         data:req.body,
        })
         res.status(201).json({ status:201,data:user});
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
  
      const existingProduct = await prisma.User.findUnique({
        where: {
            id: parseInt(id),
        },
      });
  
      if (!existingProduct) {
        return res
          .status(404)
          .json({ status: 404, message: "User not found" });
      }
  
      const deletedUser= await prisma.User.delete({
        where: {
          id: parseInt(id),
        },
      });
  
      return res.status(204).send()
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: "An error occurred" });
    }
  }
  