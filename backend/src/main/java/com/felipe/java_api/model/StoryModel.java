package com.felipe.java_api.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
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
    private List<ContentModel> elements;
    private Date createdAt;
    private Date updatedAt;

    public StoryModel(String title, String text, Date createdAt) {
        this.title = title;
        this.text = text;
        this.createdAt = createdAt;
    }

    public StoryModel(String title, List<ContentModel> elements, Date createdAt) {
        this.title = title;
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