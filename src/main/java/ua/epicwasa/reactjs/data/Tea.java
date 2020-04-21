package ua.epicwasa.reactjs.data;




import javax.persistence.*;


@Entity(name = "tea")
public class Tea {

    public Tea( String name, String origin) {
        this.name = name;
        this.origin = origin;
    }

    public Tea() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn( name = "sort_id")
    private TeaSort teaSort;

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    private String origin;

    public Long getId() {
        return id;
    }


    public TeaSort getTeaSort() {
        return teaSort;
    }

    public void setTeaSort(TeaSort teaSort) {
        this.teaSort = teaSort;
    }
}
