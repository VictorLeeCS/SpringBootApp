package com.firstSpringBoot.testApp1;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/login", "/register", "/").permitAll()
                .requestMatchers(org.springframework.http.HttpMethod.GET, "/items").permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic(basic -> basic.disable()) // Disable HTTP Basic auth popup
            .formLogin(form -> form.disable()) // Disable default Spring Security login form
            .sessionManagement(session -> session
                .sessionCreationPolicy(org.springframework.security.config.http.SessionCreationPolicy.IF_REQUIRED)
                .maximumSessions(1)
                .maxSessionsPreventsLogin(false)
            )
            .logout(logout -> logout
                .logoutUrl("/logout")
                .logoutSuccessHandler((request, response, authentication) -> {
                    SecurityContextHolder.clearContext();
                    request.getSession().invalidate();
                    response.setStatus(200);
                })
                .deleteCookies("JSESSIONID")
            )
            .cors(cors -> {});

        return http.build();
    }
}
