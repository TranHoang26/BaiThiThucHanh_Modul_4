package com.codegym.service.impl;

import com.codegym.model.Promotion;
import com.codegym.repository.PromotionRepository;
import com.codegym.service.IPromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PromotionService implements IPromotionService {

    @Autowired
    private PromotionRepository promotionRepository;

    @Override
    public List<Promotion> getAllPromotions() {
        return promotionRepository.findAll();
    }

    @Override
    public Promotion getPromotionById(Long id) {
        Optional<Promotion> promotionOptional = promotionRepository.findById(id);
        return promotionOptional.orElse(null);
    }

    @Override
    public Promotion createPromotion(Promotion promotion) {
        return promotionRepository.save(promotion);
    }

    @Override
    public Promotion updatePromotion(Long id, Promotion promotion) {
        if (promotionRepository.existsById(id)) {
            promotion.setId(id);
            return promotionRepository.save(promotion);
        }
        return null;
    }

    @Override
    public void deletePromotion(Long id) {
        promotionRepository.deleteById(id);
    }

    @Override
    public List<Promotion> searchByLevel(Long level) {
        return promotionRepository.findByLevel(level);
    }
}