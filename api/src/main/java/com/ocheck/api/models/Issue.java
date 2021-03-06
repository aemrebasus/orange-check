
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
 * @author Ahmet Emrebas on 11/7/2020 8:37 AM
 * @project api
 */

enum ISSUE_STATUS {
    NEW, DONE, IN_PROGRESS, CANCELED
}

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Accessors(chain = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long orgId;
    private Long project_id;
    private Long user_id;

    private String title;
    private String description;
    private ISSUE_STATUS status = ISSUE_STATUS.NEW;
    private String tags;
    private Date due = new Date();
    private Long creator_id;

    @CreationTimestamp
    private Date created_at;
    @UpdateTimestamp
    private Date updated_at;
}
