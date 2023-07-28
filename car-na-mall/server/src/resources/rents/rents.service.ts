import RentsModel from "./rents.model";
import { Rent, Reserve } from "./rents.interface";

class RentService {
    private rents = RentsModel;

    public async craft(model: string,
        image: string,
        doors: number,
        seats: number,
        transmission: string,
        price: number,
        year:number,
        ownerId: string,): Promise<Rent | Error> {
            try {
                
                const rent = await this.rents.create({model, image, doors, seats, transmission, price, year, ownerId});

                return rent;
            } catch (error) {
                throw new Error(`Unable to create a rent`);
            }
        }

    public async getRents(): Promise<Rent[]> {
        try {
            return await this.rents.find();
        
        } catch (error:any) {
            throw new Error(error.message);
        }
    }    

    public async getOneRent(id: string): Promise<Rent> {
          try {
            const aRent = await this.rents.findById(id);
            if(!aRent){
                throw new Error('No such Rent!')
            }
            return aRent;
          } catch (error:any) {
            throw new Error(error.message)
          }
    }

    public async updateRent(id: string, rent: Rent): Promise<Rent | null> {
        try {
            const aRent = await this.rents.findById(id);
            if(!aRent){
                throw new Error('No such Rent!')
            }
            return await this.rents.findByIdAndUpdate(id, rent);
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    public async deleteRent(id:string): Promise<Rent | null> {
        try {
            const aRent = await this.rents.findById(id);
            if(!aRent){
                throw new Error('No such Rent!')
            }
            return await this.rents.findByIdAndDelete(id);
        } catch (error:any) {
            throw new Error(error.message);
        }

    }
    public async updateRentOffer(rentId: string,
        update: Reserve,
    ): Promise<string | Error | void> {
        try {
            const renta = await this.rents.findById(rentId);
            if (!renta) {
                throw new Error ('Unable to find a user with that Email Address')
            }
            renta.reserves.push(update);
            await renta.save();
            
        } catch (error) {
            throw new Error('Unable to login user');
        }
    }


}

export default RentService;