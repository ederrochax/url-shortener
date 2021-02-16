import { Router } from 'express';
import { UrlController } from "./controllers/UrlController";

const routes = Router();
const url = new UrlController();

routes.get("/:hash_url", url.getUrl);
routes.post("/encurtador", url.createShortenUrl);

export default routes;