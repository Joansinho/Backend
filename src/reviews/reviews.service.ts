import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class ReviewsService {

  constructor (@InjectRepository(Review)
  private reviwRepository:Repository<Review>){

  }
  create(payload: any) {
    const newReview = this.reviwRepository.create(payload)
    return this.reviwRepository.save (newReview);
  }

  findAll() {
    return this.reviwRepository.find()
  }

  findOne(id: number) {
    return this.reviwRepository.findOneBy(
      { id });
 }
  

  async update(id: number, payload: any) {
    const updReview = 
          await this.reviwRepository.findOneBy({id});
          return this.reviwRepository.merge(updReview, payload);
          return this.reviwRepository.save(updReview)
  }

  async remove(id: number) {
    const delReview = 
    await this.reviwRepository.findOneBy({id});
    this.reviwRepository.delete(delReview)
    return delReview   
  }
}
