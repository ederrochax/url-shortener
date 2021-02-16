import { Response } from "express";
import {Url} from "../models/Url";
import {generateHash, incrementDaysInDate} from "../utils";

export class UrlService {

    public async createShortenUrl(url: string, response: Response) {
        const hash = generateHash();
        const expires = incrementDaysInDate(7);
        const shortenUrl = `${process.env.API_HOST}/${hash}`

        try {
            const insert = await Url.insert({
              original_url: url,
              new_url: shortenUrl,
              expires_at: expires,
            });
            return  response.send({ newUrl: shortenUrl})
          } catch (err) {
            return response.status(500).send(`Erro: ${err} `);
          }
    }

    public async getUrl(hash_url: string, response: Response) {
        try {
            const url = await Url.findOne({
                where: {
                    new_url: `${process.env.API_HOST}/${hash_url}`,
                }
            })
            if (new Date() > url.expires_at) {
                return response
                .status(404)
                .send(`Link expirado`);
            }else{
                response.writeHead(301, { Location: url.original_url });
                response.end();
                return;
            }
        } catch (err) {
            return response
            .status(404)
            .send(`Link não encontrado`);
        }
    }

}