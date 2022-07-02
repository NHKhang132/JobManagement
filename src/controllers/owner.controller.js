import {Owner} from '../models/owner.js'
export const OwnerCtrl = {
    createOwner: async (req, res) => {
        const {name, phone, email, dob, avt, gender, password} = req.body;
        const newOwner = await Owner.create({
            name: name,
            phone: phone,
            email: email,
            dob: dob, 
            avt: avt,
            gender: gender, 
            password: password
        })
        res.json(newOwner)
    }

}
