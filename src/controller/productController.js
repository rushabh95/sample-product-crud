const db = require("../models");
const products = db.products;

module.exports.addProduct = async (req,res)=>{
    try{
        const {body} = req;
        const result = await products.create(body)
        if(result){
            res.status(200).json({
                success: true,
                message:"product created",
                data: result
            })
        }else{
            res.status(401).json({
                success:false,
                message:"something went wrong",
                result: {}
            })
        }
    }catch(err){
        throw Error(err)
    }
}

module.exports.getProductById = async(req,res)=>{
    try{
        const {params:{id}} = req;
        const result = await products.findOne({where:{id}})
        if(result){
            res.status(200).json({
                success: true,
                message:"product shown siccess",
                data: result
            })
        }else{
            res.status(401).json({
                success:false,
                message:"something went wrong",
                result: {}
            })
        }
    }catch(err){
        console.log(err)
    }
}

module.exports.getAllProduct = async(req,res)=>{
    try{
        const result = await products.findAll()
        console.log(result)
        if(result){
            res.status(200).json({
                success: true,
                message:"product shown siccess",
                data: result
            })
        }else{
            res.status(401).json({
                success:false,
                message:"something went wrong",
                result: {}
            })
        }
    }catch(err){
        console.log(err)
    }
}

module.exports.updateProductById = async(req,res)=>{
    try{
        const {params:{id},body} = req;
        const result = await products.update(body,{where: {id}})
        if(result){
            res.status(200).json({
                success: true,
                message:"product updated siccess",
                data: result
            })
        }else{
            res.status(401).json({
                success:false,
                message:"something went wrong",
                result: {}
            })
        }
    }catch(err){
        throw Error(err)
    }
}

module.exports.deleteProductById = async(req,res)=>{
    try{
        const {params:{id}} = req;
        const result = await products.destroy({where: {id}})
        if(result){
            res.status(200).json({
                success: true,
                message:"product deleted siccess",
                data: result
            })
        }else{
            res.status(401).json({
                success:false,
                message:"something went wrong",
                result: {}
            })
        }
    }catch(err){
        throw Error(err)
    }
}