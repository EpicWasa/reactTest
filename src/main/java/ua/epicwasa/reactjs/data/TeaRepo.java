package ua.epicwasa.reactjs.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface TeaRepo extends CrudRepository<Tea, Long> {


}