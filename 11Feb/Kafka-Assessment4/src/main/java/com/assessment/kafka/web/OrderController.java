package com.assessment.kafka.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.assessment.kafka.model.Order;
import com.assessment.kafka.service.OrderService;
/**
 * 
 * @author Prem Kagrani
 *
 */
@RestController
public class OrderController {
	@Autowired
	private final OrderService orderService;

	public OrderController(OrderService orderService) {
		this.orderService = orderService;
	}
	//Post method will be mapped for this domain
	@PostMapping("/order")
	public void orders(@RequestBody Order order) {
		orderService.sendOrder(order);
	}
}
