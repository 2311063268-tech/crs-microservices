package vn.edu.crs.courseservice.repository;

import vn.edu.crs.courseservice.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    boolean existsByTenMonHocIgnoreCase(String tenMonHoc);
}