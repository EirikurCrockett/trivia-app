import prisma from "../../../../components/prisma"

const GetCategories = async (req, res) => {

    const categories = await prisma.Category.find() 
        .catch(err => console.log(err))

    res.json(categories)
}


export default GetCategories