export interface MetricData {
  label: string;
  value: string | number;
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    percentage: number;
    label: string;
  };
}

export interface DueTenant {
  id: string;
  name: string;
  roomLabel: string;
  amountDue: number;
  daysOverdue: number;
  avatarUrl?: string;
  phone: string;
}

export interface ActiveIssue {
  id: string;
  category: 'Plumbing' | 'Electrical' | 'Cleaning' | 'Internet' | 'Other';
  title: string;
  tenantName: string;
  roomLabel: string;
  urgency: 'high' | 'medium' | 'low';
  raisedAt: string;
}

export interface HostelOption {
  id: string;
  name: string;
}

export interface OwnerDashboardData {
  hostels: HostelOption[];
  currentHostelId: string | 'all';
  metrics: {
    revenue: MetricData;
    dues: MetricData;
    vacancies: MetricData;
    issues: MetricData;
  };
  dueTenants: DueTenant[];
  activeIssues: ActiveIssue[];
}
