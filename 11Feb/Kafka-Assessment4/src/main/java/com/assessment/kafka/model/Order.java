package com.assessment.kafka.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
/**
 * 
 * @author Prem Kagrani
 *
 */
@Getter
@Setter
@ToString
//Fields in an order
public class Order {
	private String item;
	private float price;
}
