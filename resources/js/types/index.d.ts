export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

export interface ProjectProps {
    title: string;
    desc: string;
    image: string;
    image_url: string;
    project_url: string;
};

export interface TeamProps{
    name: string;
    image?: string;
    position: string;
    link?: string;
}
