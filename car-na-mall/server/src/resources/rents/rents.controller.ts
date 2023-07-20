import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interfaces/controller.interface";
import HttpException from "@/utils/exceptions/http.exception";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "./rents.validation";
import authenticated from "@/middleware/authenticated.middleware";
import RentService from "./rents.service";

class RentController implements Controller {
    public path = '/rents';
    public router = Router();
    private RentService = new RentService();


    constructor(){
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}/create`,
            
            validationMiddleware(validate.craft),
            this.create
        );
        this.router.get(
            `${this.path}`,
            this.getAll
        );
        this.router.get(
            `${this.path}/:id`,
            this.getOne
        );
        this.router.post(
            `${this.path}/:id/edit`,
            validationMiddleware(validate.craft),
            this.editRent
        );
        this.router.post(
            `${this.path}/:id/delete`,
            this.deleteRent
        );
        this.router.post(
            `${this.path}/:id/link`,
            validationMiddleware(validate.rentInfo),
            this.updateInfo
        );
        
    }
    
    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) : Promise<Response | void> => {
        try {
         const {model, image, doors, seats, transmission, price, ownerId} = req.body;

         const post = await this.RentService.craft(model, image, doors, seats, transmission, price, ownerId);

         res.status(201).json({post});

        } catch(err: any) {
           next(new HttpException(400, 'Cannot create rent'));
        }
    }

    private getAll = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) : Promise<Response | void> => {
        try {
            const resu = await this.RentService.getRents();
            res.status(200).json({resu});
        } catch (error) {
            return next(new HttpException(404, 'Can\'t reach rents'))
        }
    }
    private getOne = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) : Promise<Response | void> => {
        try {
            const {id} = req.body;
            const resu = await this.RentService.getOneRent(id);
            res.status(200).json({resu});
        } catch (error) {
            return next(new HttpException(404, 'Can\'t reach rents'))
        }
    }
    private editRent = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) : Promise<Response | void> => {
        try {
            const {id, update} = req.body;
            const resu = await this.RentService.updateRent(id, update);
            res.status(200).json({resu});
        } catch (error) {
            return next(new HttpException(404, 'Can\'t reach rents'))
        }
    }
    private deleteRent = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) : Promise<Response | void> => {
        try {
            const {id} = req.body;
            const resu = await this.RentService.deleteRent(id);
            res.status(200).json({resu});
        } catch (error) {
            return next(new HttpException(404, 'Can\'t reach rents'))
        }
    }
    private updateInfo = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) : Promise<Response | void> => {
        try {
            const {id, update} = req.body;
            const resu = await this.RentService.updateRentOffer(id, update);
            res.status(200).json({resu});
        } catch (error) {
            return next(new HttpException(404, 'Can\'t reach rents'))
        }
    }

}

export default RentController;