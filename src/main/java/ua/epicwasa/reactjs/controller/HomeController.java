package ua.epicwasa.reactjs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/a")
public class HomeController {

    @GetMapping("/")
    public String model(Model model){
        return "greeting";
    }


}
