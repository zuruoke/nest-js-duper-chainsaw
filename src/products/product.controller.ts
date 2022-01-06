import { Controller, Get, Param, Post } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {
    constructor(private readonly productService: ProductService) {

    }

    @Get("/element/tree")
    getRequest() {
        return this.productService.getProducts()
    }

    @Get(":id/:name")
    receiveResponse(@Param() params: { id: string, name: string }) {
        console.log(params.id)
        console.log(params.name)
        return this.productService.recieveProducts()
    }

    @Post("add")
    postResponse() {
        return
    }
}