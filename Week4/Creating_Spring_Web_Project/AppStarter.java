package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class AppStarter {

    private static final Logger LOGGER = LoggerFactory.getLogger(AppStarter.class);

    public static void main(String[] args) {
        LOGGER.info("STARTING AppStarter...");
        SpringApplication.run(AppStarter.class, args);
        LOGGER.info("AppStarter STARTED successfully.");
    }
}
