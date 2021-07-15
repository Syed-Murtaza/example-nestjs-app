import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Product } from './product';
export declare class ProductsService extends TypeOrmCrudService<Product> {
    constructor(repo: any);
}
