package com.ocheck.api.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.ocheck.api.security.UserRoles;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * @author Ahmet Emrebas on 11/4/2020 1:04 AM
 * @project api
 */
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Accessors(chain = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long orgId;

    private String firstName;
    private String lastName;
    private String middleName;


    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String userName;
    private String password;


    private UserRoles roles;
    private Boolean active = true;

    @CreationTimestamp
    private Date created_at;
    @UpdateTimestamp
    private Date updated_at;

}

