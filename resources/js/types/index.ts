export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
}

export interface Post {
    id: number;
    title: string;
    slug: string;
    content: string;
    image: string | null;
    published_at: string | null;
    created_at: string;
    updated_at: string;
    category: Category;
    author: string | null;
    keywords: string | null;
    meta_description: string | null;
}

export interface PaginatedResponse<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}
