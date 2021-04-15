const Author = require("../../author/models/Author")
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")
const authorPresenter = require("../presenter/authorPresenter")


async function index(request, response, next) {
    try {
        const authors = await Author.find();
        response.json(authors.map((author)=>{
            return authorPresenter.present(author);
        }))
    } catch (error) {
        next(ResponseCode.SERVER_ERROR)
    }  
}

async function pagination(request, response, next){
    try{
        let { page=1,limit=2} = request.query;
        page < 0 ? page = 1 : page;
        limit < 8 ? limit = 8 : limit;
        const authers = await Author.find()
        .sort('authorDob')
        .limit(limit)
        .skip((page-1) * limit).exec();  
        const authornum = await Author.estimatedDocumentCount()
        const numberOfPages = Math.ceil(authornum / limit)
        const presentedAuthors = authers.map((author)=>{
            return authorPresenter.present(author);
        });
        response.json({
            authors: presentedAuthors,
            pages: numberOfPages
        });
        console.log(response);
    }
    catch(err){
        next(err);
    }
}


async function store(request, response, next) {
    const authorRequest = request.body
    console.log(authorRequest)

    const author = new Author ({
        autherFirstName: authorRequest.firstName,
        autherLastName: authorRequest.lastName,
        authorDob: authorRequest.birthDay,
        authorImage: authorRequest.image 
    })
    try {
        const savedAuthor = await author.save()
        response.json(authorPresenter.present(savedAuthor))
    }catch (error){
        next(error)
    }
}

async function show(request, response, next) {
    const { id } = request.params
    try {
        const author = await Author.findById(id).populate("authorBooks").exec();     
        response.json(authorPresenter.present(author))
    } catch (error) {
        next(error);
    }
}

async function destroy(request, response, next) {
    const { id } = request.params
    try {
        const author = await Author.deleteOne({_id: id})
        response.json({
            status : ResponseCode.SUCCESS,
            message: ResponseMessage.DELETE_MESSAGE
        });
    }catch(error) {
        console.log(error);
        next(ResponseCode.SERVER_ERROR)
    }
}

async function update(request, response, next) {
    const { id } = request.params;
    const author = request.body
    const updatedAuther = {
        ...(author.firstName ? { autherFirstName: author.firstName } : {}),
        ...(author.lastName ? { autherLastName: author.lastName } : {}),
        ...(author.birthDay ? { authorDob: author.birthDay } : {}),
        ...(author.image ? { authorImage: author.image } : {}),
    }

    try {
        await Author.findByIdAndUpdate({ _id: id }, updatedAuther)
        response.json({
            status : ResponseCode.SUCCESS,
            message: ResponseMessage.UPDATE_MESSAGE
            // message: "msa msa"
        });
    }catch(error){
        next(error)
    }
}

module.exports = {
    index,
    store,
    show,
    destroy,
    update,
    pagination
}