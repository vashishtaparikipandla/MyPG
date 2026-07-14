export interface Amenity {
  id: string;
  label: string;
  icon: string;
}

export interface TrustSignal {
  id: string;
  label: string;
  icon: string;
}

export interface HostelPreview {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  amenities: Amenity[];
  trustSignals: TrustSignal[];
  priceFrom: number;
  originalPrice?: number;
  isFeatured?: boolean;
}

export interface TenantDiscoveryData {
  properties: HostelPreview[];
}
