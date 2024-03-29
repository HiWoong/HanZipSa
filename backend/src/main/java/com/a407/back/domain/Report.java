package com.a407.back.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.io.Serializable;
import java.sql.Timestamp;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

@Table(name = "REPORT")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Report implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "report_id", updatable = false)
    private Long reportId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id", nullable = false)
    private Room roomId;

    @Lob
    @Column(name = "process_image", nullable = false, columnDefinition = "MEDIUMBLOB")
    private String processImage;

    @Column(name = "process_content", nullable = false, length = 50)
    private String processContent;

    @CreationTimestamp
    @Column(name = "created_at", columnDefinition = "TIMESTAMP")
    private Timestamp createdAt;

    @Builder
    public Report(Room roomId, String processImage, String processContent,
        Timestamp createdAt) {
        this.roomId = roomId;
        this.processImage = processImage;
        this.processContent = processContent;
        this.createdAt = createdAt;
    }

}
