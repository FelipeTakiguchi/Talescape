package com.felipe.java_api.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.felipe.java_api.dto.UserDTO;
import com.felipe.java_api.model.UserModel;
import com.felipe.java_api.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

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

    public UserModel save(UserModel userModel) {
        return this.userRepository.save(userModel);
    }

    public UserModel findById(String id) {
        var resp =  this.userRepository.findById(id);
        if(!resp.isEmpty()){
            return new UserModel(resp.toString());
        }
        throw new UsernameNotFoundException("User not found");
    }

    public void save(String id, String name, Date dateOfBirth, String biograpy) {
        this.userRepository.save(new UserModel(id, name, dateOfBirth, biograpy));
    }

    public List<UserDTO> findAll() {
        List<UserDTO> userDTOs = new ArrayList<>();
        
        List<UserModel> users = this.userRepository.findAll();
        for (UserModel userModel : users) {
            UserDTO userDTO = new UserDTO(userModel.getName(), userModel.getBiograpy(), userModel.getDateOfBirth(), userModel.getEmail());
            userDTOs.add(userDTO);
        }
        return userDTOs;
    }

    public List<UserDTO> findByName(String name) {
        List<UserDTO> userDTOs = new ArrayList<>();
        
        List<UserModel> users = this.userRepository.findByName(name);
        for (UserModel userModel : users) {
            UserDTO userDTO = new UserDTO(userModel.getName(), userModel.getBiograpy(), userModel.getDateOfBirth(), userModel.getEmail());
            userDTOs.add(userDTO);
        }
        return userDTOs;
    }

    public UserModel findByEmail(String email) {
         return this.userRepository.findByEmail(email);
    }

    public List<UserDTO> findByAgeAndName(short age, String name) {
        List<UserDTO> userDTOs = new ArrayList<>();
        
        List<UserModel> users = this.userRepository.findByAgeAndName(age, name);
        for (UserModel userModel : users) {
            UserDTO userDTO = new UserDTO(userModel.getName(), userModel.getBiograpy(), userModel.getDateOfBirth(), userModel.getEmail());
            userDTOs.add(userDTO);
        }
        return userDTOs;
    }

    public void delete(String id) {
        this.userRepository.deleteById(id);
    }

}