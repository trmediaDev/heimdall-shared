import { ObjectId } from 'bson';

export class CategorySubcategory {
    categoryId: ObjectId;
    subcategoryId?: ObjectId;
}
