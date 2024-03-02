const Post = require('../models/postModels');

const createPost = async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            date: req.body.date,
            image: req.file.filename
        });
        const postData = await post.save();
        res.status(200).send({ success: true, msg: 'Post Data', data: postData });

    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

const getPosts= async(req,res)=>{
    try{
        const posts = await Post.find({});
        res.status(200).send({success:true, msg:'Post deleted Successfully:',data:posts});
    }
    catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

const deletePost= async(req,res)=>{
    try{
        const id= req.params.id;
        await Post.deleteOne({_id: id});
        res.status(200).send({ success: true, msg: 'Post deleted successfully !' });

    }catch(error){
        res.status(400).send({ success: false, msg: error.message });
    }
}

const updatePost = async(req,res)=>{
    try{
        if(req.file!== undefined){
            var id= req.body.id;
            var title= req.body.title;
            var date= req.body.date;
            var filename= req.file.filename;

            await Post.findByIdAndUpdate({_id:id},{$set:{title:title, date:date, image:filename}});
            res.status(200).send({success:true, msg:'Post Updated Successfully !'});
        }
        else{
            var id= req.body.id;
            var title= req.body.title;
            var date= req.body.date;        

            await Post.findByIdAndUpdate({_id:id},{$set:{title:title, date:date }});
            res.status(200).send({success:true, msg:'Post Updated Successfully !'});
        }
    }catch{
        res.status(400).send({ success: false, msg: error.message });
    }
}

module.exports = { 
    createPost,
    getPosts,
    deletePost,
    updatePost
 };