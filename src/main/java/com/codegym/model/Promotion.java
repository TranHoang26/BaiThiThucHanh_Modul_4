package com.codegym.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Min;
import lombok.Data;
import lombok.Getter;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "promotions")
@Getter
public class Promotion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;

    @Future
    private LocalDate startDate;

    @Future
    private LocalDate endDate;

    @Min(value = 10001)
    private Long level;
    private String details;
}