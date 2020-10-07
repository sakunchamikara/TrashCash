package com.WasteManagementSystem.Backend.controller;

// import java.util.HashMap;
import java.util.List;
// import java.util.Map;

import javax.validation.Valid;

import com.WasteManagementSystem.Backend.entity.SummaryStock;
import com.WasteManagementSystem.Backend.repository.SummaryStockRepository;
import com.WasteManagementSystem.Backend.service.TestStockService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SummaryStockController{

    @Autowired

    private SummaryStockRepository summaryStockrepo;
    private TestStockService service;

    @PostMapping("/summaryStock")
    public SummaryStock createSummaryStock(@Valid @RequestBody SummaryStock summaryStock, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			return null;
		}
        return summaryStockrepo.save(summaryStock);
    }

    @GetMapping("/summaryStock")
    public List<SummaryStock> getAllSummaryStocks() {
        return summaryStockrepo.findAll();
    }

    @GetMapping(path="/summaryStock/type")
	public @ResponseBody List<String> getAllWasteType() {
	    return summaryStockrepo.getAllWasteType();
    }

    @GetMapping(path="/summaryStockCount/type")
	public @ResponseBody List<Integer> getAllWaste() {
	    return summaryStockrepo.getAllWaste();
    }

    @GetMapping(path="/summaryStockId/type")
	public @ResponseBody List<Integer> getAllWasteId() {
    return summaryStockrepo.getAllWasteId();
    }

    @PutMapping("/summaryStock/{id}")
    public ResponseEntity<SummaryStock> updateSummaryStock(@PathVariable(value = "id") int summaryStockId,
         @Valid @RequestBody SummaryStock summaryStockDetails) throws ResourceNotFoundException {
        SummaryStock summaryStock = summaryStockrepo.findById(summaryStockId)
        .orElseThrow(() -> new ResourceNotFoundException("Waste not found for this id :: " + summaryStockId));

        summaryStock.setType(summaryStockDetails.getType());
        summaryStock.setTotal(summaryStockDetails.getTotal());
       
       
       ;
        final SummaryStock updatedSummaryStock = summaryStockrepo.save(summaryStock);
        return ResponseEntity.ok(updatedSummaryStock);
    }

    @GetMapping("/getwasteByType/{type}")
    public List<SummaryStock> getSummaryStock(@PathVariable String type) {
        return service.fetchUserByType(type);
    }

    // @GetMapping("/summaryStock")
    // public List<CollectedWaste> getAllSummaryStocks() {
    //     return summaryStockrepo.findAll();
    // }
  

    // @GetMapping("/summaryStockNew/{wasteType}")
    // public ResponseEntity<SummaryStock> findSummaryStockByWasteType(@PathVariable(value = "id") int summaryStockId)
    //     throws ResourceNotFoundException {
    //         SummaryStock summaryStock = summaryStockrepo.findByWasteType(summaryStockId)
    //       .orElseThrow(() -> new ResourceNotFoundException("type not found for this id :: " + summaryStockId));
    //     return ResponseEntity.ok().body(summaryStock);
    // }

    @GetMapping("/summaryStock/{id}")
    public ResponseEntity<SummaryStock>  getSummaryWastebyId(@PathVariable(value = "id") int summaryStockId)
        throws ResourceNotFoundException {
            SummaryStock summaryStock = summaryStockrepo.findById(summaryStockId)
          .orElseThrow(() -> new ResourceNotFoundException("Waste stock not found for this id :: " + summaryStockId));
        return ResponseEntity.ok().body(summaryStock);
    }
    
}