import prisma from "../lib/prisma";



export async function getAllHandler(req,res,next){
    try{
        const Products=await prisma.Product.findMany();
    return res.status(200).json({
        status:200,
        data:Products
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
        const Products=await prisma.Product.findUnique({
            where:{
                idPR:id*1
            }
        });
    if(!Products) return res.status(404).json({status:404,message:"no User found"})
    return res.status(200).json({
        status:200,
        data:Products
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
        const Products=await prisma.Product.create({
            data:data
        });
    return res.status(201).json({
        status:201,
        data:Products
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
        const Product=await prisma.Product.update({
         where: {
            idPR:Number(id)
         },
         data:req.body,
        })
         res.status(201).json({ status:201,data:Product});
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
  
      const existingProduct = await prisma.product.findUnique({
        where: {
          idPR: parseInt(id),
        },
      });
  
      if (!existingProduct) {
        return res
          .status(404)
          .json({ status: 404, message: "Product not found" });
      }
  
      const deletedProduct = await prisma.product.delete({
        where: {
          idPR: parseInt(id),
        },
      });
  
      return res.status(204).send()
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: "An error occurred" });
    }
  }
  