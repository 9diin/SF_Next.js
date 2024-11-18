export interface NavMenu {
    id: number;
    label: string;
    searchValue: string;
    isActive: boolean;
}

export interface ImageDataType {
    alt_description: string;
    alternative_slugs: {
        de: string;
        en: string;
        es: string;
        fr: string;
        it: string;
        ja: string;
        ko: string;
        pt: string;
    };
    asset_type: string;
    blur_hash: string;
    breadcrumbs: Breadcrumb[];
    current_user_collections: [];
    color: string;
    created_at: string;
    description: string;
    height: number;
    id: string;
    liked_by_user: boolean;
    likes: number;
    links: {
        download: string;
        download_location: string;
        html: string;
        self: string;
    };
    promoted_at: string;
    slug: string;
    sponsorship: string | null;
    topic_submissions: null;
    updated_at: string;
    urls: {
        full: string;
        raw: string;
        regular: string;
        small: string;
        small_s3: string;
        thumb: string;
    };
    user: {
        accepted_tos: boolean;
        bio: string;
        first_name: string;
        for_hire: boolean;
        id: string;
        instagram_username: string;
        last_name: string | null;
        links: {
            followers: string;
            following: string;
            html: string;
            likes: string;
            photos: string;
            portfolio: string;
            self: string;
        };
        location: string;
        name: string;
        portfolio_url: string;
        profile_image: {
            large: string;
            medium: string;
            small: string;
        };
        social: {
            instagram_username: string;
            paypal_email: string | null;
            portfolio_url: string;
            twitter_username: string;
        };
        total_collections: number;
        total_illustrations: number;
        total_likes: number;
        total_photos: number;
        total_promoted_illustrations: number;
        total_promoted_photos: number;
        twitter_username: string;
        updated_at: string;
        username: string;
    };
    width: number;
}

interface Breadcrumb {
    index: number;
    slug: string;
    title: string;
    type: string;
}
