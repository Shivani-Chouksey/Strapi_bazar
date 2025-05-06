import type { Schema, Struct } from '@strapi/strapi';

export interface BannerAdvertisingSection extends Struct.ComponentSchema {
  collectionName: 'components_banner_advertising_sections';
  info: {
    displayName: 'advertising_section';
  };
  attributes: {
    cover_image: Schema.Attribute.Media<'images' | 'files', true>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.Text;
  };
}

export interface BannerHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_banner_hero_banners';
  info: {
    displayName: 'hero_banner';
    icon: 'grid';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
  };
}

export interface BlogBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_sections';
  info: {
    displayName: 'blog_section';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sub_heading: Schema.Attribute.Text;
  };
}

export interface CategoryCategorySection extends Struct.ComponentSchema {
  collectionName: 'components_category_category_sections';
  info: {
    displayName: 'category_section';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    category_section_heading: Schema.Attribute.String &
      Schema.Attribute.Required;
    category_section_subHeading: Schema.Attribute.String &
      Schema.Attribute.Required;
  };
}

export interface ProductPrice extends Struct.ComponentSchema {
  collectionName: 'components_product_prices';
  info: {
    displayName: 'price';
  };
  attributes: {
    currency: Schema.Attribute.String;
    value: Schema.Attribute.Decimal;
  };
}

export interface ProductProductCard extends Struct.ComponentSchema {
  collectionName: 'components_product_product_cards';
  info: {
    description: '';
    displayName: 'product_card';
    icon: 'stack';
  };
  attributes: {
    category: Schema.Attribute.String & Schema.Attribute.Required;
    current_price: Schema.Attribute.Component<'product.price', true>;
    description: Schema.Attribute.Text;
    name: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    old_price: Schema.Attribute.Component<'product.price', false>;
    preview: Schema.Attribute.Media<'images' | 'files', true>;
    review_rating: Schema.Attribute.Component<'product.review-rating', true>;
  };
}

export interface ProductProductSection extends Struct.ComponentSchema {
  collectionName: 'components_product_product_sections';
  info: {
    displayName: 'product_section';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    sub_heading: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ProductReviewRating extends Struct.ComponentSchema {
  collectionName: 'components_product_review_ratings';
  info: {
    displayName: 'review_rating';
  };
  attributes: {
    rating: Schema.Attribute.Decimal;
    review: Schema.Attribute.String;
  };
}

export interface TestimonialTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_testimonials';
  info: {
    description: '';
    displayName: 'testimonial';
  };
  attributes: {
    content: Schema.Attribute.Text;
    user: Schema.Attribute.Component<'testimonial.user-profile', false>;
  };
}

export interface TestimonialTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_testimonial_sections';
  info: {
    displayName: 'testimonial_section';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    sub_heading: Schema.Attribute.Text;
    testimonials_list: Schema.Attribute.Component<
      'testimonial.testimonial',
      true
    >;
  };
}

export interface TestimonialUserProfile extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_user_profiles';
  info: {
    displayName: 'user_Profile';
  };
  attributes: {
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profile_image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banner.advertising-section': BannerAdvertisingSection;
      'banner.hero-banner': BannerHeroBanner;
      'blog.blog-section': BlogBlogSection;
      'category.category-section': CategoryCategorySection;
      'product.price': ProductPrice;
      'product.product-card': ProductProductCard;
      'product.product-section': ProductProductSection;
      'product.review-rating': ProductReviewRating;
      'testimonial.testimonial': TestimonialTestimonial;
      'testimonial.testimonial-section': TestimonialTestimonialSection;
      'testimonial.user-profile': TestimonialUserProfile;
    }
  }
}
