package com.felipe.java_api.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.felipe.java_api.model.ContentModel;
import com.felipe.java_api.model.StoryModel;
import com.felipe.java_api.model.UserModel;
import com.felipe.java_api.service.AuthService;
import com.felipe.java_api.service.StoryService;
import com.felipe.java_api.service.UserService;

@RestController
@RequestMapping("/story")
public class StoryController {

    @Autowired
    private StoryService storyService;

    @Autowired
    private AuthService authService;
    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<StoryModel> getAllStory() {
        List<StoryModel> listRes = storyService.findAll();
        System.out.println(listRes);
        return listRes;
    }

    @GetMapping("/{title}")
    public List<StoryModel> getUserByTitle(@PathVariable String title) {
        List<StoryModel> listRes = storyService.findByTitle(title);
        return listRes;
    }

    @GetMapping("/{category}")
    public List<StoryModel> getUserByCategory(@PathVariable String category) {
        List<StoryModel> listRes = storyService.findByCategory(category);
        return listRes;
    }

    @PostMapping("")
    public void newStory(@RequestBody StoryModel newStory, @RequestHeader("Authorization") String token) {
        String id = this.authService.validateToken(token.replace("Bearer ", ""));
        
        StoryModel story = new StoryModel(newStory);
        
        story.setIdOwner(new UserModel(id));
        System.out.println("POSDZFJDSAPOFJASPO" + story);
        storyService.save(story);
    }

    @PutMapping("/{id}")
    public void putStory(@RequestBody StoryModel newStory, @PathVariable String id) {
        storyService.save((String) id, (String) newStory.getTitle(), (String) newStory.getText(),
                (List<ContentModel>) newStory.getElements(), (String) newStory.getCategory(),
                (List<String>) newStory.getSubCategories(), (UserModel) newStory.getIdOwner(),
                (Boolean) newStory.getViewed(), (List<UserModel>) newStory.getLikes(), (Date) newStory.getCreatedAt(),
                (Date) newStory.getUpdatedAt());
    }

    @DeleteMapping("/{id}")
    public void deleteStory(@PathVariable String id) {
        storyService.delete(id);
    }

}
