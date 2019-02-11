package com.practice.kafka.config;

import org.springframework.cloud.stream.annotation.EnableBinding;

import com.practice.kafka.stream.GreetingsStreams;

@EnableBinding(GreetingsStreams.class)
public class StreamsConfig {
}
