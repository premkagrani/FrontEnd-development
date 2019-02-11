package com.assessment.kafka.config;

import org.springframework.cloud.stream.annotation.EnableBinding;

import com.assessment.kafka.stream.OrderStreams;
/**
 * 
 * @author Prem Kagrani
 *
 */
//Configuring Channel Binding
@EnableBinding(OrderStreams.class)
public class StreamsConfig {

}
