package com.felipe.java_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.felipe.java_api.model.UserModel;
import java.util.List;

public interface UserRepository extends MongoRepository<UserModel, String> {

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

    @Query("{'name': ?0}")
    List<UserModel> findByName(String name);

    @Query("{'name': ?1, 'age': ?0}")
    List<UserModel> findByAgeAndName(short age, String name);

}
