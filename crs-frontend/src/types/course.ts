export interface Course {
    id: number;
    tenMonHoc: string;
    soTinChi: number;
    soChoToiDa: number;
    soChoConLai: number;
}
// Khop voi cau truc Page<CourseDTO> ma Spring Data JPA tra ve (Buoi
export interface PagedResponse<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
    number: number; // trang hien tai (bat dau tu 0)
    size: number;
}