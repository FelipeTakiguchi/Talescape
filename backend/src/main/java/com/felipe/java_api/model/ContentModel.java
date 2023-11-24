package com.felipe.java_api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
@Document("content")
public class ContentModel {
    @Id
    private String id;
    private String type;
    private String content;
    private Integer posX;
    private Integer posY;
    private Integer posZ;

    public ContentModel(String type, String content, Integer posX, Integer posY, Integer posZ){
        this.type= type;
        this.content = content;
        this.posX = posX;
        this.posY = posY;
        this.posZ = posZ;
    }

    public ContentModel(String id) {
        this.id = id;
    }

    public ContentModel() {
    }
}