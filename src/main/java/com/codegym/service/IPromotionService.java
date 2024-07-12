package com.codegym.service;


import com.codegym.model.Promotion;

import java.util.List;

public interface IPromotionService {

    List<Promotion> getAllPromotions();
    Promotion getPromotionById(Long id);
    Promotion createPromotion(Promotion promotion);
    Promotion updatePromotion(Long id, Promotion promotion);
    void deletePromotion(Long id);
    List<Promotion> searchByLevel(Long level);
}

