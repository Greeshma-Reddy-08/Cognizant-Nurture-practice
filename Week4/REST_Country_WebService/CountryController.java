package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @Autowired
    private ApplicationContext context;

    @RequestMapping("/country")
    public Country getCountryIndia() {
        // Logging start (optional)
        System.out.println("START - getCountryIndia()");
        
        Country country = (Country) context.getBean("in");

        // Logging end (optional)
        System.out.println("END - getCountryIndia()");
        return country;
    }
}
