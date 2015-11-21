package com.github.georgwittberger.spring_boot_angularjs_demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DemoController {
  @RequestMapping("/person")
  public Person getPerson() {
    return new Person("James", "Bond");
  }
}
