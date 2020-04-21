package ua.epicwasa.reactjs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import ua.epicwasa.reactjs.data.SortRepo;
import ua.epicwasa.reactjs.data.Tea;
import ua.epicwasa.reactjs.data.TeaRepo;
import ua.epicwasa.reactjs.data.TeaSort;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/tea")
public class TeaController {



    @Autowired
    private TeaRepo repo;

    @Autowired
    private SortRepo sortRepo;

    @GetMapping("/sorts")
    public Iterable<TeaSort> listAllSorts(){
        return sortRepo.findAll();
    }

    @GetMapping("/list")
    public Iterable<Tea> listAll(){
        return repo.findAll();
    }



    @GetMapping("/{id}")
    public Tea viewTea(@PathVariable("id") long id) {
        Tea tea = repo.findById(id).get();
        ModelAndView model = new ModelAndView("teaview");
        // добавляем данные в модель
        model.addObject("tea", tea);
        return tea;
    }

    @PostMapping("/add")
    public void addTea(@RequestBody TeaBase base) {
        Tea tea = new Tea(base.name, base.origin);
        tea.setTeaSort(sortRepo.findById(Long.parseLong( base.teaSortID)).get());
        repo.save(tea);
    }

    @PutMapping("/{id}")
    public Tea updateTea(@RequestBody TeaBase base, @PathVariable("id") long id) {
        Tea tea = repo.findById(id).get();
        tea.setName(base.name);
        tea.setOrigin(base.origin);
        tea.setTeaSort(sortRepo.findById(Long.parseLong(base.teaSortID)).get());
        repo.save(tea);
        return tea;
    }

    @DeleteMapping("/{id}")
    public Iterable<Tea> deleteTea(@PathVariable("id") long id){
        repo.deleteById(id);
        return repo.findAll();
    }
}

class TeaBase{
    public String name;
    public String origin;
    public String teaSortID;
}