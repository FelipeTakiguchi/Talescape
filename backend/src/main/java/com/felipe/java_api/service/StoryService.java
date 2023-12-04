package com.felipe.java_api.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.felipe.java_api.model.ContentModel;
import com.felipe.java_api.model.StoryModel;
import com.felipe.java_api.model.UserModel;
import com.felipe.java_api.repository.StoryRepository;

@Service
public class StoryService {

    @Autowired
    private StoryRepository storyRepository;

    // @Value("${aws.accessKeyId}")
    // private String accessKey;

    // @Value("${aws.secretKey}")
    // private String secretKey;

    // @Value("${aws.bucket}")
    // private String bucket;

    // public void saveImage(MultipartFile file) throws IOException {
    // String fileName = file.getOriginalFilename();
    // InputStream filePath = file.getInputStream();

    // var operacoesS3 = new OperacoesS3(accessKey, secretKey);
    // var origemArquivo = "/home/teco/temp/s3/hino.jpg";
    // var destinoArquivo = "senai/"+fileName;
    // operacoesS3.enviarArquivo(bucket, destinoArquivo, filePath);
    // operacoesS3.listarArquivos(bucket).forEach(System.out::println);

    // operacoesS3.deletarArquivo(bucket, destinoArquivo);
    // operacoesS3.listarArquivos(bucket).forEach(System.out::println);

    // }

    public StoryModel save(StoryModel storyModel) {
        return this.storyRepository.save(storyModel);
    }

    public void save(String id, String title, String text, List<ContentModel> elements, String category, List<String> subCategories, UserModel idOwner, Boolean viewed, List<UserModel> likes, Date createdAt, Date updatedAt) {
        this.storyRepository.save(new StoryModel(id, title, text, elements, category, subCategories, idOwner, viewed, likes, createdAt, updatedAt));
    }

    public List<StoryModel> findAll() {
        return (List<StoryModel>) this.storyRepository.findAll();
    }

    public StoryModel findById(String id) {
        return this.storyRepository.findbyId(id);
    }

    public List<StoryModel> findByLoved(String idOwner) {
        return (List<StoryModel>) this.storyRepository.findLoved(idOwner);
    }

    public List<StoryModel> findByIdOwner(String idOwner) {
        return (List<StoryModel>) this.storyRepository.findByIdOwner(idOwner);
    }

    public List<StoryModel> findByTitle(String title) {
        return (List<StoryModel>) this.storyRepository.findByTitle(title);
    }

    public List<StoryModel> findByCategory(String category) {
        return (List<StoryModel>) this.storyRepository.findByCategory(category);
    }

    public List<StoryModel> findByUpdatedAt(String updatedAt) {
        return (List<StoryModel>) this.storyRepository.findByUpdateAt(updatedAt);
    }

    public void delete(String id) {
        this.storyRepository.deleteById(id);
    }

}