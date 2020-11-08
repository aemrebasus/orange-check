package com.ocheck.api;

import com.ocheck.api.models.User;
import com.ocheck.api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class CheckOrangeApp {

	public static void main(String[] args) {
		SpringApplication.run(CheckOrangeApp.class, args);
		}

}
