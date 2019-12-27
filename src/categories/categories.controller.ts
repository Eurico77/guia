import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { join } from 'path';
import * as express from 'express';

import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';
import { decodeBase64Image, fs, pathUrl } from './../utils/utils';

@Controller('categories')
export class CategoriesController {
    constructor(
        private categoriesService: CategoriesService     
    ) {}

    @Get()
    findAll(): Promise<Category[]> {
        return this.categoriesService.findAll();
    }

    @Get(':id')
    findOne(@Param() params): Promise<Category> {
        return this.categoriesService.findOne(params.id);
    }

    @Get(':id/posts')
    findOneWithPosts(@Param() params): Promise<Category> {
        return this.categoriesService.findOneWithPosts(params.id);
    }

    @Post()
    async create(@Body() createCategoryDto: CreateCategoryDto) {
        var cat = new Category();
        cat.name = createCategoryDto.name;

        var newIcon = decodeBase64Image(createCategoryDto.icon);
        (await fs).writeFile(join(process.cwd() + '/static/images/category/')+cat.name+'.png', newIcon.data, (err) => console.log(err));

        cat.icon = pathUrl + '/images/category/'+cat.name+'.png';

        cat.createdAt = new Date();
        cat.updatedAt = new Date();

        this.categoriesService.create(cat);
        return cat;
    }

    @Put(':id')
    edit(@Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
        return this.categoriesService.update(id, updateCategoryDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.categoriesService.remove(id);
    }
}
