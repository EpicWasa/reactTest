package ua.epicwasa.reactjs.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface SortRepo extends CrudRepository<TeaSort, Long> {
}
