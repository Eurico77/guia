import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { User } from './../users/user.entity';
import { PostEntity } from './../posts/post.entity';
import { Category } from './../categories/category.entity';
import { GuideService } from './../guide-services/guide-service.entity';
import { ImageEntity } from './../images/image.entity';

export const dbconfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'guiasertao',
    entities: [
        User,
        PostEntity,
        Category,
        GuideService,
        ImageEntity,
    ],
    synchronize: true,
};
