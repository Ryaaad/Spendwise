import prisma from "../lib/prisma";



export async function getAllHandler( req,res,next){
    try{
        const Spent=await prisma.Spent.findMany();
    return res.status(200).json({
        status:200,
        data:Spent
    })
    }
    catch(err){
        console.error(err)
        next(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }

}

export async function postHandler(req,res){
    try{
        const data=req.body
        const Spent=await prisma.Spent.create({
            data:data
        });
    return res.status(201).json({
        status:201,
        data:Spent
    })
    }
    catch(err){
        console.error(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}

export async function getFromProductHandler(req,res){
    try{
        const {id}=req.query
        if(!id) return res.status(400).json({status:400,message:"INvalid id"})
        const Spent=await prisma.Spent.findMany({
            where:{
                idPR:id*1
            }
        });
    if(!Spent) return res.status(404).json({status:404,message:"No money was spent on this Product"})
    return res.status(200).json({
        status:200,
        data:Spent
    })
    }
    catch(err){
        console.error(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }

}
export async function getFromUserHandler(req,res){
    try{
        const {id}=req.query
        if(!id) return res.status(400).json({status:400,message:"INvalid id"})
        const Spent=await prisma.Spent.findMany({   
            where:{
            userId:id*1
           }
        });
    if(!Spent) return res.status(404).json({status:404,message:"this user hasnt spent anything "})
    return res.status(200).json({
        status:200,
        data:Spent
    })
    }
    catch(err){
        console.error(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }

}

////
export async function getHandler(req,res){
    try{
        const {id}=req.query
        const Spent=await prisma.Spent.findUnique({
         where: {
            idSpent:+id
         },
        })
        if(!Spent) return res.status(404).send('existe pas')
        
         res.status(200).json({ status:200,data:Spent});
    }
    catch(err){
        console.error(err)
        return res.status(500).json({status:500,message:"an error occurred"})
    }
}
export async function patchHandler(req,res){
    try{
        const {id}=req.query
        const Spent=await prisma.Spent.update({
         where: {
           idSpent:+id
         },
         data:req.body,
        })
         res.status(201).json({ status:201,data:Spent});
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
  
      const existingProduct = await prisma.Spent.findUnique({
        where: {
            idSpent: parseInt(id),
        },
      });
  
      if (!existingProduct) {
        return res
          .status(404)
          .json({ status: 404, message: "User not found" });
      }
  
      const deletedSpent= await prisma.Spent.delete({
        where: {
          idSpent: parseInt(id),
        },
      });
  
      return res.status(204).send()
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: "An error occurred" });
    }
  }
  