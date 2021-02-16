import {Request, Response} from "express";
import {UrlService} from "../services/UrlService";

export class UrlController {
  
  public async createShortenUrl(request: Request, response: Response) {
      const { url } = request.body;
      const UrlServiceInstance = new UrlService();

      return await UrlServiceInstance.createShortenUrl(url, response);
  }

  public async getUrl(request: Request, response: Response) {
      const UrlServiceInstance = new UrlService();
      return await UrlServiceInstance.getUrl(request.params.hash_url, response); 
  }

}