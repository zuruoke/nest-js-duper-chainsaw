import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService {

    getProducts() {
        return { "message": "this is the zuruoke on nestjs" }
    }

    recieveProducts() {
        return { "statusCode": 200 }
    }
}