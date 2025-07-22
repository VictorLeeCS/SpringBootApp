package com.firstSpringBoot.testApp1.repo;

import com.firstSpringBoot.testApp1.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface ItemRepo extends JpaRepository<Item, Integer> {
}
