package com.practice.kafka.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@Builder
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Greetings {
	private long timestamp;
	private String message;

}
