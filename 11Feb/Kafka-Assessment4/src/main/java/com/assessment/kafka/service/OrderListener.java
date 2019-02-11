package com.assessment.kafka.service;

import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;
import com.assessment.kafka.stream.OrderStreams;
import lombok.extern.slf4j.Slf4j;
import com.assessment.kafka.model.Order;
/**
 * 
 * @author Prem Kagrani
 *
 */
@Component
@Slf4j
//Receiving Order in Subscriber channels
public class OrderListener {
	@StreamListener(OrderStreams.INPUT)
	public void handleExpensiveOrders(@Payload Order order) {
		log.info("Expensive Order received{}",order);
	}
	@StreamListener(OrderStreams.INPUT2)
	public void handleNonExpensiveOrders(@Payload Order order) {
		log.info("Non Expensive Order received{}",order);
	}
}
