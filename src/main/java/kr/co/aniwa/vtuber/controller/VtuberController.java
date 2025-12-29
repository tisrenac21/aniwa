package kr.co.aniwa.vtuber.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/vtuber")
@Controller
public class VtuberController {

    @GetMapping("/list/{type}")
    public String index(@PathVariable("type") String type, Model model) {

        model.addAttribute("type", type);

        return "vtuber/vtuber_list";
    }

    @GetMapping("/write/{type}")
    public String write(@PathVariable("type") String type, Model model) {
        model.addAttribute("type", type);
        return "vtuber/vtuber_write";
    }

}
