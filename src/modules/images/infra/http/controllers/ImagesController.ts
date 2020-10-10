import { Request, Response } from "express";
import {container} from 'tsyringe';
import CreateImageService from '@modules/images/services/CreateImageService';

export default class ImageController {
  public async create(request:Request ,response:Response):Promise<Response>{
    const { link } = request.body;
    const imageCreate = container.resolve(CreateImageService)
    const image = await imageCreate.execute({ link });
    return response.json(image)
  }
}