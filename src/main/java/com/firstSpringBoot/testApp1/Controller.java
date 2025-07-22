package com.firstSpringBoot.testApp1;

import com.firstSpringBoot.testApp1.model.Item;
import com.firstSpringBoot.testApp1.repo.ItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    private ItemRepo repo;

    @GetMapping("/items")
    public List<Item> getAllItems() {
        return repo.findAll();
    }

    @PostMapping("/items")
    public void postItem(@RequestBody Item tobeadded) {
        System.out.println("\n we made it here \n");
        repo.save(tobeadded);
    }

    @GetMapping("/items/{id}")
    public Item getItems(@PathVariable Integer id) {
        return repo.findById(id).orElse(new Item());
    }

    //using delete and add for update

    @DeleteMapping("/items/{id}")
    public Item deleteItems(@PathVariable Integer id) {
        Item temp = repo.findById(id).orElse(new Item());
        repo.deleteById(id);
        return temp;
    }

    @GetMapping("/")
    public String test() {
        return "This is a test";
    }


    @PostMapping("/addItem")
    public void addItem(@RequestBody Item item) {
        repo.save(item);
    }
}
