package kr.eddi.demo.lectureClass.aggregateRoot.food.controller;

import kr.eddi.demo.lectureClass.aggregateRoot.food.controller.form.FoodRegisterRequestForm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/food-test")
public class FoodController {
    @PostMapping(value = "/register",
            consumes = {MediaType.MULTIPART_FORM_DATA_VALUE,
                    MediaType.APPLICATION_JSON_VALUE})
    public void foodRegister(
            @RequestPart(value = "imageFile") MultipartFile imageFile,
            @RequestPart(value = "foodInfo") FoodRegisterRequestForm foodRegisterForm) {
        log.info("foodRegister()");
    }
}
