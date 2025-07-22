package com.firstSpringBoot.testApp1.repo;

import com.firstSpringBoot.testApp1.model.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface UserRepo extends JpaRepository<user, String> {
}
