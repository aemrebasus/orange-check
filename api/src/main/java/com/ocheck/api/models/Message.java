package com.ocheck.api.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * @author Ahmet Emrebas on 11/7/2020 6:41 PM
 * @project api
 */

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Accessors(chain = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Message{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long orgId;

    private String message;
    private String tags;

    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    private String middleName;

    private Long to_whom;
    private Long from_who;

    @CreationTimestamp
    private Date created_at;

    @UpdateTimestamp
    private Date  updated_at;
}
