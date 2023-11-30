package com.felipe.java_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.felipe.java_api.model.StoryModel;
import com.felipe.java_api.model.UserModel;

import java.util.List;

public interface StoryRepository extends MongoRepository<StoryModel, String> {

    // nome: "felipe", -> filtrar pelo campo nome exatamente igual a felipe

    // name: {$regex: /santos/i} -> filtrar pelo nome que tenha santos, onde não
    // importa ser maiusculo ou não

    // '$or': [ { version: 4 }, { name: "Andrea Le" } ] -> comparacao ou,

    // name: { $not: { $eq: "Andrea Le" } } } -> filtar nome diferente de Andrea Le

    // version: {$lte: 4}, -> versao menor ou igual a 4

    // varsion: {$lt: 4}, -> versao menor que 4

    // dateCreated: { $gt: Date('2000-06-22') } } -> data criada maior que a data
    // 22/06/2000

    // dateCreated: { $gte: Date('2000-06-22') } } -> data criada maior ou igual a
    // data 22/06/2000

    // quantity: { $in: [20, 50] } } -> quantidade dentro dos valores do array 20 ou
    // 50

    @Query("{'idOwner.id': ?0}")
    List<StoryModel> findByIdOwner(String id);

    @Query("{'title': ?0}")
    List<StoryModel> findByTitle(String title);

    @Query("{'updatedAt': ?0}")
    List<StoryModel> findByUpdateAt(String updatedAt);

    @Query("{'category': ?0}")
    List<StoryModel> findByCategory(String category);
}
