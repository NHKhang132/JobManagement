import {Shop} from '../models/shop.js'
import {Address} from '../models/address.js'
export const ShopCtrl = {
    createShop: async (req, res) => {
        const {name, phone, email, logo, ownerId, number, street, ward, district, province} = req.body;
        const newAddress = await Address.create({
            number: number,
            street: street,
            ward: ward,
            district: district,
            province: province
        })  
        const newShop = await Shop.create({
            name: name,
            logo: logo,
            phone: phone,
            email: email,
            ownerId: ownerId,
            addressId: newAddress.id
        })
        
        res.json(newShop)
    },

    getShopbyOwnerId: async (req, res) => {
        const ownerId = req.params.id;
        const shops = await Shop.findAll({
            where:{
                ownerId: ownerId
            }
        })
        console.log(shops)
        res.json(shops)
    }

}