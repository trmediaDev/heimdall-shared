import { ObjectId } from 'mongodb';

export class CategorySubcategory {
    categoryId: ObjectId;
    subcategoryId?: ObjectId;
}
