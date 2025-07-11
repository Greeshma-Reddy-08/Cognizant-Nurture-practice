package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    @Autowired
    private ApplicationContext context;

    @Autowired
    private CountryService countryService;

    @RequestMapping("/country")
    public Country getCountryIndia() {
        System.out.println("START - getCountryIndia()");
        Country country = (Country) context.getBean("in");
        System.out.println("END - getCountryIndia()");
        return country;
    }

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        System.out.println("START - getCountry(" + code + ")");
        Country country = countryService.getCountry(code);
        System.out.println("END - getCountry(" + code + ")");
        return country;
    }
}
