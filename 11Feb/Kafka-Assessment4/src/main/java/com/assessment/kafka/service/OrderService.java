package com.assessment.kafka.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;
import org.springframework.util.MimeTypeUtils;

import com.assessment.kafka.model.Order;
import com.assessment.kafka.stream.OrderStreams;

import lombok.extern.slf4j.Slf4j;

/**
 * 
 * @author Prem Kagrani
 *
 */

@Service
@Slf4j
public class OrderService {
	@Autowired
	private final OrderStreams orderStreams;

	public OrderService(OrderStreams orderStreams) {
		this.orderStreams = orderStreams;
	}

	public void sendOrder(Order order) {
		log.info("Sending order");
		MessageChannel messageChannel;
		// Two message channels for sending according to business logic
		// Expensive channel
		if (order.getPrice() >= 50.0) {
			log.info("Sending order through Expensive channel");
			messageChannel = orderStreams.expensiveOutOrders();
			messageChannel.send(MessageBuilder.withPayload(order)
					.setHeader(MessageHeaders.CONTENT_TYPE, MimeTypeUtils.APPLICATION_JSON).build());
		}
		// Non Expensive channel
		else {
			log.info("Sending order through Non Expensive channel");
			messageChannel = orderStreams.nonExpensiveOutOrders();
			messageChannel.send(MessageBuilder.withPayload(order)
					.setHeader(MessageHeaders.CONTENT_TYPE, MimeTypeUtils.APPLICATION_JSON).build());
		}
	}
}
