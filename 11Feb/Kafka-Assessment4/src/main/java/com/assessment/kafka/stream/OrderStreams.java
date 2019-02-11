package com.assessment.kafka.stream;
import org.springframework.cloud.stream.annotation.Input;
import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.SubscribableChannel;
import org.springframework.stereotype.Component;
/**
 * 
 * @author Prem Kagrani
 *
 */
//List of all channels
@Component
public interface OrderStreams {
	String INPUT="orders-in-expensive";
	String OUTPUT="orders-out-expensive";
	String INPUT2="orders-in-notExpensive";
	String OUTPUT2="orders-out-notExpensive";
	@Input(INPUT)
	SubscribableChannel expensiveInOrders();
	@Input(INPUT2)
	SubscribableChannel nonExpensiveInOrders();
	@Input(OUTPUT)
	MessageChannel expensiveOutOrders();
	@Output(OUTPUT2)
	MessageChannel nonExpensiveOutOrders();
	
}
