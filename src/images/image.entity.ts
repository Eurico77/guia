import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

import { GuideService } from './../guide-services/guide-service.entity';

@Entity({name: 'image'})
export class ImageEntity {

    @PrimaryGeneratedColumn({name: 'image_id'})
    id: number;

    @ManyToOne(type => GuideService, guideService => guideService.images, { onDelete: 'CASCADE' })
    guideService: GuideService;

    @Column()
    url: string;

    @Column({nullable: true})
    base64: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
