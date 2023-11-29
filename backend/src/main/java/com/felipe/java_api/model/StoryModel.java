package com.felipe.java_api.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("story")
public class StoryModel {
    @Id
    private String id;
    private String title;
    private String text;
    private String category;
    private List<String> subCategories;
    private List<ContentModel> elements;
    @DBRef
    private UserModel idOwner;
    private Boolean viewed;
    private List<UserModel> likes;
    private Date createdAt;
    private Date updatedAt;

    public StoryModel(String id, String title, String text, String category, Date createdAt) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.category = category;
        this.createdAt = createdAt;
    }

    public StoryModel(String title, String text, String category, Date createdAt) {
        this.title = title;
        this.text = text;
        this.category = category;
        this.createdAt = createdAt;
    }

    public StoryModel(String id, String title, String text, String category, List<String> subCategories, Date createdAt) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.category = category;
        this.subCategories = subCategories;
        this.createdAt = createdAt;
    }

    public StoryModel(String title, String text, String category, List<String> subCategories, Date createdAt) {
        this.title = title;
        this.text = text;
        this.category = category;
        this.subCategories = subCategories;
        this.createdAt = createdAt;
    }
    
    public StoryModel(String id, String title, String text, List<ContentModel> elements, String category, List<String> subCategories, UserModel idOwner, Boolean viewed, List<UserModel> likes, Date createdAt, Date updatedAt) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.elements = elements;
        this.category = category;
        this.subCategories = subCategories;
        this.idOwner = idOwner;
        this.viewed = viewed;
        this.likes = likes;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public StoryModel(StoryModel story) {
        this.title = story.getTitle();
        this.text = story.getText();
        this.elements = story.getElements();
        this.category = story.getCategory();
        this.subCategories = story.getSubCategories();
        this.viewed = story.getViewed();
        this.likes = story.getLikes();
        this.createdAt = story.getCreatedAt();
        this.updatedAt = story.getUpdatedAt();
    }

    public StoryModel(String title, String text, String category, Date createdAt, Date updatedAt) {
        this.title = title;
        this.text = text;
        this.category = category;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public StoryModel(String title, String category, List<ContentModel> elements, Date createdAt) {
        this.title = title;
        this.category = category;
        this.elements = elements;
        this.createdAt = createdAt;
    }

    public StoryModel(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public StoryModel(String id) {
        this.id = id;
    }

    public StoryModel() {
    }
}