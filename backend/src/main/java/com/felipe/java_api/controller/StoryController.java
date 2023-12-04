package com.felipe.java_api.controller;

import java.util.ArrayList;
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

    @GetMapping("")
    public List<StoryModel> getAllStory() {
        List<StoryModel> listRes = storyService.findAll();
        System.out.println(listRes);
        return listRes;
    }

    @GetMapping("/loved")
    public List<StoryModel> getStoryLoved(@RequestHeader("Authorization") String token) {
        String id = this.authService.validateToken(token.replace("Bearer ", ""));
        List<StoryModel> listRes = storyService.findByLoved(id);

        return listRes;
    }

    @GetMapping("/myPoems")
    public List<StoryModel> getStoryByUser(@RequestHeader("Authorization") String token) {
        String id = this.authService.validateToken(token.replace("Bearer ", ""));
        List<StoryModel> listRes = storyService.findByIdOwner(id);
        return listRes;
    }

    @GetMapping("/{title}")
    public List<StoryModel> getStoryByTitle(@PathVariable String title) {
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

    @PostMapping("/like")
    public void likeStory(@RequestBody String storyId, @RequestHeader("Authorization") String token) {
        String id = this.authService.validateToken(token.replace("Bearer ", ""));

        storyId = storyId.split("=")[0];

        StoryModel newStory = storyService.findById(storyId);

        List<UserModel> likes = new ArrayList();

        if (newStory.getLikes() != null)
            likes = newStory.getLikes();

        int find = -1;
        UserModel user = new UserModel(id);

        if (likes != null) {
            for (int i = 0; i < likes.size(); i++) {
                if (likes.get(i).getId().compareTo(user.getId()) == 0) {
                    find = i;
                }
            }
        }

        if (find >= 0)
            likes.remove(find);
        else
            likes.add(user);

        newStory.setLikes(likes);

        storyService.save((String) newStory.getId(), (String) newStory.getTitle(), (String) newStory.getText(),
                (List<ContentModel>) newStory.getElements(), (String) newStory.getCategory(),
                (List<String>) newStory.getSubCategories(), (UserModel) newStory.getIdOwner(),
                (Boolean) newStory.getViewed(), (List<UserModel>) newStory.getLikes(), (Date) newStory.getCreatedAt(),
                (Date) newStory.getUpdatedAt());
    }

    @PostMapping("/hasLike")
    public Boolean hasLike(@RequestBody List<String> likes, @RequestHeader("Authorization") String token) {
        System.out.println("Entreeeei");
        String id = this.authService.validateToken(token.replace("Bearer ", ""));

        System.out.println(likes);
        Boolean liked = false;

        for (String like : likes) {
            if(like.compareTo(id) == 0){
                liked = true;
            }
        }
        
        return liked;
    }

    @DeleteMapping("/{id}")
    public void deleteStory(@PathVariable String id) {
        System.out.println(id);
        storyService.delete(id);
    }

}
