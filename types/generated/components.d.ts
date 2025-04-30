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
    displayName: 'testimonial';
  };
  attributes: {
    heading: Schema.Attribute.String;
    review: Schema.Attribute.Blocks;
    sub: Schema.Attribute.String;
    sub_heading: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banner.advertising-section': BannerAdvertisingSection;
      'banner.hero-banner': BannerHeroBanner;
      'product.price': ProductPrice;
      'product.product-card': ProductProductCard;
      'product.review-rating': ProductReviewRating;
      'testimonial.testimonial': TestimonialTestimonial;
    }
  }
}
