package ua.epicwasa.reactjs.data;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class TeaSort {

    public long getSortId() {
        return sortId;
    }

    public String getSortName() {
        return sortName;
    }

    public void setSortName(String sortName) {
        this.sortName = sortName;
    }

    public int getPreferredTemperature() {
        return preferredTemperature;
    }

    public void setPreferredTemperature(int preferredTemperature) {
        this.preferredTemperature = preferredTemperature;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long sortId;

    private String sortName;


    private int preferredTemperature;

}
